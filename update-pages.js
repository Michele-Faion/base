// update-pages.js
// Script Node.js per inserire head.html e foot.html in tutte le pagine HTML
const fs = require('fs');
const path = require('path');

const htmlFiles = ['index.html', 'storia.html', 'servizi.html', 'contatti.html'];
const baseDir = __dirname;

const head = fs.readFileSync(path.join(baseDir, 'head.html'), 'utf8');
const foot = fs.readFileSync(path.join(baseDir, 'foot.html'), 'utf8');

htmlFiles.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Rimuovi vecchi header/footer
    content = content.replace(/<header>[\s\S]*?<\/header>/, '');
    content = content.replace(/<footer>[\s\S]*?<\/footer>/, '');
    // Inserisci header dopo <body>
    content = content.replace(/<body[^>]*>/, match => match + '\n' + head);
    // Inserisci footer prima di </body>
    content = content.replace(/<\/body>/, foot + '\n</body>');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Aggiornato ${file}`);
});
console.log('Tutte le pagine sono state aggiornate con header e footer.');
