const fs = require('fs');
const list = fs.readdirSync('../build');

for(i=0;i<=list.length-1;i++){
  try{
    fs.unlinkSync('../build/'+list[i]);
  }
  catch(err){
    console.error(err);
  }
}
