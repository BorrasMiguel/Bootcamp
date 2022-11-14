//Apartado 1. Partimos de un html con un div vacio.
// Con JS, añadir dos elmentos  p con un texto dentro.


//________________________________________________________________________________________________________
//________________________________________________________________________________________________________
//Nota importante e.target es el elemento o nodo sobre el que se esta ejecutando el evento.

const container = document.getElementsByTagName("div")[0];

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Parrafo del Ejercicio 1";
container.appendChild(parrafo1);


const parrafo2 = document.createElement("p2");
parrafo2.textContent = "2º Parrafo del ejercicio 1";
container.appendChild(parrafo2);


//Aparatado 2. Al pulsar un boton cambiar el fondo del body del HTML.
const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event) {
    document.body.style.backgroundColor = "green";
});

//Solucion alternativa 
//colorButton.addEventListener("click", () => document.body.style.backgroundColor = "green");


//Apartado 3. Partimos de un html con una lista de tres URL (texto) de imagenes
// y un elemento img. Al hacer click en cada URL, cambiará la imagen a la que 
// referencie dicha URL.

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");


const changeImage = (event) => image.src = event.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);


// Aparatado 4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const ap4Paragraph = document.getElementById("filliableParagraph");
const ap42Input = document.querySelector("input");
const ap4Button = document.getElementsByTagName("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Paragraph.textContent = ap42Input.value;
    ap42Input.value = "";
    console.log(ap42Input.value);
})


// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const ap42Paragraph = document.getElementById("filliableParagraph2");
const ap4Input = document.querySelectorAll("input")[1];

ap4Input.addEventListener("input", () => ap42Paragraph.textContent = ap4Input.value);

// Aparatado 5 De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres

const textarea = document.getElementById("textarea");


textarea.addEventListener("input", (e) => {
    // if (e.target.value.length > 15) {
    //     e.target.style.color = "green";
    // } else {
    //     e.target.style.color = "red";
    // }

    e.target.style.color = e.target.value.length > 15 ? "green" : "red";
});

// Apapartado 6 Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
// nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
// Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

const validate = document.querySelectorAll("input")[2];
const validateButton = document.querySelectorAll("button")[2];
//Tambien se puede usar validate.nextelementSibling para acceder al botton

validateButton.addEventListener("click", () => {
    if (validate.value % 2 !== 0) {
        validate.style.borderColor = "red";
    } else {
        validate.style.borderColor = "green";
    }
});

// Aparatado 7 Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”)
//usando un bucle for.

const listFill = document.getElementById("listToFill");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    listFill.appendChild(newLi);
}

// Apartado 8 Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
//botón y luego el enlace, se me abre en una nueva pestaña.

const link = document.getElementById("link8");
const buttonNewPage = document.getElementById("button8");

buttonNewPage.addEventListener("click", () => link.target = "_blank");

// Apartado 9 Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
//seleccionar un color del select, cambiar el color del párrafo.

const pColor = document.getElementById("p4Color");
const selectColor = document.getElementById("selectColor");

selectColor.addEventListener("change", (e) => {
    pColor.style.color = e.target.value;
})

// Aparatado 10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualizada el número
// de elementos que se han generado, los que son pares y los que son impares

const buttonAleatory = document.getElementById("btn10");

const currentRandom = document.getElementById("currentRandom");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");
const totalNumbers = document.getElementById("totalNumbers");

buttonAleatory.onclick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent = Number(totalNumbers.textContent) + 1; // se puede hacer totalNumber.textcontent++

    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;

};

//  Aparatado 11. Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
// el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al
// principio.

const listApt11 = document.getElementById("ulApt11");
const inputApt11 = document.getElementById("inputApt11");
const btnApt11 = document.getElementById("btnApt11");

const arrayApt11 = [];

function fillList () {

    listApt11.innerHTML = ""; // Vacia la lista y la rellena de nuevo elmento a elemento.
    for (let i = 0; i < arrayApt11.length; i++) {
        const newInputList = document.createElement("li");
        newInputList.textContent = arrayApt11[i];
        listApt11.appendChild(newInputList);
    }

};

function addToList() {
    // Parsea el input, comprueba si existe y lo añade.
    let inputNumber = Number(inputApt11.value);
    if (arrayApt11.indexOf(inputNumber) === -1) {
        arrayApt11.push(inputNumber);
        fillList();
    } else {
        window.alert("El numero ya esta en la lista");
    }
}

btnApt11.addEventListener("click", addToList);


// Aparatado 12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer click en el botón haremos
// “toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.
document.getElementById("toggler").onclick = (e) => e.target.classList.toggle("btn");


// Aparatado 12. Extra
// El código siguiente, añade un eventListener a cada botón para que cuando se haga click en cada uno de
// ellos, le cambie el backgroundColor.
// Refactorizar el código para hacerlo con
// un único forEach.
// Nota:
// 1. Para transformar un HTMLCollection a
// un array, podemos hacer:
// Array.from(HTMLCollection);
// 2. Para acceder al elemento que
// “disparó” el evento, podemos
// usar evento.target.

//const buttons = document.getElementsByClassName("btnApt12"); // Devuelve HTML Collections

// buttons[0].addEventListener("click", () => {
//     buttons[0].style.backgroundColor = "red";
// });

// buttons[1].addEventListener("click", () => {
//     buttons[1].style.backgroundColor = "red";
// });

// buttons[2].addEventListener("click", () => {
//     buttons[2].style.backgroundColor = "red";
// });

// Solucion 1

// Array.from(buttons).forEach(button => button.onclick = e => e.target.style.backgroundColor = "red");

// Array.from(buttons).forEach(button => {

//     buttons.addEventListener("click", function (e) {
//         e.target.style.backgroundColor = "red";
//     });

// });
// Solucion 2

const buttons = document.querySelectorAll(".btnApt12");  //Devuelve un NodeList que tiene disponible forEach. No hace falta transformalo a un ARRAY.

buttons.forEach(button => {

    button.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "red";
    });

});

