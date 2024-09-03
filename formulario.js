const nombre= document.getElementById("name")
const telefono=document.getElementById("phone")
const email=document.getElementById("email")
const dudas=document.getElementById("mensaje")
const form=document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault() /*Para que no se envíe por deFault*/ 
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (nombre.value.length==0 && telefono.value.length==0 &&dudas.value.length<1)
    {
        alert("Invalido")
    }
    else{
        if(nombre.value.length<3){
            alert("El nombre no es válido")
        }
        
        if(telefono.value.length<11){
            alert("El telefono no es válido")
        }
        console.log(regexEmail.test(email.value))
        if(!regexEmail.test(email.value))
        {
            alert("El correo electronico es invalido")
        }
        if(dudas.value.length<1){
            alert("¿No tienes dudas?")
        }
    }
    

})