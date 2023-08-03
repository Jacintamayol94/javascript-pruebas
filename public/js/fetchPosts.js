const fetchPosts = async () => {
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response)
    const results = await response.json();
    console.log(results)
    return results;
    } catch (error){
        console.error('Error al obtener los posts', error)
    }
}

fetchPosts()


/*function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            return response.json
        })
        .then(function (dataDecode) {
            console.log(dataDecode)
        })
        .catch(function (e) {
            return res.json(e)
        })
}
*/

fetchPosts()

const addPostsToDom = async () => {
    const postDiv= document.querySelector('.posts')
    
    const posteos = await fetchPosts()

    posteos.forEach(post => {
 
        const newPost = document.createElement('article');
        const title = document.createElement('h3');
        title.innerText = post.title
        newPost.appendChild(title);


        const body = document.createElement('p');
        title.innerText = post.body
        newPost.appendChild(body);

        newPost.style.border = '1px solid black'
        newPost.style.margin = '12px';

        const favButton = document.createElement('input');
        favButton.type = 'checkbox';
        favButton.classList.add('favButton')
        favButton.id = post.id
        newPost.appendChild(favButton)

        postDiv.appendChild(newPost)

    })
}

// Guardar datos permanentemente en el navegador con local storage
// Guardamos el array de favoritos

/*localStorage.setItem('fav', [123, 123, 123, 123])

const favoritos = localStorage.getItem('fav')

console.log(favoritos.split(','))*/

const addOnClicks = async () => {
await addPostsToDom()

const allFavButtons = Array.from(document.querySelectorAll('.favButton'))

allFavButtons.forEach(favBtn => {
    favBtn.onclick = e => {
        /*alert(`Se agregó el poseto ${e.target.id} a favoritos`)*/

        let lsFavs = localStorage.getItem('favoritos');
       
        if(lsFavs !== null){
            lsFavs = lsFavs.split(',')

            lsFavs.push(e.target.id)

            localStorage.setItem('favoritos', lsFavs)
        } else {
            localStorage.setItem('favoritos', e.target.id)
        }
    }
})
}

addOnClicks()