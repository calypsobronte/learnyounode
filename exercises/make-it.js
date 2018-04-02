//## MAKE IT MODULAR (Ejercicio 6  de  13 )

// * Escribir un programa que acepta
//(calypso_bronte)

const myModule = require("./makeItModular");
myModule(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    return err;
  }
  return files.forEach(file => {
    return console.log(file);
  });
});
