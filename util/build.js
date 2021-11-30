const fs = require('fs');
const ejs = require('ejs');

let macro_data = fs.readFileSync('./data/states.json', 'utf8');
let macro_template = fs.readFileSync('./src/views/index.ejs', 'utf8');
let about_template = fs.readFileSync('./src/views/about.ejs', 'utf8');
let micro_template = fs.readFileSync('./src/views/micro.ejs', 'utf8');

let microStateNames = ["California", "Colorado", "Florida", "Iowa", "Louisiana", "Missouri", "NewMexico", "NewYork", "Oklahoma", "Texas"];

for (let microNum = 1; microNum<=10; microNum++){
  global["micro"+microNum] = fs.readFileSync("./data/" + microStateNames[microNum-1] + ".json", 'utf8');
}

let index_html = ejs.render(macro_template, {
  filename: __dirname + './src/views/index.ejs',
  data: JSON.parse(macro_data)
});

let about_html = ejs.render(about_template, {
  filename: __dirname + './src/views/about.ejs',
  data: JSON.parse(macro_data)
});

let micro_html;
for (let microNum = 1; microNum<=10; microNum++){
  micro_html = ejs.render(micro_template, {
    filename: __dirname + './src/views/micro.ejs',
    data: "micro"+microNum
  });
  fs.writeFileSync("./build/micro" + microStateNames[microNum-1] + ".html", micro_html, "utf8");
}

fs.writeFileSync('./build/index.html', index_html, 'utf8');
fs.writeFileSync('./build/about.html', about_html, 'utf8');
