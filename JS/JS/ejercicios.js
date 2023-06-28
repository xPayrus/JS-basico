//*****34. Ejercicios de Lógica de Programación******
/*
      1) Programa una función que cuente el número de caracteres de una cadena de
      texto, pe. miFuncion("Hola Mundo") devolverá 10.
      2) Programa una función que te devuelva el texto recortado según el número
      de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
      3) Programa una función que dada una String te devuelva un Array de textos
      separados por cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá
      ['hola', 'que', 'tal'].
      4) Programa una función que repita un texto X veces, pe. miFuncion
      ('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
      */

//1
//primera forma de hacerlo
/* function miFuncion(x = "Hola mundo") {
  console.log(x.length);
}

miFuncion();  */

//segunda forma de hacerlo
/* const miFuncion = (contar) =>
  console.log(`${contar} tiene ${contar.length} elementos`);

miFuncion("hola mundo");  */

//2
//primera forma de hacerlo
/* 
function miFuncion(x) {
  console.log(x.slice(0, 4));
}

miFuncion("hola mundo"); */

//segunda forma de hacerlo
/*const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.slice(0, longitud));

recortarTexto("Hola mundo", 4);*/

/* //3
const string = "hola que tal";

function sexo() {
  console.log(string.split(" "));
}

sexo(string); */

//4
//segunda forma de hacerlo
/* const string = "hola mundo ";

function sexo() {
  console.log(string.repeat(5));
}

sexo(string); */

//segunda forma de hacerlo
/* const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined)
    return console.warn("No ingresaste el numero de veces a repetir el texto");

  if (veces === 0) return console.error("El numero de veces no puede ser 0");

  if (Math.sign(veces) === -1)
    return console.error("El numero de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

repetirTexto("hola mundo", 3);
repetirTexto("hola mundo", 0);
repetirTexto("hola mundo", -20);
repetirTexto("", 3);
repetirTexto("hola mundo"); */

//************* 35. Ejercicios de Lógica de Programación ***************
/* 
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra
 en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

//5
//primera forma de resolver sin terminar xd
/* const invertir = (cadena) =>
  !cadena
    ? console.warn("no colocaste ninguna cadena")
    : console.log(cadena.split("").reverse().join(""));

invertir();
invertir("hola mundo"); */

//segunda forma de resolver
/* function invertirPalabras(cadena) {
  // Dividimos la cadena en palabras
  const palabras = cadena.split(" ");

  // Invertimos cada palabra individualmente y las unimos en una cadena invertida
  const cadenaInvertida = palabras
    .map((palabra) => palabra.split("").reverse().join(""))
    .join(" ");

  // Devolvemos la cadena invertida
  return cadenaInvertida;
}

// Ejemplo de uso
const cadenaOriginal = "Hola Mundo";
const cadenaInvertida = invertirPalabras(cadenaOriginal);
console.log(cadenaInvertida); // Output: "odnuM aloH" */

//6
//primera forma de resolverlo
/* const palabraRep = (texto = "", repeated) => {
  let word = new RegExp(repeated, "ig");
  let numPalabras = texto.match(word);
  !texto
    ? console.warn("no colocaste cadena de texto")
    : console.log(numPalabras.length);
};

palabraRep();
palabraRep("");
palabraRep("sexo every dei sexo every nai xd xd xd", "xd");
palabraRep(
  "hola mundo, adios mundo, buenas noches mundo, ja mundo, sexo mundo, mundo mundo",
  "mundo"
); */

//segunda forma de resolverlo
/*const contarTexto = (cadena, texto) => {
  if (!cadena) return console.warn("no ingresaste el texto largo");

  if (!texto) return console.warn("no ingresaste la palabra a buscar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`la palabra ${texto} se repite ${contador} veces`);
};

contarTexto();
contarTexto("", "sexo");
contarTexto("sexo every dei sexo every nai xd xd xd", "");
contarTexto("sexo every dei sexo every nai xd xd xd", "sexo"); */

//7
//primera forma de hacerlo
/* const revertir = (palabra) => {
  const texto = palabra.split("").reverse().join("");

  if (!palabra) return console.warn("no hay palabra para verificar");

  if (palabra !== texto)
    console.info(`la palabra ${palabra} no es un palíndromo`);

  if (palabra === texto) console.info(`la palabra ${palabra} es un palíndromo`);
};

revertir("");
revertir("arenera");
revertir("radar");
revertir("salas");
revertir("porno"); */

