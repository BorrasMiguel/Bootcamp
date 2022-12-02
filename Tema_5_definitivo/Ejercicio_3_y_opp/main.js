// Apartado 1 - Generacion del Array Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000

function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}   // Funcion que crea números aleatorios entre el rango que elijamos


console.log(randomBetweenRange(100, 200));

let employees = [];
for (let i = 0; i <= 100; i++) {
    employees.push({
        cargo: `Empleado: ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomBetweenRange(1250, 4000)
    });
}


function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}   // Funcion que crea números aleatorios entre el rango que elijamos

// employees = [];
// for (let i = 1; i <= 100; i++) {
//     employees.push(new Employee(
//         `Empleado ${i}`,
//         Number(Math.random().toFixed(2)),
//         randomBetweenRange(1250, 4000))
//     );
// }

console.log("1. Generación del array v2", employees);


// Aparatado 2 Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

employees.sort((empleadoA, empleadoB) => empleadoA.rendimiento - empleadoB.rendimiento)  //Sort modifica el array en el que se emplea, pero no devuelve otro array

console.log(employees);

// Aparatado 3 Ordenar el array por salario e imprimirlo. Usar una función de flecha

employees.sort((emp1, emp2) => emp1.salario - emp2.salario);

console.log(employees);

// Aparatdo 4.  Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
// dentro del string Cargo. Usar una función nombrada como callback

employees.sort(ordenarDecreciente);

function ordenarDecreciente(empleado1, empleado2) {
    return empleado2.cargo.slice(9) - empleado1.cargo.slice(9);
}

console.log(`Ordenar por número de cargo: `, employees);

// Apartado 5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.

console.log("Filtrar ciertos campos del array");

employees
    .filter(employee => employee.salario >2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));


// Apartado 6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.

console.log("Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.");
employees = employees.map(employee => {
    if (employee.salario < 1500) {
        employee.salario = employee.salario * 1.25
    } 
    return employee;
    
})

console.log(employees);

// Apartado 7. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

const totalCost = employees.reduce((sumCost, employee) => {  //Sirve para acumular lo que se nos pase por la mente.
    sumCost += employee.salario * 1.5;
    return sumCost;
}, 0); //Valor inicial que queremos que tenga la operacion, se coloca despues de la funcion

console.log(totalCost);

// Apartado 8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7.

employees = employees.filter(employee => employee.rendimiento >= 0.30);
console.log("Despedir a los empleados que tengan un rendimiento menor al 0.30", employees);



// Apartado 9. Calcular el sueldo medio de los empleados.

const salaryAVG = employees.reduce((sumSalary, employee) => {
    sumSalary += employee.salario;
    return sumSalary;
}, 0) / employees.length;

console.log("El salario medio de los empleados es: ", salaryAVG);

// Apartado 10. Subirle el sueldo a los empleados con un rendimiento superior al 0.87

employees.forEach(employee => {
    if (employee.rendimiento > 0.87){
        employee.salario * 1.25;
        console.log("Subido el sueldo de", employee.cargo);
    }
})





