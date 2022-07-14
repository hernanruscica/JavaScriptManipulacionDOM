/*
Temas para ver:
 getElementById()
 addEventListenner
 e.target
 estilos de css a traves de javascript
 Animacion en css
*/

console.log("conectado con CSS");

//Elementos del DOM a seleccionar, ademas del document
//abrir_btn     cerrar_btn      contenedor_modal
const $d = document;
const $botonAbrir = $d.getElementById("abrir_btn");
const $botonCerrar = $d.getElementById("cerrar_btn");
const $contenedorModal = $d.getElementById("contenedor_modal");
//console.log($botonAbrir, $botonCerrar, $contenedorModal);

// eventos
$botonAbrir.addEventListener("click", () => {
    $contenedorModal.style.display = "block";
});

$botonCerrar.addEventListener("click", () => {
    $contenedorModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == $contenedorModal){
    $contenedorModal.style.display = "none";
    }
})