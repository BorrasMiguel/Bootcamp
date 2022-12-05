// Hacer una peticion a la API de https://jsonplaceholder.typicode.com/comments
// Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los primeros 20 elementos.
const div = document.querySelector("div");



const urlComments = "https://jsonplaceholder.typicode.com/comments";

const printComments = array => array.slice(0, 20).forEach(comment => {
    let newH1 = document.createElement("h1");
    newH1.textContent = comment.id;
    div.append(newH1);
    div.innerHTML += `<li>${comment.name}</li>`;
})

fetch(urlComments)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: ", + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        printComments(data)
    })


// Paginar un array.

