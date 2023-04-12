/** Completo cada console.log vació con el código necesario para realizar cada ejercicio. Ayuda: https://www.w3schools.com/js/js_string_methods.asp  */

let texto = "Front-End"; // Si cambiaramos esta palabra, debería seguir funcionando todos los ejercicios

console.log("Ejercicio 1: Longitud del string"); 
console.log(texto.length);  // por ejemplo, aquí, entre los paréntesis, tenemos que poner: texto.length

console.log("Ejercicio 2: Primer carácter del string"); 
console.log(texto.charAt(0)); 

console.log("Ejercicio 3: Último carácter del string"); 
console.log(texto.trim() .charAt(texto.trim() .length-1)); 

console.log("Ejercicio 4: Primeros 3 caracteres del string"); 
console.log(texto.substring(0, 3)); 

console.log("Ejercicio 5: Últimos 3 caracteres del string"); 
console.log(texto.substring(6, 9)); 

console.log("Ejercicio 6: String en mayúsculas"); 
console.log(texto.toUpperCase()); 

console.log("Ejercicio 7: String en minúsculas"); 
console.log(texto.toLowerCase()); 

console.log("Ejercicio 8: Devuelve el índice del primer carácter 'F'"); 
console.log(texto.indexOf("F")); 

console.log("Ejercicio 9: Posición del último carácter 'd'"); 
console.log(texto.lastIndexOf("d")); 

console.log("Ejercicio 10: String en orden inverso"); 
console.log(texto.split("") .reverse() .join("")); 

texto = "Singulars";
console.log("Ejercicio 11: String last letter");
console.log(texto.charAt(texto.length-1));
