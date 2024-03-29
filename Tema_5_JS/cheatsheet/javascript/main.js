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


//----------------------------------------Copiar Objetos en JS

// let obj1 = {property: 5},
// let obj22 = obj1;   // No es una copia, es el mismo objeto con distinto nombre.

// obj22 = {...obj1} // Copia superficial que haremos practicamente siempre.

// Tambien sirve con arrays

let arr = [1, 2, 3];

let arr2 = [0, ...arr, 4];

console.log(arr2);



//-------------------------------------Objects Constructor using Functions
function Car(marca, color, weight, topSpeed) {
    this.marca = marca;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `This ${this.marca} ${this.weight} kilos and can reach up to ${this.topSpeed} kms/h`
    }
}

const car1 = new Car("mercedes", "red", 2000, 300);
const car2 = new Car("volvo", "grey", 1500, 280);
const car3 = new Car("volkwagen", "green", 1800, 380);

console.log(car1, car2, car3.getDescription);
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

//---------------------------------For(Cuando sabemos el numero de repeticion)
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

// For of y forEach son iguales, se utilizan cuando queramos iterar arrays. 
// While - Cuando no sepamos la cantidad de iteraciones.
// Cuando queramos iterar las propiedades de un objeto
// For (let i=0; .....) Cuando ninguno de los anteriores nos valga.

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








//------------------------------------------------------- Higher Order Functions
// Map  Crea un array nuevo

//Crear un nuevo array a partir de uno y multiplicarlo por dos.
//Sin Map(), como lo hariamos.
let arr1 = [1, 2, 3];
let arr21 = [];

for (let num of arr1) {
    arr21.push(num*2);
}


// Con Map() y una funcion nombrada
arr1 = [1, 2, 3];
arr2 = arr1.map(myFunction());

function myFunction(num) {
    return num * 2;
}


// Con Map() y una funcion anónima.

arr1 = [1, 2, 3];
arr2 = arr1.map(num => num * 2)

console.log(arr1, arr2);



//MiniEjercicio. A partir de un array de años, calcular la edad de esa persona.


const birthYears = [1990, 1980, 1970, 1975];

let calculateAge = birthYears.map(year => 2022 - year);
console.log(calculateAge);


// Filter 
const prices = [150, 40, 35, 100, 237, 49];
const expensives = prices.filter(price => price >= 50);;

console.log(expensives);




const cars = [
    {
        brand: "BMW",
        year: 1990,
        pleteNumber: "ASD3456",
        address: {
            street: "lo que sea",
            city: "woonderland"
        }
    },
    {   
        brand: "Mercedes",
        year: 2012,
        pleteNumber: "ASD34ewf56",
        address: {
            street: "lo que sea",
            city: "no se"
        }
    },
    {
        brand: "Volvo",
        year: 2021,
        pleteNumber: "ASD3agh456",
        address: {
            street: "lo que sea",
            city: "Linares"
        }
    },
]


console.log(cars.filter(car => car.address.city === "Linares"));


console.log(cars.map(car => car.brand));

console.log(cars);

cars.sort((car1, car2) => car1.year - car2.year);

console.log(cars);


// Reduce

const arr12 = [10, 7, 4, 13, 20];

console.log(arr12.reduce((sum, currentNumber) => sum + currentNumber, 0));  //El cero es el valor inicial que queremos que tenga la operacion
