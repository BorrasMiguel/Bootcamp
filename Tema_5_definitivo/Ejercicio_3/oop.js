// Antes de ES6
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}


let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Audi", "Q7", 2015);

console.log(myCar, myCar2);
myCar.getAge();

Car.getHp = function () {  //No actualiza las instancias. Intentamos
    console.log("This car has 300 horsepower");
}

myCar.getHp = function () { //Solo modifica la instancia myCar
    console.log("This car has 300 horsepower");
}


Car.prototype.getHp = function() { 
    console.log("This car has 400 horsepower");
}

myCar.getHp();
myCar2.getHp();

// FOrma antigua de hacer las cosas
function SUV(brand, model, year, width, height) {
    Car.call(this, brand, model, year);
    this.width = width;
    this.height = height;
}

SUV.prototype = Object(Car.prototype);

let mySUV = new SUV("Audi", "Q3", 2017, 2200, 2000);

console.log(mySUV);
mySUV.getAge(); //Aunque no tenga la función, la adquiere de Car al aplicarle call();
mySUV.getHp();

console.clear();
// ---------------------------------------------------ES6-----------------------------------------------------------
class Book {
    constructor(titulo, autor, year) {
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.titulo} was written by ${this.autor} in ${this.year}`);
    }

    getType() {
        console.log("I'm a normal book");
    }
}


const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);
console.log(book1);
book1.getType();
book1.getSummary();

//Subclases (Herencia);  Hereda todo de book

class Magazine extends Book {
    
    constructor(titulo, autor, year, month){
        super(titulo, autor, year)
        this.month = month;    //Para ñadir una nueva propiedad
    }
    
    
    
    getType() {
        super.getType();   //Con la palabra super se accede a la instancia superior.
        console.log("I'm a magazine");
    }
}

//Instanciamos una revista  //Polimorfismo, mismo nombre, pero hace cosas diferentes.

const mag1 = new Magazine("Super Pop", "Algún loco", 2015);
mag1.getSummary();

mag1.getType();


// Otro ejemplo de polimorfismo
class Animal {
    constructor(type, name, sound ) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1, animal2) {   //Esto podria estar fuera perfectamente, porque es genérico, no pertenece a las instancias.
        return animal1.type === animal2.type;
    }
}

class Feline extends Animal {
    constructor(type, name) {
        super(type, name, "miau");  //miau es fijo
    }
}

class Cat extends Feline {
    constructor(name){
        super("cat", name); //tipo es fijo
    }
}

class Panther extends Feline {
    constructor(name) {
        super("panther", name)
    }
}

class Dog extends Animal {
    constructor(name){  //Este es lo unico que cambia y se recibe desde fuera del todo.
        super("dog", name, "woof");
    }
}

const conBotas = new Cat("Con Botas");
const dylan = new Dog("Dylan");
const danko = new Dog("Danjo");
const wakanada = new Panther("wakanda");

console.clear();

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();
wakanada.makeSound();


console.log(Animal.compareAnimals(dylan, danko));









