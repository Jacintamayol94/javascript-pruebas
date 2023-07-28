document.addEventListener("DOMContentLoaded", function () {
    
    const h1Element = document.querySelector("h1");
    const sectionElement = document.querySelector("section");
    const articleElement = document.querySelector("article");

    console.log("Contenido de <h1>: ", h1Element);
    console.log("Contenido de <section>: ", sectionElement);
    console.log("Contenido de <article>: ", articleElement);

    h1Element.textContent += 'AGREGAR PELÍCULAS';
    h1Element.classList.add('titulo')
    articleElement.classList.add('fondoTransparente')
    sectionElement.classList.add('fondoCRUD')

    h1Element.addEventListener("mouseover", function () {
      h1Element.style.color = "red";
    });
    
    h1Element.addEventListener("mouseout", function () {
      h1Element.style.color = "black"; 
    });

  });