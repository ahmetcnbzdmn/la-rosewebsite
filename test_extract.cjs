const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('test_product.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

const mainContent = document.querySelector('main#content');
if (mainContent) {
    console.log("Found main content! Length:", mainContent.outerHTML.length);
    // Write out the extracted main content for review
    fs.writeFileSync('extracted_test_product.html', mainContent.innerHTML);
} else {
    console.log("Main content not found.");
}
