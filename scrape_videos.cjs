const cheerio = require('cheerio');

async function scrapeVideos() {
    const res = await fetch('https://www.larosee-cosmetiques.com/en-ww');
    const html = await res.text();
    const $ = cheerio.load(html);

    const videos = [];
    $('video').each((i, el) => {
        const props = Object.keys(el.attribs).map(k => `${k}="${el.attribs[k]}"`).join(' ');
        let sources = '';
        $(el).find('source').each((j, src) => {
            sources += `\n    <source src="${src.attribs.src}" type="${src.attribs.type}">`;
        });

        console.log(`<video ${props}>${sources}\n</video>\n`);
    });
}

scrapeVideos().catch(console.error);
