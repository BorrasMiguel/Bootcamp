let cities = ["Madrid", "Barcelona", "Sevilla", "Málaga", "Ávila"];
console.log(cities);

// pop()
// Remove the last element

const removeCities = cities.pop();
console.log(cities);

// reduce() method
// Execute a reducer function on each element of the array, returns a single output value.

const numbers = [20, 10, 40, 50];

const sum = numbers.reduce((a, b) => a+b, 0);
console.log(sum);

// ForEach() method.
// This method executes a provided function for each array element

const words = ["HTML", "CSS", "JavaScript", "Python"];

words.forEach(word => console.log(word));

// find() method
// This method returns the value of the first array element that satisfies the provided test function

const numbersFind = [2, 6, 2, 8, 10, 22];
const found = numbersFind.find(element => element > 8);
console.log(found);

// sort() method
// This methods sorts the items of an array in a specefic order (ascending or descending)

const orderedCities = cities.sort();
console.log(orderedCities);

// push() method
// This method adds zero or more elements to the ends of the array.

cities.push("Zaragoza", "Santiago");
console.log(cities);

// filter() method
// This method returns a new array with all elements that pass the test defined by the given function

const longWords = words.filter(word => word.length > 5);
console.log(longWords);

// map() method
// This method creates a new array with the results of calling a function for every array element.

const doubledNumbers = numbers.map(num => num*2);
console.log(numbers);
console.log(doubledNumbers);

// findIndex() method
// This method returns the index of the first array element that satisfies the provided test function or else returns. -1

const indexFound = numbers.findIndex(element => element > 30);
console.log(indexFound);

// concat() method 
// This method returns a new array by merging two or more values/arrays.

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

//join two arrays
let joinArrays = primeNumbers.concat(evenNumbers);
console.log(joinArrays);