//segunda forma de hacerlo
/* const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("no registraste una frase o palabra");
  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `si es un palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      )
    : console.info(
        `no es un palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      );
};

palindromo();
palindromo("hola mundo");
palindromo("SaLAs"); */

/*
8 Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
//primera forma de hacerlo
/* const resultado = (texto) => {
  const result = texto.split("xyz").join("");
  console.log(result);
};

resultado("xyz1, xyz2, xyz3, xyz4 y xyz5"); 
 */
//segunda forma de hacerlo
/* const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("no ingresaste un texto")
    : !patron
    ? console.warn("no ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), "")); //replace remplaza un carácter, el primer parámetro dices que carácter quieres eliminar y el segundo por cual sera remplazado

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres(
  `Las expresiones1 regulares son patrones que se utilizan2 para hacer coincidir combinaciones de caracteres en cadenas. En3 JavaScript, las expresiones regulares4 tambien son5 objetos6`,
  "[a-z]"
); */

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los 
números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//9
//primera forma de resolver
/* const numRandom = () => {
  console.log(Math.round(Math.random() * 100) + 500);
};

numRandom(); */

//segunda forma de resolver
/* const numRandom = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
};

numRandom(501, 600); */

//10
//primera forma de resolver
/* const capicúa = (numero = "") => {
  const invertirNum = numero.toString().split("").reverse().join("");

  if (!numero) console.warn("no colocaste numero a valorar");
  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);
  else if (numero == invertirNum)
    console.log(`el numero ${numero} es un numero capicúa`);
  else
    console.log(
      `el numero ${numero} no es un numero capicúa porque al revés es: ${invertirNum}`
    );
};

capicúa();
capicúa("19");
capicúa(19);
capicúa(2001);
capicúa(2002);
capicúa(1991);
capicúa(212.212); */

//segunda forma de resolver

//11
//primera forma de resolver (sin terminar)
/* const factorial = (numero) => {
  let contador = 1;

  for (let i = numero; i > 1; i--) {
    let formula = (contador *= i);
  }
  return console.log(`el factorial de ${numero} es ${contador}`);
};

factorial(5);
factorial(3); */

//segunda forma de resolver
/* const factorial = (numero) => {
  let contador = 1;

  for (let i = numero; i > 1; i--) {
    contador *= i;
  }
  console.log(`el factorial de ${numero} es ${contador}`);
};

factorial(5);
factorial(3);
 */

//tercera forma de resolver
/*const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("no ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  if (numero === 0) return console.error("el numero no puede ser 0");

  if (Math.sign(numero) === -1)
    return console.error("el numero no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`el factorial de ${numero} es ${factorial}`);
};

factorial();
factorial("5");
factorial([1, 2, 3]);
factorial(0);
factorial(-43);
factorial(5);
factorial(8); */

/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible
por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
 */

//12
//primera forma de resolver
/* const numPrimo = (numero = undefined) => {
  if (Number.isInteger(numero / 2)) {
    return console.log(false);
  } else {
    return console.log(true);
  }
};

numPrimo(3);
numPrimo(5);
numPrimo(7);
numPrimo(11);
numPrimo(17);
numPrimo(4);
numPrimo(6);
numPrimo(8);
numPrimo(10);
numPrimo(12); */

//segunda forma de resolver
/* const numPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("no ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  if (numero === 0) return console.error("el numero no puede ser 0");

  if (numero === 1) return console.error("el numero no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("el numero no puede ser negativo");
  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`el numero ${numero}, NO es primo`)
    : console.log(`el numero ${numero}, SI es primo`);
};

numPrimo();
numPrimo("370");
numPrimo(true);
numPrimo(0);
numPrimo(1);
numPrimo(-18);
numPrimo(13);
numPrimo(7);
numPrimo(4); */

//13
//primera forma de resolver
/*const numParImpar = (numero) => {
  if (Number.isInteger(numero / 2)) {
    return console.log("Par");
  } else {
    return console.log("Impar");
  }
};

numParImpar(1);
numParImpar(2);
numParImpar(3);
numParImpar(1782);
numParImpar(17); */

//segunda forma de resolver
/* const numParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("no ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  return numero % 2 === 0
    ? console.info(`el numero ${numero} es par`)
    : console.info(`el numero ${numero} es impar`);
};

numParImpar();
numParImpar("23");
numParImpar(2);
numParImpar(-234); */

