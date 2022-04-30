var username = document.getElementById("user");
var correo = document.getElementById("email");
var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");
var aviso = document.getElementById("aviso");
const registro = document.getElementById("registro");

registro.addEventListener("submit", e =>{
   
    e.preventDefault();
    let mensajesAcotados = "";
    let entrar = false;

    if(pass1.value!==pass2.value){
        mensajesAcotados+= "Aviso: Las contraseñas deben ser iguales <br>";
        entrar = true;
    }

    if(entrar){
        aviso.innerHTML = mensajesAcotados;
    }
    else{
        aviso.innerHTML = "Registro Completado";
    }

});