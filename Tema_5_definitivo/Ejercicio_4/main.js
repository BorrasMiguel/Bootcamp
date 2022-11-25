function Books(id, titulo, autor, ventas, precio) {
    this.id = id,
    this.titulo = titulo,
    this.autor = autor,
    this.ventas = ventas,
    this.precio = precio
}

// Data

let arrayBooks = [
    new Books(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Books(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Books(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Books(4, "Sapiens: A Brif History of Humankind", "Yuval Noah", 910120, 16),
    new Books(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Books(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Books(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Books(8, "Sapiens: A Brif History of Humankind", "Yuval Noah", 910120, 16),
];


// Selectores

const inputTitle = document.getElementById("inputTitle");
const inputAuthor = document.getElementById("inputAuthor");
const inputVentas = document.getElementById("inputVentas");
const inputPrecio = document.getElementById("inputPrecio");
const saveButton = document.getElementById("saveButton");

const booksBody = document.getElementById("tableBody");


// Function Update table
function updateTable() {
    //Vaciamos el tbody por completo
    booksBody.innerHTML = "";

    //Generamos de nuevo todas las filas
    arrayBooks.forEach(book => {
        booksBody.innerHTML +=          //Con el += no sobreescribe, va creando una detras de otra
        `<tr>
            <td>${book.id}</td>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.ventas}</td>
            <td>${book.precio}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`; 
    });
}

booksBody.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {  //Los tags de los elementos se tienen que escribir en MAyuscula!!!!
        arrayBooks = arrayBooks.filter(book => book.id != e.target.id);  //Sobreescribimos el array con la funcion filter. Basicamente nos devuelve todos los objetos que no tienen ese id, menos el que lo tiene
        updateTable();
    }
})

updateTable();





// ---------------------------------------------------Otra forma de realizarlo menos hardcodeada

// function updateTable() {
//     //Vaciamos el body html.
//     booksBody.innerHTML = "";

//     // Generamos de nuevo todas las filas.
//     arrayBooks.forEach(book => {
//         const newTr = document.createElement("tr");
//         for (let property in book) {
//             const newTd = document.createElement("td");
//             newTd.textContent = book[property];
//             newTr.appendChild(newTd);
//         }

//         const removeButton = document.createElement("button");
//         removeButton.classList.add("btn", "btn-danger");  //Importante esta clase, la forma en la que se escribe.
//         removeButton.id = book.id;
//         removeButton.textContent = "Remove";
//         removeButton.addEventListener("click", e => {
//             arrayBooks = arrayBooks.filter(book => book.id != e.target.id)
//             updateTable();
//         });
//         newTr.appendChild(removeButton);

//         booksBody.appendChild(newTr);
//     });
// }

// updateTable();

saveButton.addEventListener("click", e => {
    //e.preventDefault(); //Quita el comportamiento por defecto del HTML. Se utiliza sobre todo en los formularios, 

    const newID = arrayBooks[arrayBooks.length-1].id + 1;

    arrayBooks.push(new Books(
        newID,
        inputTitle.value,
        inputAuthor.value,
        inputVentas.value,
        inputPrecio.value)
    );

    updateTable();

    inputTitle.value = "";
    inputAuthor.value = "";
    inputVentas.value = "";
    inputPrecio.value = "";
});
