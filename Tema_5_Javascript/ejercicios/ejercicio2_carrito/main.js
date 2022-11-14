function User(name, firstLastName, secondLastName, email, age, city,) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function() {
        return this.productsCount++;
    }
    this.emptyProducts = function() {
        return this.productsCount = 0;
    }
}

//Data
const users = [
    new User("Fran", "Gomez", "fgomez@gmail.com", 35, "Malaga"),
    new User("Lucia", "Garcia", "lgarcia@gmail.com", 41, "Madrid"),
    new User("Maria", "Nuñez", "mnunez@gmail.com", 18, "Albacete"),

];

//Selector

const select = document.querySelector("#idSelect");
const listGroup = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");


//Rellenar select

users.forEach(user => {
    const newOption = document.createElement ("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);

});

//Rellenar la lista con los datos de un usuario.
fillList(users[0]); // Para que se quede la tabla en un estedo inicial.

function fillList(user) {

    listGroup.innerHTML = "";    

    for (const propertyName in user) {
        const value = user[propertyName];

        if (typeof value !== "function") {
            const newList = document.createElement("li");
            newList.innerHTML = `<b>${propertyName}: </b>${value}`; // En vez de textContent ponemos innerHtml para poner en negrita el propertyName
            newList.classList.add("list-group-item");
            listGroup.appendChild(newList);
        }
    }
};


function processProduct(e) {
    const selectedUsers = users.find(user => user.name === select.value); //Saber que usuario esta seleccionado
    // let whatButton = e.target.id === "incrementButton" ? selectedUsers.incrementProducts() : selectedUsers.emptyProducts();

    if (e.target.id === "incrementButton") {
        selectedUsers.incrementProducts();
    } else {
        selectedUsers.emptyProducts();
    }
    fillList(selectedUsers);
};




select.addEventListener("change", e => {
    const selectedUsers = users.find(user => user.name === select.value);
    fillList(selectedUsers);
});


incrementButton.addEventListener("click", processProduct);
emptyButton.addEventListener("click", processProduct);