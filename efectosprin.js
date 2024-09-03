var enlace= document.querySelectorAll('.burbuja a')

enlace.forEach(function(enlace){
    enlace.addEventListener("click", function(event){
        event.preventDefault();
        alert("¡Información en construcción!")
    })
})

/* otra forma, pero asi hay que hacer con las 5 burbujas
var enlace= document.querySelector('.burbuja a')
enlace.addEventListener("click", function(event){
        event.preventDefault();
        alert("¡Información en construcción!")
    })
*/

