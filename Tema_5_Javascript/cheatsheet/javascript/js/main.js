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
    } //ES6
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

//------------------------------------------Arrays---------------------------

let selectedColors = ["red", "blue"];  //Array de Strings
console.log(selectedColors, selectedColors.length);

selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet"); //Sirve para que el array agregue elementos al ultimo disponible
console.log(selectedColors, selectedColors.length);

selectedColors.pop();
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

console.log("Los elementos borrados son: ", selectedColors.splice(1, 3)); //Borra todo desde donde empieza hasta el numero que le indique de elementos que quieres que borres
console.log("El array se queda así: ", selectedColors);

/*Crear un objeto niño que tenga las propiedades nombre, altura, genero,
y amigoS. AmigoS estara inicialmente vacio y añadiremos 
posteriormente tres elementos con los nombres. 
Después, añadiremos uno extra al inicio*/



let  niño = {
    nombre: "Juan",
    altura: 1.74,
    genero: "masculino",
    amigos: []
}
niño.amigos = ["Ana", "Sara", "Lola"];

niño.amigos.unshift("Marta");

niño.amigos.push("Alejandra")

console.log(niño);









