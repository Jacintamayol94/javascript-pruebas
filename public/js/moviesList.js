window.onload = function(){
  let body = document.querySelector('body');
  let moviesListTitulo = document.querySelector('.moviesListTitulo');


    const logo = document.querySelector(".logoDH");


    logo.addEventListener("mouseenter", () => {

      body.style.backgroundColor = '#7f7f7f';
      body.classList.add('fondoMoviesList');
    });

    
    logo.addEventListener("mouseleave", () => {
      
      body.style.backgroundColor = ''; 
      body.classList.remove('fondoMoviesList');
    });
  
  console.log(body);
  moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
  moviesListTitulo.style.color ='white';
  moviesListTitulo.style.backgroundColor = 'teal';
  moviesListTitulo.style.padding = '20px';

}
