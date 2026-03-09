const fs = require('fs');
const html = fs.readFileSync('larosee_origin.html', 'utf8');

// Quick and dirty regex extraction for the major parts
const extract = (regex, name) => {
  const match = html.match(regex);
  if (match) {
    fs.writeFileSync(`extracted_${name}.html`, match[0]);
    console.log(`Extracted ${name}`);
  } else {
    console.log(`Failed to extract ${name}`);
  }
};

// 1. All stylesheet links
const links = html.match(/<link rel="stylesheet"[^>]+>/g);
if (links) {
  fs.writeFileSync('extracted_links.html', links.join('\n'));
  console.log(`Extracted ${links.length} links`);
}

// 2. Header
const headerRegex = /<header[^>]*class="Header-module[^>]*>[\s\S]*?<\/header>/;
extract(headerRegex, 'header');

// 3. Main content
// Since <main> contains closing tags, we have to be careful. The main content ends before the Footer usually, or we can just regex <main id="content"...> ... </main>
// A better way is using jsdom, but we don't have it installed. We can use String indexOf.
const mainStart = html.indexOf('<main class="Layout-module__content___wEYFD" id="content">');
const footerStart = html.indexOf('<footer class="Footer-module', mainStart);

if (mainStart !== -1 && footerStart !== -1) {
    const mainHtml = html.substring(mainStart, footerStart);
    // Find the last </main> before footerStart
    const mainEnd = mainHtml.lastIndexOf('</main>') + 7;
    fs.writeFileSync('extracted_main.html', mainHtml.substring(0, mainEnd));
    console.log('Extracted main');
}

// 4. Footer
// Footer goes until </footer>
const footerEndIndex = html.indexOf('</footer>', footerStart);
if (footerStart !== -1 && footerEndIndex !== -1) {
    fs.writeFileSync('extracted_footer.html', html.substring(footerStart, footerEndIndex + 9));
    console.log('Extracted footer');
}
