class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title,
        this.author = author,
        this.sales = sales,
        this.price = price;
    }
}

// Data

const books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La Nueva Mente Del Emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16),
    new Book(5, "Eloquent Javascript, Second Edition", "Marijn Haverbeke", 12321, 25),
    new Book(6, "Learning Javascript Desing Pattern", "Addy Osmani", 12319, 17),
    new Book(7, "Programming Javascript Applications", "Eric Elliots", 12319, 10),
    new Book(8, "Understanding ECMAScript 6", "Nicolas C. Zakas", 12319, 7),
    new Book(9, "You dont Know JS", "Kyle Simpson", 12310, 9),
    new Book(10, "Git Pocket Guide", "Richard E. Silvermann", 12319, 29),
    new Book(11, "Designing Evolvable Web APIs with ASP.NET", "Glenn Block, et al", 12319, 19),
]

let displayedBooks = books;  // Este array lo creamos para no tener que modificar el anterior.


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
    displayedBooks.forEach(book => {
        booksBody.innerHTML +=          //Con el += no sobreescribe, va creando una detras de otra
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
        </tr>`; 
    });
}


updateTable();


// Ejercicio 5


const filterInput = document.querySelector("#filterInput"); // Filtrado de libros.
const priceHeader = document.querySelector("#priceHeader");
const spanArrow = document.querySelector("span");

let ascendingOrder = true;

filterInput.addEventListener("input", e => {
    // Version 1. Teniendo en cuenta las mayusculas (case sensitive);
    displayedBooks = books.filter(book => book.title.includes(e.target.value)); // Utilizamos el array original para obtener informacion, pero no lo modificamos
    // Para tener en cuenta otro campo que filtrar en la tabla, incluimos la siguiente condicion:
    // || book.author.includes(e.target.value)

    // Version 2. Sin tener en cuenta las mayusculas
    displayedBooks = books.filter(book => {
        return book.title.toUpperCase().includes(e.target.value.toUpperCase());
    });

    updateTable();

})


//Apartado 2

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    spanArrow.innerHTML = ascendingOrder ? "&darr;"  : "&uarr;"
   
    displayedBooks.sort((book1, book2) => {
        if (ascendingOrder) {
            return book1.price - book2.price
        } else {
            return book2.price - book1.price
        }
        
    });

    updateTable();
})