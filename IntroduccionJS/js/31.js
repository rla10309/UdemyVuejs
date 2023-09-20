/* ASYNC - AWAIT */

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarApi = async () => {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    for (let res of resultado) {
      console.log(res.email);
    }
  } catch (error) {
    console.log(error);
  }
};

consultarApi();
