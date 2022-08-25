// Apartado 1 - Partimos de un HTML con un div vacío.
// Con JS, añadir dos elementos p con un texto dentro.
const contenedor = document.getElementById("mainContainer");
const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");

paragraph1.textContent = "Párrafo 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi?";
paragraph2.textContent = "Párrafo 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi?";

// contenedor.appendChild(paragraph1);
// contenedor.appendChild(paragraph2);
// Si queremos anexar múltiples elementos, utilizamos 'append'
contenedor.append(paragraph1, paragraph2);

// Apartado 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.
const button = document.querySelector("button");
button.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    // document.querySelector("body").style.backgroundColor = "red"; // Alternativa manual
});

// Solución alternativa con arrow function
button.addEventListener("click", () => document.body.style.backgroundColor = "red");

// Apartado 3 - Partimos de un HTML con una lista de 3 URLs (texto) de imágenes
// y un element img. Al hacer click en cada URL, cambiará la imagen a la
// que referencie dicha URL.

// Versión 1
// const listItems = document.getElementsByTagName("li");
// const image = document.querySelector("img");

// const changeImage = e => image.src = e.target.textContent;

// listItems[0].addEventListener("click", changeImage);
// listItems[1].addEventListener("click", changeImage);
// listItems[2].addEventListener("click", changeImage);

// v2
const list = document.querySelector("ul");
const image = document.querySelector("img");

const changeImage = e => image.src = e.target.textContent;

list.addEventListener("click", changeImage);

// Apartado 4
const ap4Paragraph = document.getElementById("fillableParagraph");
const ap4Input = document.querySelector("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Paragraph.textContent = ap4Input.value;
    ap4Input.value = "";
});

// 4.2
const ap42Paragraph = document.getElementById("fillableParagraph2");
const ap42Input = document.querySelectorAll("input")[1];

ap42Input.addEventListener("input", () => ap42Paragraph.textContent = ap42Input.value);

// Apartado 5
const textarea = document.querySelector("#textareaToValidate");
textarea.addEventListener("input", e => {
    // if (e.target.value.length > 15) {
    //     e.target.style.color = "red";
    // } else {
    //     e.target.style.color = "green";
    // }

    e.target.style.color = e.target.value.length > 15 ? "red" : "green";
});

// Apartado 6
const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () => {
    if (evenInput.value % 2 !== 0) {
        evenInput.style.border = "2px solid red";
    } else {
        evenInput.style.border = "";
    }
});

// Apartado 7
const ul = document.getElementById("listToFill");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    ul.appendChild(newLi);
}

// Apartado 8
const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");
newTabButton.addEventListener("click", () => link.target = "_blank");

// Apartado 9
const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
});