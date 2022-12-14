const {sayHello, generateRandInt: random} = require ("../main");

test("Greetings from Jest", () => {
    // let greeting = sayHello();
    expect(sayHello()).toBe("Hello World");
    expect(2+2).toBe(4)
    expect(!0).toBe(true)
});

test("Checket objects and arrays", () => {
    let data = {
        email: "john@conor.com",
        password: "I`llB3B@ck",
    };
    let numbers = [1, 2, 3];

    expect(data.password).toEqual("I`llB3B@ck");
    expect(Object.keys(data).length).toEqual(2);
    expect(numbers[numbers.length -1]).toEqual(3);
});

test("Checking the opposite or something", () => {
    expect(2+2).not.toBe("world");
    expect("hello").not.toBe("world");
    expect(3%2).not.toBe(0);
});

test("checking floating numbers", () => {
    //It will fail
    // expect(0.2+0.1).toBe(0.3);
    expect(0.2+0.1).toBeCloseTo(0.3); //Resultado que no sea exactamente.
});

test("checking truthinss", () => {
    let data = [1, true, 3.5, null, undefined];
    expect(data[3]).toBeNull();
    expect(data).toBeDefined();
    expect(data[4]).toBeUnDefined();
    expect(data.length == 5).toBeTruthy(); //comprueba veracidad.
    expect(data[0] == 4).toBeFalsy();
})


// Cadenas de caracteres
// ^ Empieza expresion regular -> $ termina
test("checking strings", () => {
    expect("12345678A").toMatch(/^[0-9]{8,8}[A-Za-z]$/)
})


// Agrupamiento
describe("Generar numeros aleatorios entre dos limites definidos", () => {
    test("Between 1 and 6", () => {
        let min = 1,
            max = 6,
            number = random(max, min);
        expect(number).toBeGreaterThan(0);
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(6);
        expect(number).toBeLessThan(7);
    });
})






