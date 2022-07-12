//--------------------------Uso de JS externo-------------------------------------
    // function saludo () {
    //     alert(`Hola desde un script externo`);
    //     console.log(`has hecho un click`);
    // }
    // document.getElementsByTagName("a").item(2).addEventListenner("click", saludo);


//--------------------------Depuración / Login-------------------------------------
    // alert ("Mensaje");
    console.log("Mensaje");

//--------------------------Variables-------------------------------------

// var -> function scope
// let / const -> block scope


// function saludar() {
//     console.log("Inicial: ", contador);
//     for (let contador = 0; contador < 10; contador++ ) {
//         console.log(contador);
//     }
//     console.log("Final: ", contador);
// }

// saludar();

console.clear();

//Inicialización
let day;
day = 5;

let monthName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //Avanzada
console.log(var1, var2, var3);

console.clear();


//--------------------------Tipos de Datos-------------------------------------

let str = String("I`m a string");
let str2 = "I`m another string"; //Recomendada
console.log(typeof str, typeof str2, typeof "");


let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");


let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");


let undef;
console.log(undef, typeof undef);


let selectedColor = null; //Limpiar una variable.
console.log(selectedColor, typeof selectedColor);


console.clear();

//Objetcs
array = Array(1, 2, 3);
let array2 =  [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.clear();


//--------------------------Strings-------------------------------------
str = null;
str = "Hola Mundo";
console.log(str, str.length);
console.log(str.indexOf("Mundo"));
console.log(str.lastIndexOf("u"));
console.log("La última ocurrencia de `u` esta en el índice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola Mundo".concat(". Adios Mundo"));
str = str + ". Adios Mundo";
str += ", Adios Mundo";
console.log(str);

console.log(str.replace("Mundo", "Futuro"));
console.log(str.replaceAll("Mundo", "Futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es ${day}`);
