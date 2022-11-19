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

// Apapartado 6 Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
// nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
// Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

const input6 = document.getElementById("input6");
input6.nextElementSibling.addEventListener("click", () => {   //Otra forma de acceder al boton que se encuentra debajo del input en el html.
    if (input6.value % 2 === 0) {
        input6.style.border = "2px solid green";
    } else {
        input6.style.border = "2px solid red";
    }
})

// Aparatado 7 Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”)
//usando un bucle for.

const ul7 = document.getElementById("ul7");

for (let i = 0; i <= 10; i++) {
    const li7 = document.createElement("li");
    li7.textContent = `Elemento ${i}`;
    ul7.appendChild(li7);
}

// Apartado 8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
// botón y luego el enlace, se me abre en una nueva pestaña.  Añadir target = _blank

const link8 = document.getElementById("link8");
const button8 = document.getElementById("button8");

button8.addEventListener("click", () => link8.target = "_blank");  //Accedemos directamente a la propiedad, tambien se podria realizar con setAtributte

// Apartado 9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
//seleccionar un color del select, cambiar el color del párrafo.

const p9 = document.getElementById("p9");
const selectChange = document.querySelector("#select9");

selectChange.addEventListener("change", () => p9.style.color = selectChange.value);

// Aparatado 10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualizada el número
// de elementos que se han generado, los que son pares y los que son impares.

const randomButton = document.getElementById("button10");
const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

randomButton.onclick = () => {
    const randomNumber = Math.floor(Math.random()*100);
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++;

    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;

};

//  Aparatado 11. Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
// el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al
// principio.

const numberList = document.getElementById("numberList");
const inputNumber = document.getElementById("inputNumbers11");
const inputButton = document.getElementById("inputButton11");

let arrayNumbers11 = [];

function fillList() {
    let num = inputNumber.value;
    if (arrayNumbers11.includes(num) || num === "") {
        alert("error");
    } else {
        let newLi11 = document.createElement("li");
        newLi11.textContent = num;
        arrayNumbers11.push(num);
        numberList.appendChild(newLi11);
        inputNumber.value = "";
    }  
}

inputButton.addEventListener("click", fillList);


// Aparatado 12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer click en el botón haremos
// “toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.

document.querySelector("#btn12").onclick = (e) => e.target.classList.toggle("btn");

// Aparatado 13. Extra
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

const buttons = document.getElementsByClassName("btn-red"); //Devuelve un HTML Collection

// buttons[0].addEventListener("click", () => {
//     buttons[0].style.backgroundColor = "red";
// })

// buttons[1].addEventListener("click", () => {
//     buttons[1].style.backgroundColor = "red";
// })

// buttons[2].addEventListener("click", () => {
//     buttons[2].style.backgroundColor = "red";
// })

//Solucción 1
// Array.from(buttons).forEach(button => {
//     button.onclick = e => {
//         e.target.style.backgroundColor = "red";
//     }
// })


//Solución 2

const buttons12 = document.querySelectorAll(".btn-red"); //Devuelve un nodeList que tiene disponible la función forEach

buttons12.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "red";
    })
})





