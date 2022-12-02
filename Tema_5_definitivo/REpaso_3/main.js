// Apartado 1 - Generacion del Array Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000

function randomSalary(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

let employees = [];

for (let i = 0; i <= 100; i++) {
    employees.push({
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomSalary(1250, 4000)
    });
}



// Aparatado 2 Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

console.log(employees.sort((empleado1, empleado2) => empleado1.rendimiento - empleado2.rendimiento));
// console.log(employees);


// Aparatado 3 Ordenar el array por salario e imprimirlo. Usar una función de flecha

console.log(employees.sort((empleadoA, empleadoB) => empleadoA.salario - empleadoB.salario));
console.log(employees);

// Aparatdo 4.  Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
// dentro del string Cargo. Usar una función nombrada como callback

function ordernarDecreciente(emplA, emplB) {
    return emplB.cargo.slice(9) - emplA.cargo.slice(9);
}

employees.sort(ordernarDecreciente);
console.log(`Ordenar por orden de empleado decreciente: `, employees);

// Apartado 5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.


console.log("Ejercicio 5");
employees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));

// Apartado 6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.

console.log(`Salario antes de subida: `, employees);

employees = employees.map(employee => {
    if (employee.salario < 1500) {
        employee.salario = employee.salario * 1.25
    } 
    return employee;
    
})

console.log(`Salario despues de subida: `, employees);

// Apartado 7. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

const totalCost = employees.reduce((sumTotal, employee) => {
    sumTotal += employee.salario * 1.15;
    return sumTotal;
}, 0)

console.log(totalCost);

// Apartado 8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7.

employees = employees.filter(employee => employee.rendimiento > 0.30);
console.log(employees);


const sueldoAVG = employees.reduce((salary, employee) => {
    salary += employee.salario;
    return salary;
}, 0) / employees.length;

console.log(sueldoAVG);

employees = employees.forEach(employee => {
    if (employee.rendimiento > 0.70) {
        employee.salario * 1.15;
        console.log(`Subido el sueldo del empleado: `, employee.cargo);
    }
})

