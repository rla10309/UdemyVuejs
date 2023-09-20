/* SCOPE (contexto en el que se definen y acceden las variables) */

let precio = 300;

function unaFuncion() {
  precio = 100;
  console.log(precio);
}

unaFuncion(); // 100
console.log(precio); // 100
