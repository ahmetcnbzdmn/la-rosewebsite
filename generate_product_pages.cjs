const fs = require('fs');
const https = require('https');
const { JSDOM } = require('jsdom');

const allProductsVue = fs.readFileSync('src/views/AllProducts.vue', 'utf8');
const handleRegex = /\/en-ww\/products\/([a-zA-Z0-9_-]+)/g;
let match;
const handles = new Set();
while ((match = handleRegex.exec(allProductsVue)) !== null) {
    handles.add(match[1]);
}

console.log(`Found ${handles.size} unique products.`);

fs.mkdirSync('src/views/products', { recursive: true });
fs.mkdirSync('src/router', { recursive: true });

async function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = res.headers.location.startsWith('http') ? res.headers.location : `https://www.larosee-cosmetiques.com${res.headers.location}`;
                return resolve(fetchHtml(redirectUrl));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processProduct(handle) {
    const url = `https://www.larosee-cosmetiques.com/en-ww/products/${handle}`;
    try {
        const html = await fetchHtml(url);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const main = document.querySelector('main#content');
        if (!main) {
            console.error(`No main content for ${handle}`);
            return;
        }

        // Convert internal links to router-links
        const links = main.querySelectorAll('a[href^="/en-ww/"]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            const routerLink = document.createElement('router-link');
            routerLink.setAttribute('to', href);
            routerLink.innerHTML = link.innerHTML;
            for (const attr of link.attributes) {
                if (attr.name !== 'href') {
                    routerLink.setAttribute(attr.name, attr.value);
                }
            }
            link.parentNode.replaceChild(routerLink, link);
        });

        // Prevent forms from doing a full page reload if clicked
        const forms = main.querySelectorAll('form');
        forms.forEach(form => {
            form.setAttribute('onsubmit', 'event.preventDefault();');
        });

        // Remove scripts
        const scripts = main.querySelectorAll('script');
        scripts.forEach(s => s.remove());

        const styleBlock = `
<style scoped>
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/(_locale).products-DWrnr3_0.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/AccordionItemWithBlocks-CS93tsL9.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/AccordionTrigger-BjxFsE5L.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Button-BWrVdNmk.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Checkbox-BrQ__5GM.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Drawer-CBmL4__N.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/ErrorComponent-Cg7G-mv_.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Eyebrow-DBM0L1h6.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/FeaturedCollections-DiljDMPO.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/FeaturedProduct-CwES1Z3P.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/FormMessage-CpcvjeNt.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Heading-UbiRvuAy.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/IconWithText-D5uaned9.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Input-DK5p490S.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Link-BP8wjzXN.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/ProductMainInfos-EmnV0T6n.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Reassurances-DdrH_mzr.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/SearchForm-BJgfYB1Y.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/Section-DDPw7sZE.css');
@import url('https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3128519/assets/ShoppableCard-C88Z7JXW.css');
</style>
`;

        let vueHtml = `<template>\n${main.outerHTML}\n</template>\n${styleBlock}`;

        // Prevent Vue compilation errors with rogue {{ }}
        vueHtml = vueHtml.replace(/\{\{/g, '{ {').replace(/\}\}/g, '} }');

        fs.writeFileSync(`src/views/products/${handle}.vue`, vueHtml);
        console.log(`Saved ${handle}`);
    } catch (e) {
        console.error(`Error processing ${handle}:`, e);
    }
}

async function generateAll() {
    const handlesArray = Array.from(handles);
    for (let i = 0; i < handlesArray.length; i++) {
        await processProduct(handlesArray[i]);
        await delay(100);
    }

    // Generate route file
    const imports = handlesArray.map((h, i) => `import Product_${i} from '../views/products/${h}.vue';`).join('\n');
    const routes = handlesArray.map((h, i) => `  { path: '/en-ww/products/${h}', name: 'Product_${i}', component: Product_${i} }`).join(',\n');

    const routerCode = `${imports}\n\nexport const productRoutes = [\n${routes}\n];\n`;
    fs.writeFileSync('src/router/productRoutes.js', routerCode);
    console.log('Done generating routes in src/router/productRoutes.js.');
}

generateAll();
