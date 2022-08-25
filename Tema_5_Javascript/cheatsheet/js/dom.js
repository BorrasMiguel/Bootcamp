//--------------------------------------------------DOM (Document Object Model)------------------------------------------------
//Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title += " (DOM)";
console.log(document.title);

console.clear();
//Selectors
const family = document.getElementsByTagName("div");
console.log(family);


const grandParent = document.getElementById("grandparent");
console.log(grandParent);


const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
console.log(parent1);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelector(".grandparent div"); //Este es el mas comodo, se puede poner grandparent child
console.log(element);

//Modificar elementos
const changeBackground = (element, color) => element.style.backgroundColor = color;

changeBackground(children[1], "#123");
changeBackground(parent1, "red");
changeBackground(parent2.children[1], "Blue");
changeBackground(children[0].parentNode.parentNode, "#ddd");

// changeBackground(parent1.children[1].previousElementSibling, "black"); Un doble salto no se debe usar, es un tutorial para que vea como se realiza


parent2.style.backgroundColor = "#333";

children[0].parentNode.style.backgtroundColor = "#333";

// Array.from(family).forEach(item => console.log(item));
// for (let familyMember of family) {
//     console.log(family);
// }


changeBackground(parent1.children[1].previousElementSibling, "grey")

//Nunca utilizaremos accesos tan complejos como este.
changeBackground(grandParent.children[1].previousElementSibling.lastElementChild, "green")


//Properties
// grandParent.innerHTML = "<h1>Hola Futuro</h1>"; //Modifica internamente el documento HTML desde javascript
// children[0].innerHTML = "Child 1 v2";
console.log(children[0].innerHTML);
console.log(children[0].textContent);  //Ignora las etiquetas HTML

console.clear();
console.log("ClassList: ", parent1.classList);
parent1.classList.remove("bg-dark");
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);

// parent1.classList.toggle(); //Esta funcion hace lo mismo que las dos anteriores, sino tiene la clase la añade; y si tiene la clase la elimina.

parent1.setAttribute("name", "nombre-del-parent-1")

console.clear();
// Create / Remove elements
let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv); //MISMO nodo con dos nombres diferentes, no puede haber el mismo nodo en dos lugares diferentes

myDiv2 = myDiv.cloneNode(true); //Creamos un nuevo nodo a partir del original
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5";

myDiv.remove(); //Se lo carga directamente

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3);

parent2.after(myDiv.cloneNode()); //Si se deja vacio el cloneNode hace una copia sin el texto, si se pone true hace una copia profunda


//Crear una funcion que me devuelva un nodo nuevo y que reciba etiqueta ID.

function createNode(label, id) {
    let newNode = document.createElement(label);
    newNode.id = id;

    return newNode;
}

let newDiv = createNode("div", "identificador1");
let link = createNode("a", "mainLink");

link.textContent = "Texto del enlace";
link.setAttribute("href", "https://gppgle.com");

parent2.appendChild(newDiv);
parent2.appendChild(link);


//Events
const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    // document.body.style.backgroundColor = "green";
    // console.log(event.target.tagName);

    if (event.ctrlKey) {
        document.body.classList.toggle("bg-red");
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}, Shift: ${event.shiftKey}, Ctrl: ${event.ctrlKey}`);
    
});

const emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener (e) {
    console.log("Tipo de evento: ", e.type);
    if (e.type === "focus") {
        e.target.style.boderColor = "green";
    } else if (e.type === "blur") {
        e.target.style.borderColor = "black";
    }
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; //Propiedad value importatnte
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", inputListener);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords (e) {
    document.querySelectorAll("h1")[3].textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);