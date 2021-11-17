const fs = require('fs');
const ejs = require('ejs');

let character_info = fs.readFileSync('data/potter.json', 'utf8');
let index_template = fs.readFileSync('views/index.ejs', 'utf8');

let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(character_info)
});

fs.writeFileSync('build/index.html', index_html, 'utf8');
