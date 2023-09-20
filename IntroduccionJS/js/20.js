/* OPERADORES TERNARIOS  - (condición) ? si se cumple : si no se cumple */
const disponible = 100;
const total = 500;
const tarjeta = false;

disponible > total || tarjeta
  ? console.log("Si puedes pagar con saldo o tarjeta")
  : console.log("No puedes pagar");
