console.log("desde js");


/*
elementos del dom
*/

let idUsuario = "usuario";
let idContrasenia = "contraseña";
let idBtnEnviar = "enviar";

$d = document;
const $usuario = $d.getElementById(idUsuario);
const $contrasenia = $d.getElementById(idContrasenia);
const $BtnEnviar = $d.getElementById(idBtnEnviar);

let valorUsuario = "";
let valorContrasenia = "";



/*meto en el local storage para pruebas*/
const usuariosPrueba = [
    {
        "id": "0",
        "usuario": "cesar",
        "contrasenia": "1234",
        "colorFondo": "azul",
        "colorLetra": "blanco",
        "tipografia": "verdana"
    },
    {
        "id": "1",
        "usuario": "ezequiel",
        "contrasenia": "340",
        "colorFondo": "negro",
        "colorLetra": "blanco",
        "tipografia": "arial"
    },
    {
        "id": "2",
        "usuario": "carlos",
        "contrasenia": "989sde",
        "colorFondo": "celeste",
        "colorLetra": "blanco",
        "tipografia": "sans-serif"
    }
]
localStorage.setItem("data", JSON.stringify(usuariosPrueba));
/*meto en el local storage para pruebas*/

//array de objetos, cada objeto es un usuario
let usuarios = JSON.parse(localStorage.getItem("data")) || [];

//console.log(usuarios['0']['usuario']);


//se le pasa el nombre del usuario y devuelve el usuario encontrado en el localstorage o null si no lo encuentra
const buscarUsuarioLocalStorage = (usuarioNombre) => {
    let usuarioBuscado = usuarios.filter(usuario => usuario.usuario == usuarioNombre);
    return (usuarioBuscado.length != 0) ? usuarioBuscado[0] : null;
}
//console.log(buscarUsuarioLocalStorage("cesar"));


const validarIngreso = (usuario, contrasenia) => {
    let esValido = false;
    let usuarioEncontrado = buscarUsuarioLocalStorage(usuario)
    if (usuarioEncontrado){
        console.log("usuario encontrado", usuarioEncontrado['usuario']);
        if (usuarioEncontrado['contrasenia'] == contrasenia){
            esValido = true;
        }
    }else{
        console.log("usuario no encontrado")
    }
    //console.log(esValido);    
    return esValido;
}


/*
manejadores de eventos
*/

$BtnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    valorUsuario = $usuario.value || "";
    valorContrasenia = $contrasenia.value || "";
    //console.log($usuario.value, $contrasenia.value);
    let usuarioContraseniaOK = validarIngreso(valorUsuario, valorContrasenia);
    console.log(usuarioContraseniaOK ? "puede ingresar" : "Error en la contraseña");
})