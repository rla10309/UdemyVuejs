const tecnologias = ["Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Git"];
const numeros = [10, 20, 30];

// Includes
let resultado = tecnologias.includes("Git");
resultado = tecnologias.findIndex((tech) => tech === "Git");

// Some (si algún elemento cumple la condición)
resultado = numeros.some((numero) => numero > 25);

//Find (devuelve el primer elemento que cumpla la condición)
resultado = numeros.find((numero) => numero > 10);

// Every (todos los elementos tienen que cumplir la condición)
resultado = numeros.every((numero) => numero > 15);

// Reduce (devuelve un acumulado)
resultado = numeros.reduce((total, numero) => numero + total, 0);

// Filter (filtra resultados)
resultado = tecnologias.filter((tech) => tech !== "Vue.js");

console.log(resultado);
