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

let element = document.querySelector("div#grandparent>.parent>div.child#child4"); //Este es el mas comodo, se puede poner grandparent child
console.log(element);

//Modificar elementos
parent1.style.backgroundColor = "#333";











// Array.from(family).forEach(item => console.log(item));
// for (let familyMember of family) {
//     console.log(family);
// }