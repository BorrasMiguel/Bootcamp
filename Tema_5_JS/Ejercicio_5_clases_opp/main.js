class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

class Table {
    constructor(element, dataArray) {
        this.element = element;
        this.dataArray = dataArray;
        //Hacemos una copia del array, para poder modificarlo sin afectar al original.
        this.displayedArray = dataArray;
        this.ascendingOrder = false;
        this.update();
    }

    createRow(object) {
        const cells = Object.values(object);

        const newRow = document.createElement("tr");
        for (const cell of cells) {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        }

        this.element.appendChild(newRow);
    }
    
    update () {
        this.element.innerHTML = "";

        this.displayedArray.forEach(book => this.creative(book));

        const totalPrice = this.displayedArray.reduce((p, c) => p + c.price, 0); //Previous (p), current(c)

        this.element.nextElementSibling.textContent = `Precio total: ${totalPrice}`;
    }
    
    filter (searchText) {
        //Opcion 1. si queremos que sea case sensitive, es decir, que sea una coincidencia exacta.
        // teniendo en cuenta mayusculas y minusculas, la siguienta linea es suficiente.
        this.displayedArray = this.dataArray.filter(item => item.title.includes(searchText));

        // Opción 2. Si queremos que sea case insentive,
        // deberemos comparar todo en mayusculas y minusculas:
        this.displayedArray = this.dataArray.filter(item => {
            return item.title.toUpperCase.includes(searchText.toUpperCase()); //includes devuelve boolean
        })

        // En cualquier caso, tras actualizar this.displayedArray,actualizamos la tabla.
        this.update();
    }

    sortByPrice () {
        this.displayedArray.sort((a, b) => {
            return this.ascendingOrder ? a.price - b.price : b.price - a.price;
        });
        this.update();
    }

}


const books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book("The God Delusion", "Richard Dawkins", 610120, 15),
    new Book("La Nueva Mente Del Emperador", "Roger Penrose", 120000, 17),
    new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16),
    new Book("Eloquent Javascript, Second Edition", "Marijn Haverbeke", 12321, 25),
    new Book("Learning Javascript Desing Pattern", "Addy Osmani", 12319, 17),
    new Book("Programming Javascript Applications", "Eric Elliots", 12319, 10),
    new Book("Understanding ECMAScript 6", "Nicolas C. Zakas", 12319, 7),
    new Book("You dont Know JS", "Kyle Simpson", 12310, 9),
    new Book("Git Pocket Guide", "Richard E. Silvermann", 12319, 29),
    new Book("Designing Evolvable Web APIs with ASP.NET", "Glenn Block, et al", 12319, 19),
]

const table = new Table(document.querySelector("tbody"), books);
document.querySelector("#searchInput").addEventListener("input", e => table.filter(e.target.value));
const priceHeader = document.querySelector("thead th:last-child");

priceHeader.getElementsByClassName.cursor = "pointer";
priceHeader.addEventListener("click", () => {
    table.ascendingOrder = !table.ascendingOrder;
    //Usamos los HTML Symbols para alternar una flecha hacia arriba / abajo.
    priceHeader.querySelector("span").innerHTML = table.ascendingOrder ? "&uarr;" : "&darr;"  // Caracter Html flecha
    table.sortByPrice();
})


