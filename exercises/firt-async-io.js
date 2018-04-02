//## MY FIRST ASYNC IO (Ejercicio 4  de  13 )

// * Escribir un programa que acepta
//(calypso_bronte)
var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
  var val = data.toString().split("\n").length - 1;
  console.log(val);
});

//===================================================
//RESPUESTA DE LEARNYOUNODE
/*   var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/
//===================================================