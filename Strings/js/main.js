const str = "Hello World"

str.length; // 11

str.charAt(4); // 0

str.endsWith("d") // True 

str.includes("World")  // True 

str.indexOf("W") // 6

str.repeat(2); // "Hello WorldHello World"

str.replace("World", "Hell") // "Hello Hell"

str.slice(6, 10); //"World"

str.split(" "); // ["Hello World"]

str.startsWith("Hello"); // True 

str.substring(6, 11); // "World"

str.toLowerCase(); // "hello world"

str.toUpperCase(); // "HELLO WORLD"

"     Hello World      ".trim(); // "Hello World"