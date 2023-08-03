
const fetchUsers = async (cantidad) => {
    const data = await fetch(`https://randomuser.me/api/?results=${cantidad}`)
    const resultado = await data.json()
    
    return resultado.results;
    
    /*resultado.results.forEach(user => {
        console.log(user.picture.large)
    })*/
    
}

const addUsersToDom = async () => {
    const usersDiv= document.querySelector('.usuarios')
    
    const queryParams = new URLSearchParams(window.location.search)
    /*console.log(queryParams.get('edad'))*/
    const cantidad = queryParams.get('cantidad');
    
    const users = await fetchUsers(cantidad)
    users.forEach(user => {
        /*usersDiv.innerHTML += `<h1>${user.name.first}</h1>`*/
        const newUser = document.createElement('article');
        const username = document.createElement('h3');
        username.innerText = `${user.name.first} ${user.name.last}`
        newUser.appendChild(username);

        const profileImg = document.createElement('img')
        profileImg.setAttribute('src', user.picture.large);
        profileImg.style.borderRadius = '50%'
        newUser.appendChild(profileImg)

        usersDiv.appendChild(newUser)

        /*newUser.innerText = user.name.first;
        usersDiv.appendChild(newUser)*/
    })
}

addUsersToDom();