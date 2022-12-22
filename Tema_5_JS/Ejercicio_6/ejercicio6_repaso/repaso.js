// Constantes

const URL = "https://jsonplaceholder.typicode.com/posts";
const page_size = 20;

// Variables
let usersArray = [];
let pageNumber = 1;

// Selectores
const post = document.getElementById("post");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

// Utilidades
// Función para paginar el array.
function paginate(array, page_size, pageNumber) {
    return array.slice((pageNumber - 1) * page_size, pageNumber * page_size);
}

function fillDiv() {
    const newPagePost = paginate(usersArray, page_size, pageNumber);
    post.innerHTML = "";
    return newPagePost.forEach(array => post.innerHTML += `<h3>${array.id} ${array.title}</h3><p>${array.body}</p>`);
}

function changePage(e) {
    if (e.target.className === "previousPage" && pageNumber > 1) {
        pageNumber--;
    } else if (e.target.className === "nextPage" && pageNumber < usersArray.length / page_size) {
        pageNumber++;
    }
    fillDiv();
}



fetch(URL)
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error(`Hay algún error con la respuesta: `, response.statusText);
        } 
        return response.json();
    })
    .then(data => {
        usersArray = [...data];
        fillDiv();
    })



// 6.2 Login y paginación

const LOGIN_URL = "https://reqres.in/api/login";

// Selectores
const emailInput = document.querySelectorAll("input")[0];
const passWordInput = document.querySelectorAll("input")[1];
document.getElementById("loginButton").addEventListener("click", login);

function login(e) {
    e.preventDefault()

    const userInfo = {
    email: emailInput.value,
    password: passWordInput.value
    }
   
    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    }

    fetch(LOGIN_URL, config)
        .then(response => response.json())
        .then(data => console.log(data))
        
}