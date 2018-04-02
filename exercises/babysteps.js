//## BABY  STEPS (Ejercicio 2  de  13 )  
   
// * Escribir un programa que acepta 
//(calypso_bronte)
 var result = 0

 for (var i = 2; i < process.argv.length; i++) {
     result += Number(process.argv[i])
 }

 console.log(result)
