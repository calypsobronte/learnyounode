//## MY FITERED LS (Ejercicio 5  de  13 )

// * Escribir un programa que acepta
//(calypso_bronte)

const fs = require("fs");
const path = require("path");
const filePath = process.argv[2];
const getExt = process.argv[3];
fs.readdir(filePath, (err, files) => {
  if (err) {
    return err;
  }
  return files
    .filter(file => {
      const ext = path.extname(file);
      if ("." + getExt === ext) {
        return true;
      }
    })
    .forEach(filteredFile => {
      return console.log(filteredFile);
    });
});