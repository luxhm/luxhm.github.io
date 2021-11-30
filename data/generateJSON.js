const fs = require('fs');

let states = [];
let caDistricts = [];
let coDistricts = [];
let flDistricts = [];
let iaDistricts = [];
let laDistricts = [];
let moDistricts = [];
let nmDistricts = [];
let nyDistricts = [];
let okDistricts = [];
let txDistricts = [];
let wvDistricts = [];

let microStateNames = ["California", "Colorado", "Florida", "Iowa", "Louisiana", "Missouri", "NewMexico", "NewYork", "Oklahoma", "Texas", "WestVirginia"];

for (let microState of microStateNames){
  global[microState + "_csv"] = fs.readFileSync(microState+".csv", 'utf8');

}

let california = California_csv.split("\n");
let colorado = Colorado_csv.split("\n");
let florida = Florida_csv.split("\n");
let iowa = Iowa_csv.split("\n");
let louisiana = Louisiana_csv.split("\n");
let missouri = Missouri_csv.split("\n");
let newMexico = NewMexico_csv.split("\n");
let newYork = NewYork_csv.split("\n");
let oklahoma = Oklahoma_csv.split("\n");
let texas = Texas_csv.split("\n");
let westVirginia = WestVirginia_csv.split("\n");

let stateNames_csv = fs.readFileSync('states.csv', 'utf8');
let stateNames = stateNames_csv.split("\n");

let microStateCSVData = [california, colorado, florida, iowa, louisiana, missouri, newMexico, newYork, oklahoma, texas, westVirginia];

for (let stateData of microStateCSVData){
  for (let index=1; index<=6; index++){
    let districtName = stateData[index];
    let district_info = districtName.split(',');
    let district = {};
    district['name'] = district_info[0];
    district['spending'] = district_info[1];
    district['gradRate'] = district_info[2].trim("");
    if (stateData == california){
      caDistricts.push(district);
    }
    else if (stateData == colorado){
      coDistricts.push(district);
    }
    else if (stateData == florida){
      flDistricts.push(district);
    }
    else if (stateData == iowa){
      iaDistricts.push(district);
    }
    else if (stateData == louisiana){
      laDistricts.push(district);
    }
    else if (stateData == missouri){
      moDistricts.push(district);
    }
    else if (stateData == newMexico){
      nmDistricts.push(district);
    }
    else if (stateData == newYork){
      nyDistricts.push(district);
    }
    else if (stateData == oklahoma){
      okDistricts.push(district);
    }
    else if (stateData == texas){
      txDistricts.push(district);
    }
    else if (stateData == westVirginia){
      wvDistricts.push(district);
    }
  }
}

for (let index=1; index<=51; index++){
  let stateName = stateNames[index];
  let state_info = stateName.split(',');
  let state = {};
  state['name'] = state_info[0];
  state['spending'] = state_info[1];
  state['gradRate'] = state_info[2].trim("");
  states.push(state);
}

fs.writeFileSync('states.json', JSON.stringify(states), 'utf8');
fs.writeFileSync('California.json', JSON.stringify(caDistricts), 'utf8');
fs.writeFileSync('Colorado.json', JSON.stringify(coDistricts), 'utf8');
fs.writeFileSync('Florida.json', JSON.stringify(flDistricts), 'utf8');
fs.writeFileSync('Iowa.json', JSON.stringify(iaDistricts), 'utf8');
fs.writeFileSync('Louisiana.json', JSON.stringify(laDistricts), 'utf8');
fs.writeFileSync('Missouri.json', JSON.stringify(moDistricts), 'utf8');
fs.writeFileSync('NewMexico.json', JSON.stringify(nmDistricts), 'utf8');
fs.writeFileSync('NewYork.json', JSON.stringify(nyDistricts), 'utf8');
fs.writeFileSync('Oklahoma.json', JSON.stringify(okDistricts), 'utf8');
fs.writeFileSync('Texas.json', JSON.stringify(txDistricts), 'utf8');
fs.writeFileSync('WestVirginia.json', JSON.stringify(wvDistricts), 'utf8');
