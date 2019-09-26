const express = require('express');
const app = express();
var fs = require('fs');
app.set('view engine', 'pug');
var path = require('path');
app.set('views', './views');
var myRequest = 0 



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




app.post('/rate', (req, res) => {
  myRequest++
    fs.writeFile("request.txt", myRequest, function (err) {
      if (err) {
        console.log("error!");
      }
    }); 
    console.log(myRequest+ " rate");
  req.on('data', function (req) {
           store = JSON.parse(req);
           fs.readFile('./'+store.shortname+'.json', function (e, data) {
            if (e) {
            console.log(404);
            res.sendStatus(404);
            }
            var content = JSON.parse(data);
            var initial = (parseInt(store.id, 10) + parseInt(content.rate, 10)) / 2;
               if (content.rate== 0) {
                   content.rate = store.id * 1
               }
               else {
                   content.rate = initial

            }
            console.log(initial + '');
            res.send(''+content.rate);
            var jsonContent = JSON.stringify(content);
            fs.writeFile('./'+store.shortname+'.json',  jsonContent, 'utf8', function(err) {
                  if(err) {
                            return console.log(err);
                           }
              });
           })
       });
   req.on('end', function () {})
   })





app.all('*', function (req, res, next) {
    myRequest++
    fs.writeFile("request.txt", myRequest, function (err) {
      if (err) {
        console.log("error!");
      }
    }); 
    next();
  });
  

app.use(express.static('public'));



app.listen(3000, () => {
  console.log('Listening on port 3000...');
});