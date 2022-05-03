var username = document.getElementById("user");
var correo = document.getElementById("email");
var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");
var aviso = document.getElementById("aviso1");
var aviso = document.getElementById("aviso2");
const registro = document.getElementById("registro");


registro.addEventListener("submit", e =>{
   
    e.preventDefault();
    let mensajesAcotados = "";
    let entrar = false;

    if(pass1.value!==pass2.value){
        mensajesAcotados+= "Las contraseñas deben ser iguales <br>";
        entrar = true;
    }

    if(pass1.value.length<8){
        mensajesAcotados+= "La contraseña no puede tener menos de 8 caracteres <br>";
        entrar = true;
    }

    if(entrar){
        aviso.innerHTML = mensajesAcotados;
    }
    else{
        aviso.innerHTML = "Registro Completado";
    }

});