//--------------------------------------------------DOM (Document Object Model)------------------------------------------------
//Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title += " (DOM)";
console.log(document.title);

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