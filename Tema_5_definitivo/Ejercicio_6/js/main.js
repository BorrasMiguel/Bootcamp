// Paginacion del lado del cliente


//Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

// Selectores
const postDiv = document.querySelector("#post");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));


//Utilidades
function fillDiv(posts) {
    postDiv.innerHTML = "";
    posts.forEach(post => postDiv.innerHTML += `<h3>${post.title}</h3><p>${post.body}</p>`);
}

function changePage(params) {
    
}

fetch(POST_URL)
    .then(response => response.json())
    .then(data => fillDiv(data))


//Funcion para la paginacion de un array.
function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
  console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));
  console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 1));