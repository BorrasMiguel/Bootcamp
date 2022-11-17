//Basic
console.log(document);
console.log(document.domain);

//Selectors

const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = parents[1];
const children = document.getElementsByClassName("child")

console.log(parent1, parent2);

let element = document.querySelector(".grandparent div");
console.log(element);

parent1.style.backgroundColor = "#333";


const changeColor = (element, color) => element.style.backgroundColor = color;

changeColor(parent2.children[1], "red");
changeColor(children[0].parentNode.parentNode, "#ddd");

changeColor(parent1.children[1].previousElementSibling, "red");

//----------------------------------Propiedades
console.log(children[0].innerHTML);
console.log(children[0].textContent); // Ignora las etiquetas html.

console.log("ClassList: ", parent1.classList);
parent1.classList.remove("bg-dark");
console.log("ClassList: ", parent1.classList);

parent1.classList.add("bg-red");
console.log("ClassList: ", parent1.classList);

parent1.classList.toggle("bg-dark"); //Si no esta la añade, y si esta la elimina.
console.log("ClassList: ", parent1.classList);

parent1.setAttribute("name", "nombre-padre")

console.clear();

//------------------------------------Create/Remove Elements

let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.textContent = "child 2.5"; 

parent1.appendChild(myDiv); // Los nodos que se creen no son iguales y no se pueden repetir.

let myDiv2 = myDiv; 
// parent2.appendChild(myDiv2); // Mismo nodo con nombres diferentes.

myDiv2 = myDiv.cloneNode(true);
parent2.appendChild(myDiv2); //Creamos un nuevo nodo a partir del original.
myDiv2.textContent = "Child 3";

myDiv.remove();

let myDiv3 = myDiv.cloneNode(); //Cuando se pone true es una copia profunda, si no lo ponemos es una copia simple.

parent2.before(myDiv3);

//Crear una funcion que me devuelva un nodo nuevo y que reciba etiqueta e ID.

function nuevoNodo(label, id) {
    let nuevoNodo = document.createElement(label);
    nuevoNodo.id = id;
    return nuevoNodo;
}

let newDiv = nuevoNodo("div", "identificador1");
let table = nuevoNodo("table", "identificador2");

parent2.appendChild(newDiv);
parent2.appendChild(table);

console.log(parent2);

let link = nuevoNodo("a", "mainLink");
link.textContent ="Texto del Enlace";
link.setAttribute("href", "https://google.com"); // Para crear un atributo que no existe.

grandParent.appendChild(link);
console.log(grandParent);



//--------------------------------------------Eventos
const buttonColor = document.getElementById("changeColor");

buttonColor.addEventListener("click", function (event) {   
    console.log(event);  // Target: Elemnto en el que se a  hecho click
    document.body.classList.toggle("bg-red");
})


const emailInput = document.querySelector("input");
emailInput.addEventListener("focus", inputListener); //Cuando estas dentro del formulario
emailInput.addEventListener("blur", inputListener); // Cuando te sales del formulario
// SIrven para validar los formularios

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", inputListener);

function inputListener (e) {
    console.log("Tipo de evento: ",e.type);
    if (e.type === "focus") {
        e.target.classList.add("bg-red");
    } else if (e.type === "blur") {
        e.target.classList.remove("bg-red");
    }
}

const container = document.getElementById("container");


const changeTitle = e => {
    document.getElementsByClassName("h2").textContent = emailInput.value; //Obtener el valor de un input.
}

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", changeTitle);


function coords (e) {  // Como es una funcion que vamos a utilizar en un evento, ponemos que reciba ese evento
    const h1 = document.querySelectorAll("h1")[1];
    h1.textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}
document.body.addEventListener("mousemove", coords);
