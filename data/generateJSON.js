const fs = require('fs');

let states = [];

let stateNames_csv = fs.readFileSync('states.csv', 'utf8');

let stateNames = stateNames_csv.split("\n");

stateNames.forEach(function(stateName) {
  let state_info = stateName.split(',');
  let state = {};
  state['name'] = state_info[1];
  state['spending'] = state_info[2];
  state['gradRate'] = state_info[3];

  /*if (state_info[3])
    state['skills'] = character_info[12].split('|');
  else {
    character['skills'] = [];
  }*/

  states.push(character);
});

fs.writeFileSync('data/states.json', JSON.stringify(characters), 'utf8');
