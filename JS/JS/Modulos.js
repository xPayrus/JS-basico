import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js"; // "as" es para colocar un alias

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(2, 3));
console.log(calculos.restar(2, 3));
saludar();
let saludo = new Saludar();
saludo;
