 //extraemos el numero del post de la url
let params = new URLSearchParams(location.search);
var postUrl = params.get('p');

//consultamos el post extraeido de la url
const getPost = (post) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then((response) => response.json())
    .then((res) => {

            //console.log(res)

            document.querySelector('.txt-title').innerHTML += `<h1>${res.title}</h1>
    <div class="subtitle">
        <h2>${res.title}</h2>
        <h3>Completed on 2/2/22</h3>
    </div>
    <div class="img-container">
        <img src="./resources/images/projects-section/${res.id}.jpg" alt="">
    </div>
    <div class="txt-container">
        <p>${res.body}</p>
    </div>`;
    })
    .catch((error) => console.log(error))
}

getPost(postUrl);