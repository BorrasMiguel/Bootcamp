//-----------------------Tipos de daTOS
//Datos Primitivos
let str = String("Soy un string");
let str2 = ("Soy otro string");

console.log(typeof str, typeof str2);

let num = Number(5);
let num2 = 5;

console.log(typeof num, typeof num2);

let bool = Boolean(true);
let bool2 = false;

console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectColor = null;  //Limpiar variable
console.log(selectColor, typeof selectColor);

//--------------------Objetos

let array = Array(1, 2, 3);
let array2 = [1, 2, 3];

console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2022-10.21"));
console.log(typeof new Error("Mensaje de error"));

console.clear;
//------------------Strings

str = ("Hola Mundo");
console.log(str, str.length);
console.log(str.indexOf("futuro"));  //indexOf -> Sirve para buscar dentro de un Array.
console.log("La ultima ocurrencia de 'u' esta en el indice", str.lastIndexOf("u"));  //Sirve par abuscar la ultima posicion del valor que le pasemos

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(" adios mundo"));
console.log("Hola mundo" + " adios mundo"); //Equivalente a conact.

str = str + " adios mundo";
str += " Adios mundo.";
console.log(str);

console.log(str.replace("futuro", "mundo"));
console.log(str.replaceAll("futuro", "mundo"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let day = 5;
console.log(`El dia de mi cumpleaños es ${day}`);  //String template.


//Parsing -> Cambiar el tipo de dato a otro.
let number2 = Number("ads"); // Nah -> No a number
console.log(number2, typeof number2);

console.clear();
//----------------------------------Objects

let person = {
    name: "John",
    age: 30,
    blonde: false,
    jump() {
        console.log("Hey, estoy saltando");
    },

    presentarse() {
        console.log(`Hola soy ${this.name}, tengo ${this.age} y ${this.blonde ? `sou ribio` : `soy moreno`}`);
    }
}

//Acceso por puntos
console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

//Acceso por corchetes

let propertyName = "blonde";
console.log(person[propertyName]);

// Ampliacion
person.children = ["Marta", "Peter"];  //Para añadir campos al objeto despues de crearlos.
console.log(person.children[0], person.children.length, person.children[1]);

person.jump();

//This

let person2 = {
    name: "Manuel",
    talk() {
        console.log(`Me llamo ${this.name}`); // Se utiliza cuando se esta dentro del objeto, para referirse a el.
    }
}

person2.talk();

//-------------------------------------Arrays

let selectedColors = ["red", "blue",]; //Array de Strings
console.log(selectedColors, selectedColors.length);

selectedColors[2] = "green"; //Si no existe lo crea.
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); // Añade elementos al array (Al final)
console.log(selectedColors, selectedColors.length);

selectedColors.pop();  //Borra el ultimo elemento del array
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); //Introduce un elemento al principio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.shift();  //Borra el primer elemento del array.
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); // Puede ordenar el array como le indiquemos a traves de una funcion.
console.log(selectedColors, selectedColors.length);

console.log(selectedColors.indexOf("red")); //Busca en el array lo que indiquemos.

console.log(selectedColors.slice(1, 3)); //Devuelve los indices que le indiques.
console.log(selectedColors.splice(1, 3)); //Elimina los elementos del array.


console.clear();

let niño = {
    nombre: "Pablo",
    altura: 1.80,
    genero: "masculino",
    amigos: [],
    perderAmigo() {
        this.amigos.pop()
    }
    
};

niño.amigos.push("Marcos", "Marta", "Andrea");

niño.amigos.unshift("Ana");

console.log(niño.amigos);

niño.perderAmigo();
console.log(niño.amigos);

console.clear();
//--------------------------Condicionales

const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Tienes que introducir del mismo tipo");
}

if (randomNumber == guessedNumber) {
    console.log("Has acertado el numero");
} else if (randomNumber > guessedNumber) {
    console.log("El numero secreto es mayor");
} else {
    console.log("El numero secreto es menor");
};


//Operador ternario
let variable = 12 < 10 ? "es menor" : "es mayor";
console.log(variable);

person.presentarse();

//Switch
let option = 3;
switch (option) {
    case 1:
        console.log("Opcion vale 1");
        break;
    case 2:
        console.log("Opcion vale 2");
        break;
    case 3:
        console.log("Opcion vale 3");
        break;
    default:
        console.log("otra opcion");
}

console.clear();

//---------------------------------Funciones
// Nombrada
function saludar(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}. Que tal?`;
}

console.log(saludar("Marco", "Aurelio"));

function cuadrado (num) {
    return num*num;
}

console.log(cuadrado(4));

//Anonima
let numberArray = [5, 51, 20, 34]
console.log(numberArray);

numberArray.sort(); // Lo ordena segun ASCII
console.log(numberArray);

numberArray.sort((a, b) => a - b); // Lo ordena segun ASCII
console.log(numberArray);



// function orderNumber(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

//--------------------------ArrowFunctions

const perimeterOfSquare = (side) => side*4;

console.log(perimeterOfSquare(4));

//numbersOfArray.sort((a, b => a - b))


//-----------------------------Bucles

//---------------------------------For(Cuando sabemos el numro de repeticion)
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
}


//Definir y rellenar un array con el indice i.
const arrayX = [];


// for (i = 0; i <= 10; i++) {
//     arrayX.push(i);
// }

// console.log(arrayX);


//-------------------------------While (Cuando no sabemos cuantas veces es el numero de repeticion)
let contador = 0;
while (contador <= 10) {

    console.log(contador);

    contador++;
}

//-----------------------ForEach (Pertenece a los arrays)

numberArray.forEach(function (value, index) {
    console.log(`Indice: ${index}: ${value}`);
})


numberArray.forEach((value, index) => console.log(`Indice: ${index}: ${value}`));

let otherArray = [];

//Copiar Array a otro Array.
numberArray.forEach((value, index) => otherArray.push(value));

console.log(otherArray);


//----------------------------------For of  (Para cualquier cosa que se pueda iterar).
for (let item of numberArray) {
    console.log(item);
}


//-----------------------------------Break y Continue

//Continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; //Salta a la siguiente iteración.
    }
    console.log("Using continue", i);
}

//Break
let i = 0;
let k;

mainloop: while (true) {
    console.log("Outher loop", i);
    i++;
    k = 1;
    while(true) {
        console.log("Inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainloop;
        } else if (k === 5) {
            break;
        }
    }
}

