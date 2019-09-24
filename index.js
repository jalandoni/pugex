const express = require('express');
const app = express();
var fs = require('fs');
app.set('view engine', 'pug');
var path = require('path');
app.set('views', './views');

app.use(express.static(path.resolve('./public')));


app.get('/province/:province', (req, res) => {
  fs.readFile(req.params.province +'.json', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    var dataretrieved = JSON.parse(data);
    res.render('index', 
      {province : dataretrieved.Province, pic1:dataretrieved.img1,
     pic2:dataretrieved.img2, pic3:dataretrieved.img3, pp:dataretrieved.population, 
     gp:dataretrieved.groupOfIsland, deli:dataretrieved.delicacies, mark:dataretrieved.write});
    


  });
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});