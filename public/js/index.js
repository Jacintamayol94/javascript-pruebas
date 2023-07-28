window.onload = function(){
  //JavaScript del Index
  let container = document.querySelector('.container');
  let subtitulo = document.querySelector('.subtitulo');
  let destacado = document.querySelectorAll('p');
  let fondo = document.querySelector('body');
  let enlace = document.querySelector('a');
  
  let nombre = prompt('Ingrese su nombre');
  console.log(nombre);
  if(nombre !=''){
      subtitulo.innerHTML += nombre;
  }else{
      subtitulo.innerHTML += 'INVITADO';
  }
      
  subtitulo.style.textTransform = 'uppercase';

  let confirmar = confirm('Desea colocar un fondo de pantalla ')
  if(confirmar){
      fondo.classList.add('fondo');
      enlace.style.color = '#E51B3E';
  }
  console.log(destacado);

  for(let i = 0 ; i < destacado.length; i++){
      if(i % 2 == 0){
          destacado[i].classList.add('destacadoPar');
      }else{
          destacado[i].classList.add('destacadoImpar');
      }
  }

  container.style.display = 'block';

  const logo = document.querySelector(".logoDH");

  console.log(logo);

  logo.addEventListener("click", () => {

    const menu = document.querySelector("#menu");

    menu.classList.toggle("mostrar");

  });

  const menu = document.getElementById("menu");

  menu.addEventListener("mouseleave", () => {

    menu.classList.toggle("mostrar");
  });

 
  const body = document.body;

  
  logo.addEventListener("mouseenter", () => {
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList');
  });

  logo.addEventListener("mouseleave", () => {
    body.style.backgroundColor = ''; 
    body.classList.remove('fondoMoviesList');
  });

}