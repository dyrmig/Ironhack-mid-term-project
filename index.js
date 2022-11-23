//funcion para acceder a una API externa

const get3posts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => {
        for (let i = 0; i < 3; i++) {
            document.querySelector('.projects-container').innerHTML += `<div class="project">
            <img src="./resources/images/projects-section/${res[i].id}.jpg" alt="">
            <h3>${res[i].title}</h3>
            <p>${res[i].body}</p>
            <a href="project.html?p=${res[i].id}">Learn More</a>
            </div>`;
        }
    })
    .catch((error) => console.log(error))
}

window.addEventListener("load", get3posts);