//en CSS y para llamar en html a js
// h1 { color: red } para llamar una etiqueta
// .parrafito { ... } para llamar una clase
// #pid { ... } para llamar un id

//********* leyendo HTML desde JS ***********
// Cómo seleccionar desde JavaScript a un elemento HTML

// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafito = document.getElementsByClassName(".parrafito");
// const pid = document.getElementById("pid");
// const input = document.querySelector("input");

// console.log(input.value);

// console.log({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// });

//******* modificar HTML desde JS ***********

// h1.innerHTML = "Pato <br> feo"; //convierte todo a codigo html
// h1.innerText = "Pato <br> feo"; //convierte todo a texto
// console.log(h1.getAttribute("class")); //obtiene/busca los atributos del html
// h1.setAttribute("class", "rojo"); //modifica los atributos de los elementos en html
// h1.classList.add("rojo"); //le agrega un atributo extra a alguna clase
// h1.classList.remove("verde"); //elimina un atributo a alguna clase
// h1.classList.toggle("verde"); //permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML
// h1.classList.contains("verde"); //devuelve un booleano si cumple con lo buscado

/* input.value = 456;

const img = document.createElement("img"); //crea un elemento HTML especificado
img.setAttribute(
  "src",
  "https://preview.redd.it/7imgak5s3gj51.jpg?auto=webp&s=30eebde54735f023efcd17b2ffd5c963b25ca079"
);
console.log(img);

pid.innerHTML = "";
pid.appendChild(img); */ //agrega un nuevo elemento hijo al padre (le agrego "<img src=>" al <p> con id pid)

//******* Eventos en JavaScript: interactuando con usuarios y addEventListener ***********
/* un evento es una notificación de que alguna característica interesante acaba de ocurrir,
generalmente relacionada con el usuario que navega por la página */

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

// form.addEventListener("submit", sumarInputValues); //.addEventListener Registra un evento a un objeto en específico.

// function sumarInputValues(event) {
// event.preventDefault();
/* Cancela el evento si este es cancelable,
  sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
  en este caso form convierte el ultimo boton por defecto en un tipo submit, por ende
  cancela ese funcionamiento */
// const sumaInputs = input1.value + input2.value;
// pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener("click", sumarInputValues);

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

console.log("sexo");
