//## MAKE IT MODULAR (Ejercicio 6  de  13 )

// * Programa Modular del make-it.js
//(calypso_bronte)
const fs = require("fs");
const path = require("path");

module.exports = (dirName, getExt, cb) => {
  return fs.readdir(dirName, (err, files) => {
    if (err) {
      return cb(err);
    }
    const filteredArray = files.filter(file => {
      const ext = path.extname(file);
      if ("." + getExt === ext) {
        return true;
      }
    });
    return cb(null, filteredArray);
  });
};
