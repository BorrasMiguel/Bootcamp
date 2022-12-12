// Paginacion del lado del cliente


//Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

// Variables
let posts = [];
let currentPage = 1;

// Selectores
const postDiv = document.querySelector("#post");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));


//Utilidades
function fillDiv() {
    newPagePost = paginate(posts, PAGE_SIZE, currentPage);
    postDiv.innerHTML = "";
    newPagePost.forEach(post => postDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`);
}

function changePage(event) {
    if (event.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
}

fetch(POST_URL)
    .then(response => response.json())
    .then(data => {
        posts = [...data];
        fillDiv();
    })


//Funcion para la paginacion de un array.
function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    // https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
  

// 6.2 Login y paginacion desde el lado del servidor

// Constantes 
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users/";

// Selectores
const mailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);
const users = document.querySelector("#usersList");

function login(event) {
    event.preventDefault();  // Asi evitamos que se recargue la pagina, se utiliza para quitar el comportamiento por defecto.

    const userInfo = {
        email: mailInput.value,
        password: passwordInput.value
    };

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
        .then(response => response.json())
        .then(data => data.error ? alert(data.error) : fetchAllUser())

}

async function fetchAllUser() {
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then(data => console.log(data))

    let response = await fetch(USERS_URL);
    let data = await response.json();

    let users = [];
    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data); // users = [...users, ...newData.data];
    }
    
    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);

}

// Alternativa para recuperar todas las páginas de una API utilizando .then()
// function fetchAllUsersV2(URL) {
//     fetch(URL)
//     .then(response = response.json())
//     .then(data => {
//         users = users.concat(newData.data)

//         if (newData.page < newData.total_pages) {
//             fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`)
//         } else {
//             userList.innerHTML = "";
//             users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
//         }
//     })
// }









  