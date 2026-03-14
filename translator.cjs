const fs = require('fs');
const path = require('path');
const translate = require('translate-google');

const dir = path.join(__dirname, 'src', 'views', 'products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.vue'));

const delay = ms => new Promise(res => setTimeout(res, ms));

async function processFiles() {
    for (const file of files) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        console.log(`Processing ${file}...`);

        // Find all <p> and <li> that do not contain HTML, just text, and no vue bindings.
        const pRegex = /<p>(?!<)(.*?)<\/p>/g;
        const liRegex = /<li>(?!<)(.*?)<\/li>/g;

        let toTranslate = [];

        let match;
        while ((match = pRegex.exec(content)) !== null) {
            if (match[1].trim() && !match[1].includes('{{') && !match[1].includes('&quot;')) {
                toTranslate.push(match[1]);
            }
        }
        while ((match = liRegex.exec(content)) !== null) {
            if (match[1].trim() && !match[1].includes('{{') && !match[1].includes('&quot;')) {
                toTranslate.push(match[1]);
            }
        }

        if (toTranslate.length === 0) continue;

        // De-duplicate
        toTranslate = [...new Set(toTranslate)];

        // Translate in chunks if large, but usually small per file
        try {
            const translatedArr = await translate(toTranslate, { to: 'tr' });

            let newContent = content;
            for (let i = 0; i < toTranslate.length; i++) {
                const original = toTranslate[i];
                const translated = translatedArr[i];

                // replace all occurrences of this exact original string enclosed in <p> or <li>
                // we have to escape regex chars
                const safeOriginal = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                newContent = newContent.replace(new RegExp(`<p>${safeOriginal}<\/p>`, 'g'), `<p>${translated}</p>`);
                newContent = newContent.replace(new RegExp(`<li>${safeOriginal}<\/li>`, 'g'), `<li>${translated}</li>`);
            }

            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated ${file}`);
            }

        } catch (e) {
            console.error(`Error translating ${file}:`, e);
        }

        await delay(1000); // Wait 1 second between files to avoid rate limits
    }
}

processFiles().then(() => console.log('Done!'));
