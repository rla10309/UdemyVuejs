/* MANIPULACIÓN DEL DOM */

const heading = document.querySelector(".heading");

// heading.textContent = "Un nuevo heading";
// heading.classList.remove("text-4xl");

const inputNombre = document.querySelector("#nombre");
console.log(inputNombre);
inputNombre.value = "Valor por default";

const enlaces = document.querySelectorAll(".navegacion a");
// enlaces[0].textContent = "nuevo texto para enlaces";
enlaces.forEach((enlace) => (enlace.textContent = "Nuevo enlace"));
