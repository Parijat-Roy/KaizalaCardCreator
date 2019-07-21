const jsonapp = require('json-server');
var bodyParser = require('body-parser');
const fs = require("fs");
const express = require("express");
const path = require('path');
const server = jsonapp.create()
const router = jsonapp.router('db.json')
const middlewares = jsonapp.defaults();
const app = express();

// app.use(middlewares);
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);
// C:\Users\HemantKumar\Desktop\IOT\New folder\Angular\HTMLDemo\templateapp\dist\templateapp
app.use(express.static(path.join(__dirname ,"../templateapp/dist/templateapp")));
app.get("/app", (req,res) => {
    console.log("gf");
    res.sendFile(path.join(__dirname, "../templateapp/dist/templateapp/index.html"));
});
var template_start = `<!DOCTYPE html>
<html>
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
</style>
<body>`;

var template_end =`</body>
</html>`

app.post("/html", (req,res) =>{
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log(req.body.html);
  const template = req.body.html;
  const html = template_start + template + template_end;
  fs.writeFile("temp.html", html , (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
 
   res.end(JSON.stringify(html, null, 2))
});

app.get("/html/download", (req,res) =>{
  res.sendfile(__dirname + '/temp.html');

});

app.use(router)
app.listen(8080, () => {
  console.log('JSON app is up and running')
})