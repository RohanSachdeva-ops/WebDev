
const fs = require("fs");

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
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  // res -- khali thaila
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
    <head><title>Complete Coding</title></head>
    <body><h1>Enter your details</h1>
    <form action="/submit-details" method="POST">
    <input type="text" name="username" placeholder="Enter your name" /><br>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male" />
    
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="female" /><br>
    <input type="submit" value="Submit">
    </form>
    </body>
    </html>
    `);
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>complete coding</title></head>");
    res.write("<body><h1>Products</h1></body>");
    res.write("</html>");
    return res.end();
  } 
  else if(req.url.toLowerCase()==="/submit-details" && req.method =="POST"){

    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })

    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObject = {};
      for(const [key,value] of params.entries()){
        bodyObject[key]=value;
      }
      console.log(bodyObject);
      const bodyObject2 = Object.fromEntries(params);
      console.log(bodyObject2);
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
    })

    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
  }
  
  else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>complete coding</title></head>");
    res.write("<body><h1>Some Random URL</h1></body>");
    res.write("</html>");
    res.end();
  }
};
// const server = http.createServer((req,res)=>{
//   console.log(req);
//   process.exit(); //exit from the server
// })


module.exports = userRequestHandler;