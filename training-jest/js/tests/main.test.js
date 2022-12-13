const sayHello = require ("../main");

test("Greetings from Jest", () => {
    // let greeting = sayHello();
    expect(sayHello()).toBe("Hello World");
});

