// Constructor. Books
function Books(id, title, author, sales, price) {
    this.id = id,
    this.title = title,
    this.author = author,
    this.sales = sales,
    this.price = price
}

// Array
let library = [
    new Books(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Books(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Books(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Books(4, "Sapiens: A Brif History of Humankind", "Yuval Noah", 910120, 16),
    new Books(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Books(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Books(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Books(8, "Sapiens: A Brif History of Humankind", "Yuval Noah", 910120, 16),
];

let filterBook = library;

// Selectores

const tBody = document.getElementById("tBody");
const inputTitle = document.getElementById("inputTitle");
const inputAuthor = document.getElementById("inputAuthor");
const inputSales = document.getElementById("inputSales");
const inputPrice = document.getElementById("inputPrice");
const submitButton = document.getElementById("submitButton")
const searchInput = document.getElementById("searchInput");





//Function


function updateTable() {
    tBody.innerHTML = "";

    filterBook.forEach(book => {
        tBody.innerHTML +=
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td><button class="btn btn-danger" id="${book.id}">Eliminar</button></td>
        </tr>`
    })

}


tBody.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {  //Los tags de los elementos se tienen que escribir en MAyuscula!!!!
        library = library.filter(book => book.id != e.target.id);  //Sobreescribimos el array con la funcion filter. Basicamente nos devuelve todos los objetos que no tienen ese id, menos el que lo tiene
        updateTable();
    }
})

updateTable();


submitButton.addEventListener("click", e => {
    e.preventDefault();
    const newId = library[library.length-1].id + 1;

    library.push(new Books(
        newId,
        inputTitle.value,
        inputAuthor.value,
        inputSales.value,
        inputPrice.value
    ));

    updateTable();

    inputTitle.value = "";
    inputPrice.value = "";
    inputSales.value = "";
    inputAuthor.value = "";

})

searchInput.addEventListener("input", e => {
    filterBook = library.filter(book => {
        return book.title.toUpperCase().includes(e.target.value.toUpperCase());
    })
    
    updateTable();

    
    
})