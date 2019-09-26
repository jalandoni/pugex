var fs= require('fs')
exports.rate = function(province,data){
    fs.writeFile(('./views/'+ province + ".json").toLowerCase(), JSON.stringify(data), function (err) {
        console.log('Updated!!!')
      });
}