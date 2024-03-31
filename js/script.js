$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".nav").toggleClass("active");
        $(this).toggleClass("active");
      
    });
});

document.addEventListener('DOMContentLoaded', function() {
    typeWriter(titulo)
  });
  
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}


const titulo = document.querySelector('.intro');

