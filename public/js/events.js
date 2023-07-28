const boton = document.querySelector('#no-clickear')

const input = document.querySelector('#input')

console.log(document.querySelectorAll('*'))

input.addEventListener('mouseover', () => {
    input.focus()
});

input.addEventListener('mouseout', () => {
    input.blur()
});

input.onchange = () => {
    console.log(input.value);
}

input.oninput = (event) => {
    console.log(event.target.value)
    console.log(event.data)
}

const amigas = Array.from(document.querySelectorAll('.amiga'))

console.log(amigas)

amigas.forEach(amiga =>{
    amiga.onclick = (e) => {

        console.log(e.target.parentElement.children)

        e.target.parentElement.style.border = '1px solid black'
        
        setTimeout(() => {
            e.target.parentElement.style.border = ''  
        }, 500)
    }
})