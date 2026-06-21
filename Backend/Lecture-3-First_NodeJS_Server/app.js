const http = require('http');


// // ---------METHOD-1---------------
// //Order of parameter should be this only
// function requestListener(req,res){
//   console.log(req);
// }
// //We are not calling the function we are passing the reference
// http.createServer(requestListener);

//----------METHOD-2----------------
// http.createServer(function (req,res){
//   console.log(req);
// })

//This returns the object
// http.createServer((req,res)=>{
//   console.log(req);
// })


//we have to make server listen to the request ,just making server will not do our jobs
const server = http.createServer((req,res)=>{
  console.log(req);
  process.exit(); //exit from the server
})

// 3000 - port
const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server is lestening on adress http://localhost:${PORT}`);
});