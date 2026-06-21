console.log("demo");

//File writing Capabilities
const fs = require('fs');
fs.writeFile("output.txt","Lecture-2",(err)=>{
  if(err) console.log("Error Occured");
  else console.log('File written successfully');
})
