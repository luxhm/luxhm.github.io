const fs = require('fs');

let states = [];

let states_csv = fs.readFileSync('states.csv', 'utf8');

let states = states.split("\n");

peeps.forEach(function(peep) {
  let state_info = peep.split(',');
  let state = {};
  state['name'] = state_info[1];
  state['spending'] = character_info[2];
  state['gradRate'] = character_info[3];

  /*if (state_info[3])
    state['skills'] = character_info[12].split('|');
  else {
    character['skills'] = [];
  }*/

  characters.push(character);
});

fs.writeFileSync('states.json', JSON.stringify(states), 'utf8');
