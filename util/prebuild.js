const fs = require('fs');
const path = require("path")
var fsX = require("fs-extra");

const list = fs.readdirSync('../build');

for(i=0;i<=list.length-1;i++){
  try{
    fs.unlinkSync('./build'+list[i]);
  }
  catch(err){
    console.error(err);
  }
}

fs.mkDirSync("build");

//This needs to copy all of the static folders from the src folder into the new build folder
var source = '../src/images'
var destination = '../util/build/images'

fsX.copy(source, destination, function (err) {
    if (err){
        console.log('An error occurred while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
