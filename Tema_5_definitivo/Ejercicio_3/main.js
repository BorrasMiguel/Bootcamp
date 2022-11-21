// Apartado 1 - Generacion del Array Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000

function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}   // Funcion que crea números aleatorios entre el rango que elijamos


let employees = [];
for (let i = 0; i <= 100; i++) {
    employees.push({
        cargo: `Empleado: ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomBetweenRange(1250, 4000)
    });
}

console.log(employees);


// Apartado 1 -v2 

function Employee(cargo, rendimiento, salario) {
    this.cargo = cargo;
    this.rendimiento = rendimiento;
    this.salario = salario;
}


function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}   // Funcion que crea números aleatorios entre el rango que elijamos

employees = [];
for (let i = 1; i <= 100; i++) {
    employees.push(new Employee(
        `Empleado ${i}`,
        Number(Math.random().toFixed(2)),
        randomBetweenRange(1250, 4000))
    );
}

console.log("1. Generación del array v2", employees);


// Aparatado 2 Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

employees.sort((empleadoA, empleadoB) => empleadoA.rendimiento - empleadoB.rendimiento)  //Sort modifica el array en el que se emplea, pero no devuelve otro array

console.log(employees);

// Aparatado 3 Ordenar el array por salario e imprimirlo. Usar una función de flecha

employees.sort((emp1, emp2) => emp1.salario - emp2.salario);

console.log(employees);

// Aparatdo 4.  Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
// dentro del string Cargo. Usar una función nombrada como callback

