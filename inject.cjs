const fs = require('fs');

const inject = (vueFile, htmlFile) => {
    let vueContent = fs.readFileSync(vueFile, 'utf8');
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');

    // Replace <template> block
    vueContent = vueContent.replace(/<template>[\s\S]*<\/template>/, `<template>\n${htmlContent}\n</template>`);

    // Purge <style scoped> block to prevent local overrides from touching the True DOM
    vueContent = vueContent.replace(/<style scoped>[\s\S]*<\/style>/, `<style scoped>\n/* styles purged */\n</style>`);

    fs.writeFileSync(vueFile, vueContent);
    console.log(`Injected ${htmlFile} into ${vueFile}`);
};

inject('src/components/Navbar.vue', 'extracted_header.html');
inject('src/views/Home.vue', 'extracted_main.html');
inject('src/components/Footer.vue', 'extracted_footer.html');
