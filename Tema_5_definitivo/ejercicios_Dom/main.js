// Apartado 1. Partimos de un HTML con un div vacío. Con JS, añadir dos elementos 
// p con un texto dentro.

const divEjercicio1 = document.getElementById("divEjercicio1");

const pEjercicio1 = document.createElement("p");
pEjercicio1.id = "p1";
pEjercicio1.textContent = "Hola Mundo";
divEjercicio1.appendChild(pEjercicio1);

let p2Ejercicio1 = pEjercicio1.cloneNode(true);
p2Ejercicio1.textContent = "Adios Mundo";
divEjercicio1.appendChild(p2Ejercicio1);

console.log(pEjercicio1);

// 2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

const button2 = document.querySelectorAll("button")[0];

function clickButton (e) {
    console.log(e.type);
    if (e.type === "click" && document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }
}

button2.addEventListener("click", clickButton)

// Ejercicio 3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. 
// Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

// Aparatado 4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const inputP = document.querySelector("input");
const buttonP = document.getElementById("inputButton");
const parrafoR = document.getElementById("parrafoRellenar")

buttonP.addEventListener("click", () => {
    parrafoR.textContent = inputP.value;
    inputP.value = ""; // Esto hace que el input vuelva a quedar vacio.
});

inputP.addEventListener("input", () => parrafoR.textContent = inputP.value);

// Aparatado 5. De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres

const textArea5 = document.getElementById("textArea5");

textArea5.addEventListener("input", e => {
    e.target.value.length > 15 ? e.target.style.color = "red" : e.target.style.color = "green";
})

