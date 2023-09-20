/* OPTIONAL CHAINING O ENCADENAMIENTO  OPCIONAL */
/**
 * Nos permite acceder a las propiedasdes de un objeto sin tener que verifcar explicitamente si cada nivel de la cadena existe o es válido
 */

const alumno = {
  nombre: "Pilar",
  clase: "Programación 1",
  aprobado: true,
};

setTimeout(() => {
  alumno.examenes = {
    examen1: 100,
    examen2: 90,
    examen3: 100,
  };
  console.log(alumno.examenes?.examen1);
}, 3000);

// con el símbolo de interrogación la ejecución continúa sin error aunque la propiedad no exista
console.log(alumno.examenes?.examen1);

console.log("Hola Mundo");
