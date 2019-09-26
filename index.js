const express = require('express');
const app = express();
var fs = require('fs');
app.set('view engine', 'pug');
var path = require('path');
app.set('views', './views');
var s = require("./views/rate");
app.use(express.static('public'));


app.get('/province/:province', (req, res) => {
  fs.readFile(req.params.province + '.json', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    var dataretrieved = JSON.parse(data);
    res.render('index',dataretrieved);



  });
});



app.get('/rate', (req, res) => {
  var id = req.query.id;
  console.log(req.query)
  console.log(req)
  var province = req.query.shortname;
  var data = JSON.parse(readJSON.readJSON(shortname));
  var average =Number(data.averageRate)+ Number(id)
  data.averageRate =average;
  data.averageRate = Number(data.averageRate /2).toFixed(1)
  updateJSON.updateJSON(province, data)
  res.end("" + data.averageRate)
})






app.get('/', (req, res) => {
  res.render('index');
});

// app.post('/rate', (req,res)=> { 
//   s.addFile(req,res);
// });


app.listen(3000, () => {
  console.log('Listening on port 3000...');
});