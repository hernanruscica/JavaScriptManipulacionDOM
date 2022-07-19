
/*
Manejo del DOM con JavaScript
Proyecto numero cuatro:
*/
const $d = document;

console.log("desde Jscript");

//los elementos del DOM: 

const $inputAgregar = $d.getElementById("agregar_tarea_input");
const $botonAgregar = $d.getElementById("agregar_tarea_btn");
const $tareas = $d.getElementById("tareas");

console.log($inputAgregar);
console.log($botonAgregar);
/*
<div id="lista_tareas_contenedor">
    <p class="tarea">Collect Shopping Collect Shopping</p>
    <button id="hecha"><i class="fa-solid fa-check"></i></button>
    <button id="eliminar"><i class="fa-solid fa-trash-can"></i></button>
</div>
*/

const agregarTarea = (textoTarea) => {
    /*console.log(textoTarea);
    $tareas.innerHTML = textoTarea;*/

    const $parrafoTarea = $d.createElement("p");
    $parrafoTarea.classList.add("tarea");
    $parrafoTarea.innerHTML = textoTarea;

    const $botonHecha = $d.createElement("button");
    $botonHecha.setAttribute("id", "hecha");

    const $iconoChequeado = $d.createElement("i");
    $iconoChequeado.classList.add("fa-solid");
    $iconoChequeado.classList.add("fa-check");

    const $botonEliminar = $d.createElement("button");
    $botonEliminar.setAttribute("id", "eliminar");


};

agregarTarea("limpiar el codigo");