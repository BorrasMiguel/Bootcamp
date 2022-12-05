const URL = "https://jsonplaceholder.typicode.com/users";

const printNames = array => array.forEach(user => console.log(user.name));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));


// fetch(URL).then(r => json()).then(data => console.log(data));   //Forma mas corta de hacer todo esto.

fetch(URL)
    .then(response => {   //Compruebo que la respueta es correcta
        console.log(response);
        if (!response.ok) {     //Por si existe algún error.
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
        
    })
    .then(data => {       // Proceso los objetos
        printNames(data);
        printCities(data);
        printLats(data);
    })
    .catch(error => console.log(error));   //Proceso posibles errores de la peticion


    // Async / await - Alternativa a then.     //Bloquea el código dentro de la funcion


async function requestURL(URL) {
    console.log(1.1);
    const response = await fetch(URL);    
    const data = await response.json(); 
    // console.log(data);
    console.log(1.2);
}
console.log(1);
requestURL(URL);
console.log(2);


// Peticion con método http post en lugar de GET.
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publicacion"
}

const http  = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};


fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))






