//Apartado 1. Partimos de un html con un div vacio.
// Con JS, añadir dos elmentos  p con un texto dentro.

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


// Aparatado 4. Escribe una funcion que devuelva la longitud de un string
// recibido por argumento.

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
