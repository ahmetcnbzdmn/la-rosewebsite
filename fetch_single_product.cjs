const https = require('https');
const fs = require('fs');

const url = 'https://www.larosee-cosmetiques.com/en-ww/products/savon-surgras';

https.get(url, (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            fs.writeFileSync('test_product.html', rawData);
            console.log('Saved product HTML');
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
