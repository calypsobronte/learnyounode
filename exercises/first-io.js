//## MY FIRST IO (Ejercicio 3  de  13 )

// * Escribir un programa que acepta
//(calypso_bronte)
var fs = require("fs");

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split("\n").length - 1;
console.log(lines);


