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
console.log(employees);