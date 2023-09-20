/* FETCH API */

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarApi = () => {
  fetch(url)
    .then((response) => response.json())
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("Todo listo"));
};

consultarApi();
