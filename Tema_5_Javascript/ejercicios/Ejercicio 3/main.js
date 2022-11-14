

function User(name, firstName, secondLastName, email, age, city) {
    this.name = name;
    this.firstName = firstName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    };

}


//Data
const users = [
    new User("Fran", "Gómez", "Fernandez", "fgomez@gmail.com", 28, "Malaga"),
    new User("Lucia", "Garcia", "Ruiz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("Maria", "Nuñez", "Coronado", "mnunez@gmail.com", 18, "Jaén"),

];

// Seletors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

// for (let user of users) {
//     const newOption = document.createElement("option");
//     newOption.textContent = user.name;
//     select.appendChild(newOption);
// }

users.forEach(user => {
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
})


for (const propertyName in users[0]) {
    const value = users[0][propertyName];

    if (typeof value !== "function") {
        // console.log(`key: ${propertyName}, value: ${value}`);
        const newListItem = document.createElement("li");
        newListItem.textContent = `${propertyName}: ${value}`;
        newListItem.classList.add("list-group-item")
        list.appendChild(newListItem);
    }

}

// Añadir Listeners
select.addEventListener("change", e => {
    console.log(users.find(user => user.name === select.value));
})


