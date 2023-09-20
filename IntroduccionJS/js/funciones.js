/* Exportar módulos */

// export function sumar(num1, num2) {
//   return num1 + num2;
// }

// export function restar(num1, num2) {
//   return num1 - num2;
// }

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

const hola = "Hola mundo";

export default hola;

export { sumar, restar };
