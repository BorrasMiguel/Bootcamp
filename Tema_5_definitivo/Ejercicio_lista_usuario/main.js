

function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productCount = 0;
    this.incrementProducts = function () {
        this.productCount++;
    }
    this.emptyProduct = function () {
        this.productCount = 0;
    }
}

//Data
const users = [
    new User("Fran", "Gomez", "Fernandez", "fgomez@gmail.com", 35, "Malaga"),
    new User("Lucia", "Garcia", "Ruiz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Nuñez", "Coronado", "mnuñez@gmail.com", 18, "Albacete"),
];

//Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.querySelector("#emptyButton");

//Iterar usuarios, para añadirlos al select
for (let user of users) {
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption); 
}


//Rellenar la lista para un usuario

function fillList(user) {

    list.innerHTML = "";  //Sirve para limpiar la lista antes de comenzar y conseguir asi que no se concatenen las listas

    for (let propertyName in user) {   //For in se utiliza para acceder a las propiedades de un objeto. En vez de devolver el usuario entero, me devuelve el nombre de la propiedad
        const value = user[propertyName];
        if (typeof value !== "function") { //Filtramos las funciones.
            // console.log(`propertyName: ${propertyName}, value: ${value}`);
            const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;  //Se transforma a HTML
            newListItem.classList.add("list-group-item")
            list.appendChild(newListItem);
        }
    }
}

//Añadir Listenner lista para que vaya rotando cada usuario.
select.addEventListener("change", e => {
    const selectedUsers = users.find(user => user.name === select.value); //Lo único que necesita find(), que nuestra funcion devuelva true.
    
    fillList(selectedUsers);

});


// Estado Inicial

fillList(users[0]);

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);

    if (e.target === incrementButton) {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProduct()
    }
    fillList(selectedUser);
}
  
incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);