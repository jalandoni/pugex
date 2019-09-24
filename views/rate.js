const express = require('express');
const app = express();
var fs = require('fs');
exports.addFile = (function(req, res) {
    console.log(req);
    

    req.on('data', function(data) {
        var datax = "";
        datax = JSON.parse(data);
        var num = parseFloat(datax.rate);          
        var n = datax.shortname+".json";
        console.log(n);

         fs.readFile(n, function(err, data) {
            var dic = "";
            if (err) {
                res.sendStatus(404);
            }
            dic = JSON.parse(data);

            var num2 = dic.rate;
            var divd = 2;
            if (parseFloat(dic.rate) == 0) {
                divd = 1;
            }
            var ans = (parseFloat(num2) + parseFloat(num)) / divd;
            console.log(ans);    
            var file = require(n);

            file.rate = ans;

            fs.writeFile(n, JSON.stringify(file, null, 2), function(err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + n);
                req.on('end', function() {
                    res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
                });
            });
        });

    });






});