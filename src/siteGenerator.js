const fs = require('fs');
const ejs = require('ejs');

let macro_data = fs.readFileSync('../data/states.json', 'utf8');
let macro_template = fs.readFileSync('views/index.ejs', 'utf8');
let micro_data[] = [fs.readFileSync('../data/states.json', 'utf8');
let micro_template = fs.readFileSync('views/micro.ejs', 'utf8');

let index_html = ejs.render(macro_template, {
  filename: __dirname + 'views/index.ejs',
  data: JSON.parse(macro_data)
});

fs.writeFileSync('../build/index.html', index_html, 'utf8');
