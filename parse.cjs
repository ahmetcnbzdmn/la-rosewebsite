const fs = require('fs');
const html = fs.readFileSync('larosee_origin.html', 'utf8');

const extract = (name, regex) => {
    const match = html.match(regex);
    if (match) {
        fs.writeFileSync(`extracted_${name}.html`, match[0]);
        console.log(`Extracted ${name}`);
    } else {
        console.log(`Failed to extract ${name}`);
    }
};

const links = html.match(/<link rel="stylesheet"[^>]+>/g);
if (links) {
    const uniqueLinks = [...new Set(links)]; // Deduplicate just in case
    fs.writeFileSync('extracted_links.html', uniqueLinks.join('\n'));
    console.log(`Extracted ${uniqueLinks.length} unique links`);
}

const headerRegex = /<header[^>]*class="Header-module[^>]*>[\s\S]*?<\/header>/;
extract('header', headerRegex);

const mainStart = html.indexOf('<main class="Layout-module__content___wEYFD" id="content">');
const footerStart = html.indexOf('<footer class="Footer-module');

if (mainStart !== -1 && footerStart !== -1) {
    const mainHtml = html.substring(mainStart, footerStart);
    // Remove the final </div> that belongs to the body/layout
    const mainCleaned = mainHtml.replace(/<\/div>\s*$/, '');
    fs.writeFileSync('extracted_main.html', mainCleaned);
    console.log('Extracted main');
}

const footerEndIndex = html.indexOf('</footer>', footerStart);
if (footerStart !== -1 && footerEndIndex !== -1) {
    fs.writeFileSync('extracted_footer.html', html.substring(footerStart, footerEndIndex + 9));
    console.log('Extracted footer');
}
