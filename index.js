const express = require("express");
const app = express();

const port = 3000;
app.set('view engine','pug');
app.set('views','./views');
app.get('/',function(req,res){
  res.render('index',{
      name: 'CodersLazy'
  });
});

app.get('/users',function(req,res){
  res.render('users/index',{
      users:[
          {id:1 , name : 'Quang'},
          {id:2 , name : 'Đức'},
          {id:3 , name : 'Vương'}
      ]
  });
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});