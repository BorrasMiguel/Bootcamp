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
// let boolean === boolean={}
console.log(str.replace("Mundo", "Futuro"));
console.log(str.replaceAll("Mundo", "Futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(`El día de mi cumpleaños es ${day}`);


//Parsing
let number = Number("1000"); //NaH not a number. No genera error.
console.log(number, typeof number);

number += "1000"; //Entiende que es una concatenacion, no una suma.
console.log(number, typeof number);

console.log("1" +1, "1" -1);


//-------------------------------------------OBJECTS-----------------------------------------------

let person = {
    name: "John",
    age: 30,
    blonde: false,
    walk: function() {
        console.log("Hey, estoy andando");
    }, //Pre-ES6
    jump() {
        console.log("Hey, estoy saltando");
    }, //ES6
    presentarse() {
        console.log(`Me llamo ${this.name} y tengo ${this.age} años y ${this.blonde ? `soy rubio` : `soy moreno`}`);
    }
}


//Acceso por punto
console.log(person);
console.log(person.name);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

//Acceso por corchetes
let  propertyName = "age";
console.log(person[propertyName]);

//Ampliacion
person.children = ["Marta", "Peter"];
console.log(person);
console.log(person.children[1]);

person.jump();
person.walk();

//This  Sirve para referirse al objeto en el que nos encontramos.

const person2 = {
    name: "Tomas",
    talk() {
        console.log(this);
    }
}

const person3 = {
    name: "Sara",
    talk() {
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();
person3.talk();


//----------------------------------------------------Object Contructor using function

function Car(brand, color, weight, topSpeed) {  // Para crear un constructor
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `This ${this.color} ${this.brand} weigth ${this.weight}` +
        `kilos and can reach up to ${this.topSpeed} kms/h.`;
    }
}

const car1 = new Car("Mercedes", "red", undefined, 200);
const car2 = new Car("Volvo", "grey", 2500, 180);
const car3 = new Car("BMW", "blue", 1500, 175);

console.log(car1, car2, car3);

console.log(car2.color);

console.log(car3.getDescription);




//------------------------------------------Arrays---------------------------

let selectedColors = ["red", "blue"];  //Array de Strings
console.log(selectedColors, selectedColors.length);

selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet"); //Sirve para que el array agregue elementos al ultimo disponible
console.log(selectedColors, selectedColors.length);

selectedColors.pop(); //Sirve para quitar elementos desde el principio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); //Sirve para añadir nuevos elementos al principio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.shift(); //Sirve para quitar nuevos elementos al principio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); //Ordena los arrays segun alfabeto, edad... lo que queramos.
console.log(selectedColors, selectedColors.length); 

console.log(selectedColors, selectedColors.indexOf("red"));

console.log(selectedColors.slice(1, 3)); //Selecciona los arrays.
console.log(selectedColors);

console.log("Los elementos borrados son: ", selectedColors.splice(1, 3)); //Borra los que queramos
console.log("El array se quedaría así: ", selectedColors);

console.log("Los elementos borrados son: ", selectedColors.splice(1, 3)); //Borra todo desde donde empieza hasta el numero que le indique de elementos que quieres que borres
console.log("El array se queda así: ", selectedColors);

/*Crear un objeto niño que tenga las propiedades nombre, altura, genero,
y amigoS. AmigoS estara inicialmente vacio y añadiremos 
posteriormente tres elementos con los nombres. 
Después, añadiremos uno extra al inicio*/

/*Crear funcion que haga perder el ultimo elemento del array*/



let  niño = {
    nombre: "Juan",
    altura: 1.74,
    genero: "masculino",
    amigos: [], 
    perderamigo() {
        this.amigos.pop();
    }
}
niño.amigos = ["Ana", "Sara", "Lola"];

niño.amigos.unshift("Marta");

niño.amigos.push("Alejandra");

console.log(niño);

niño.perderamigo();
console.log(niño);


//------------------------------------------Condicionales---------------------------

const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== guessedNumber) {
    console.log("Hey, tienes que introducir el mismo tipo");
}


// if (randomNumber === guessedNumber) {
//     console.log("Has acertado el número");
// } else if (randomNumber > guessedNumber) {
//     console.log("El número secreto es mayor");
// } else {
//     console.log("El número secreto es menor");
// }


//Ternary Operator
let variable = 12 < 10 ? "el primero es menor" : "el primero es mayor";
console.log(variable);

person.presentarse();


//Switch
let option = 3;
switch (option) {
    case 1: 
        //Bloque de código para valor 1
        console.log("Option vale 1");
        break;
    case 2:
        //Bloque de código para valor 1
        console.log("Option vale 2");
        break;
    case 3:
        //Bloque de código para valor 1
        console.log("Option vale 3");
        break;
    default : //De otro modo en Pseint
        console.log("Otra opción");
        break;
}

console.clear();

//----------------------------------------------Function-------------------------
//Nombradas
function greet(name, lastName) {
    return(`Hola ${name} ${lastName}. ¿Que tal?`);
}
console.log(greet ("Marcos", "Aurelio"));
// greet("Marcos", "Aurelio");

//Que te devuelva el cyecto de ejemplos interactivos, clone https://github.com/mdn/interactive-exampluadrado de un numero.
function square(number) {
    return number * number;
}
console.log(square(5));

// Anonimas
let numbersArray = [5, 1, 7, 51, 23];
console.log(numbersArray);
numbersArray.sort(); // Me lo ordena segun ASCII, no ordena numericamente
console.log(numbersArray);

/*El método sort() ordena los elementos de un arreglo (array) 
localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. 
El modo de ordenación por defecto responde a la posición del valor del string de acuerdo 
a su valor Unicode.*/


function orderNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

// Hay que agregarle una funcion para dotarlo de lógica. Se puede simplificar la funcion anterior.


// NumberArray.sort(orderNumners)

numbersArray.sort(function(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
})

numbersArray.sort(function (a, b) {return a - b});

console.log(typeof orderNumbers, typeof function (a, b) {return a -b});
console.log(function (a, b) {return a - b});
console.log(numbersArray);

console.clear();
//Arrow  Functions
let perimeterOfSquare = function (side) {
    return side * 4;
}
perimeterOfSquare = function (side) {return side * 4};  //(Opcional una unica linea)
perimeterOfSquare = (side) => {return side * 4}; //Sustituyo funcion por la flecha
perimeterOfSquare = (side) => side * 4; // Si solo quiero devolver algo,quito las llaves y return
perimeterOfSquare = side => side * 4; // Si solo tiene un parametro puedo quitar parentesis

console.log(perimeterOfSquare(5));

perimeterOfSquare = side => side * 4;


console.log(perimeterOfSquare(5));

// console.log(typeof function () {});
// console.log(typeof (() => {}));


numbersArray.sort(function (a, b) {return a- b});
numbersArray.sort((a, b) => a - b);

console.clear();
//---------------------------------------------Loops---------------------------------------------
// FOR
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
}

// Definir y rellenar un Array con el indice i

let arrayX = [];

for (let i = 0; i <= 10; i++) {
   arrayX.push(i)
}
console.log(arrayX);

// WHILE
let contador = 0;
while (contador <= 10) {
    console.log(contador);

    contador++;
}

console.clear();


// ForEach ---------> Pertenece a los arrays

console.log(numbersArray);

function myFunction (value, index) {
    console.log(`Indice ${index}: ${value}`);
};

console.clear();

numbersArray.forEach((value, index) => console.log(`Indice ${index}: ${value}`));

//Copiar un array elemento a elemento en otro array

let otherArray = [];
console.log(otherArray);

numbersArray.forEach(item => otherArray.push(item));

console.log(otherArray);


// For of
for (let item of numbersArray) {
    console.log(item);
}

// Continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;  //salta a la siguiente interacción
    }
    console.log("Using continue", i);
}

//Break
let i = 0;
let k = 0;

mainloop: while (true) {  
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;
        if (k === 5 && i === 5) {
            break mainloop;
        } else if (k === 5) {
            break;
        }
    }
}