//14
//primera forma de resolver
/* const convertir = (temperatura, grados = "") => {
  if (grados === "c") return console.log(temperatura * 1.8 + 32);
  if (grados === "f") return console.log((temperatura - 32) / 1.8);
};

convertir(32, "c");
convertir(89.6, "f");  */

//segunda forma de resolver
/* const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("no ingresaste grados a convertir");

  if (typeof grados !== "number")
    return console.error(`el valor ${grados} ingresado NO es un numero`);

  if (unidad === undefined)
    return console.warn(`no ingresaste el tipo de grado a convertir`);

  if (typeof unidad !== "string")
    return console.error(
      `el valor "${unidad}" ingresado NO es una cadena de texto`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}ºC = ${Math.round(grados * (9 / 5) + 32)}ºF`);
  } else if (unidad === "F") {
    return console.info(`${grados}ºF = ${Math.round((grados - 32) / 1.8)}ºC`);
  } else {
    console.info("el tipo de grados a convertir NO es valido");
  }

  console.log("sexo pa");
};

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "F");
convertirGrados(2, "C");
convertirGrados(32, "F");
convertirGrados(100, "F"); */

/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una 
cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta 
el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

//15
//primera forma de resolver mo esta
/* const numBinario = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("no ingresaste numero a convertir");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  if (base === undefined)
    return console.warn(`no ingresaste el tipo de base a convertir`);

  if (typeof base !== "number")
    return console.error(`el valor ${base} ingresado NO es un numero`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
  }
};

numBinario();
numBinario("2");
numBinario(100);
numBinario(100, "2");
numBinario(100, 2);
numBinario(1110010, 2);
numBinario(4, 10);
numBinario(114, 10); */

//16
//primera forma de resolver
/* const descuento = (precio, descuento) => {
  const formula = (precio * descuento) / 100;
  return console.log(Math.floor(precio - formula));
};

descuento(1000, 20);
descuento(8432, 17); */

//segunda forma de resolver
/* const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("no ingresaste monto");

  if (typeof monto !== "number")
    return console.error(`el valor ${monto} ingresado NO es un numero`);

  if (monto === 0) return console.warn(`el monto no puede ser 0`);

  if (Math.sign(monto) === -1)
    return console.warn(`el monto no puede ser negativo`);

  if (typeof descuento !== "number")
    return console.error(`el valor ${descuento} ingresado NO es un numero`);

  if (Math.sign(descuento) === -1)
    return console.warn(`el descuento no puede ser negativo`);

  return console.info(
    `$${monto}-${descuento}% = $${monto - (monto * descuento) / 100}`
  );
};

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 20); */

//17
//primera forma de resolver (tiene error, pendiente revisar)
/* const contarAños = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("no ingresaste fecha");

  if (!(fecha instanceof Date))
    return console.error(`el valor que ingresaste no es una fecha valida`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

contarAños();
contarAños({});
contarAños(false);
contarAños(new Date(1984, 4, 23)); */

//segunda forma de hacerlo (mejorar, para que tome la fecha de hoy y no colocarle una de referencia ejemplo: 2020)
/* const fecha = (año = undefined, mes = undefined, dia = undefined) => {
  if (año === undefined) return console.log(`No ingreso un año`);
  if (mes === undefined) return console.log(`No ingreso un mes`);
  if (dia === undefined) return console.log(`No ingreso un dia`);
  if (typeof año !== "number")
    return console.log(`No puede ingresar texto en año`);
  if (typeof mes !== "number")
    return console.log(`No puede ingresar texto en mes`);
  if (typeof dia !== "number")
    return console.log(`No puede ingresar texto en dia`);
  if (año < 0) return console.log("Los años deben ser positivos");
  if (mes < 1 || mes > 12) return console.log("Solo hay 12 meses");
  if (dia < 1 || dia > 31)
    return console.log("No hay dias negativos y como maximo son 31 dias");

  //tomaremos una fecha de referencia 2020/08/28
  let resultAños = 0;
  if (mes <= 8) {
    resultAños = 2020 - año;
  } else if (dia <= 28) {
    resultAños = 2020 - año - 1;
  }
  console.log(`A pasado ${resultAños} años desde ${año}/${mes}/${dia} `);
};
fecha(1984, 8, 28); */
