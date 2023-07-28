window.addEventListener("load", function(){

    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    const form = document.querySelector('.form');
    const titleInput = document.querySelector('#title');

    // Forma Play Ground:

/*    form.addEventListener("submit", function(e){

    let errores = []

    const titleInput = document.querySelector('#title');

    if(titleInput.value == '') {
		errores.push('El campo de nombre tiene que estar completo.')
    } else if (titleInput.value.length < 3) {
	    errores.push('El campo de nombre debe tener al menos tres caracteres')
    }

    const inputs = [titleInput, ratingInput, awardsInput, releaseDateInput, lengthInput, genreIdSelect];
      inputs.forEach(input => input.classList.remove('is-invalid'));
    
    const ratingInput = document.querySelector('#rating');

    if(ratingInput.value == '') {
		errores.push('El campo de rating tiene que estar completo.')
    } else if (ratingInput.value > 10) {
	    errores.push('El campo rating debe ser un valor entre 0 y 10')
    }

    const awardsInput = document.querySelector('#awards');

    if(awardsInput.value == '') {
		errores.push('El campo de premios tiene que estar completo.')
    } else if (awardsInput.value > 10) {
	    errores.push('El campo premios debe ser un valor entre 0 y 10')
    }

    const lengthInput = document.querySelector('#length');

    if(lengthInput.value == '') {
		errores.push('El campo de duración tiene que estar completo.')
    } else if (lengthInput.value > 360 && lengthInput.value < 60 ) {
	    errores.push('El campo duración debe ser un valor entre 60 y 360 min')
    }

    const dateInput = document.querySelector('#release_date');

    if(dateInput.value == '') {
		errores.push('Debe seleccionar una fecha de creación')
    } 

    const genreInput = document.querySelector('#genre_id');

    if(genreInput.value == '') {
		errores.push('Debe seleccionar un género.')
    } 

    if(errores.length > 0) {
        e.preventDefault();
    
        let ulErrores = document.querySelector('div.errores ul')
    
        for(let i=0; i < errores.length; i++) {
            ulErrores.innerHTML += ('<li>' + errores[i] + '</li>')
    }
    }
    
    }) */


    
})

const submitBtn = document.querySelector('#submit-btn')

const checkErrors = () => {
    // Agarramos todos los p de error
    let errorsHtml = Array.from(document.querySelectorAll(".error")) 
    console.log(errorsHtml)

    let errors = []

    // Hacemos un for each de cada p 

    errorsHtml.forEach(error => {
        // Si el p contiene un innerHTML => existe un error
        console.log(error.innerHTML)
        if(error.innerHTML !== ''){
            errors.push(error.innerHTML)
        }
    })
    if(errors.length > 0){
        submitBtn.disabled = true;
    }else{
        submitBtn.disabled = false;
    }
}

const titleInput = document.querySelector('#title');

titleInput.oninput = (e) => {

    const value = e.target.value;
    const length = e.target.value.length;
    const isTitleCorrect = e.target.value.includes('@') && e.target.value.includes('.');
    
    console.log(isTitleCorrect)

    if(!isTitleCorrect || length < 6){
        e.target.nextElementSibling.innerHTML = 'El título es inválido'
    } else {
        e.target.nextElementSibling.innerHTML = ''
    }
    checkErrors()
}

const ratingInput = document.querySelector('#rating');

ratingInput.oninput = (e) => {

    const value = e.target.value;
    const length = e.target.value.length;
    const isRatingCorrect = e.target.value > 0 && e.target.value <= 10;
    
    console.log(isRatingCorrect)

    if(!isRatingCorrect){
        e.target.nextElementSibling.innerHTML = 'El rating debe tener un valor entre 0 y 10'
    } else {
        e.target.nextElementSibling.innerHTML = ''
    }
    checkErrors()
}



/*
// Forma nacho:

form.addEventListener("submit", function(e){

    let errors = [];

    titleInput.onchange = (e) => {

        const value = e.target.value;
        const length = e.target.value.length;
        const isTitleCorrect = e.target.value.includes('@') && e.target.value.includes('.');
        console.log(isTitleCorrect)

        if(length === 0){
            e.preventDefault();
            errors.push({field: 'title', msg: 'El título es obligatorio.'})
        }
        console.log(errors)
    }
})
*/








