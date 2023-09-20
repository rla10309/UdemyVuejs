/* EVENTOS */

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("click", () => {
  heading.textContent = "Nuevo texto heading al dar click";
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    enlace.textContent = "diste click";
  });
});
