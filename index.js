const express = require("express");
const app = express();

const port = 3000;

app.get('/',function(req,res){
  res.send("<h1>Hello CodersLazy</h1>")
})

app.get('/user',function(req,res){
  res.send("User List")
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});