var nomb = document.getElementById("nombre");
var correo = document.getElementById("email");
var numero = document.getElementById("number");
var msj = document.getElementById("mensaje");
var aviso = document.getElementById("aviso");
const contact = document.getElementById("contact");

contact.addEventListener("submit", e =>{
   
    e.preventDefault();
    let mensajesAcotados = "";
    let entrar = false;

    if(numero.value.length>8){
        mensajesAcotados+= "Aviso: El número de teléfono no puede tener más de 8 dígitos <br>";
        entrar = true;
    }
    if(numero.value.length<8){
        mensajesAcotados+= "Aviso: El número de teléfono no puede tener menos de 8 dígitos <br>";
        entrar = true;
    }

    if(entrar){
        aviso.innerHTML = mensajesAcotados;
    }
    else{
        aviso.innerHTML = "Hemos recibido su contacto";
    }

});