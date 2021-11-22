const fs = require('fs');

let states = [];

let stateNames_csv = fs.readFileSync('states.csv', 'utf8');

let stateNames = stateNames_csv.split("\n");

for (let index=1; index<=51; index++){
  let stateName = stateNames[index];
  let state_info = stateName.split(',');
  let state = {};
  state['name'] = state_info[0];
  state['spending'] = state_info[1];
  console.log(state_info[2]);
  state['gradRate'] = state_info[2].trim("");
  states.push(state);
}

fs.writeFileSync('data/states.json', JSON.stringify(characters), 'utf8');
