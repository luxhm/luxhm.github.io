const fs = require('fs');

let states = [];

let states_csv = fs.readFileSync('states.csv', 'utf8');

let states = states.split("\n");

peeps.forEach(function(peep) {
  let state_info = peep.split(',');
  let state = {};
  state['name'] = state_info[1];
  state['gender'] = character_info[2];
  state['house'] = character_info[4];
  state['species'] = character_info[7];

  if (character_info[12])
    character['skills'] = character_info[12].split('|');
  else {
    character['skills'] = [];
  }

  characters.push(character);
});

fs.writeFileSync('data/potter.json', JSON.stringify(characters), 'utf8');
