function sayHello() {
    return "Hello World";
}

const generateRandInt = (max, min) =>
Math.floor(Math.random() * (max - min +1)) + min;



module.exports = {sayHello, generateRandInt};