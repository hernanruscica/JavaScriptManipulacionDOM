
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

let cantidadTareas = 2;

/*
<div class = "lista_tareas_contenedor" id = "tarea_numero_1">
    <p class="tarea">Collect Shopping Collect Shopping</p>
    <button id="hecha"><i class="fa-solid fa-check"></i></button>
    <button id="eliminar"><i class="fa-solid fa-trash-can"></i></button>
</div> 
*/
const agregarTarea = (textoTarea, tareaNumero) => {
    
    //lista_tareas_contenedor
    const $divContenedorTareas = $d.createElement("div");    
    $divContenedorTareas.classList.add("lista_tareas_contenedor");
    $divContenedorTareas.setAttribute("id", "tarea_numero_" + tareaNumero);

    //parrafo
    const $parrafoTarea = $d.createElement("p");
    $parrafoTarea.classList.add("tarea");
    $parrafoTarea.innerHTML = textoTarea;

    //boton de tarea hecha
    const $botonHecha = $d.createElement("button");
    $botonHecha.setAttribute("id", "hecha");

    //icono de tarea hecha, el tilde o check
    const $iconoChequeado = $d.createElement("i");
    $iconoChequeado.classList.add("fa-solid");
    $iconoChequeado.classList.add("fa-check");

    //Boton de eliminar tarea
    const $botonEliminar = $d.createElement("button");
    $botonEliminar.setAttribute("id", "eliminar");

     //icono de eliminar 1tarea, el tachito de basura
     const $iconoEliminar = $d.createElement("i");
     $iconoEliminar.classList.add("fa-solid");
     $iconoEliminar.classList.add("fa-trash-can");

     //agrego los hijos de los botones, los iconos
     $botonHecha.appendChild($iconoChequeado);
     $botonEliminar.appendChild($iconoEliminar);
     
     //agrego los hijos del div contenedor
     $divContenedorTareas.appendChild($parrafoTarea);
     $divContenedorTareas.appendChild($botonHecha);
     $divContenedorTareas.appendChild($botonEliminar);

     //agrego al div tareas, originalmente en el HTML
     $tareas.appendChild($divContenedorTareas);
};
agregarTarea("primer tarea", 1);
agregarTarea("otra tarea", 2);


const eliminarTarea = (idTarea) => {
    $d.getElementById(idTarea).outerHTML = "";
}
//eliminarTarea("tarea_numero_1");

//text-decoration-line: line-through;
const tacharTarea = (idTarea) => {
    $parrafoTarea = $d.getElementById(idTarea).firstElementChild;
    console.log($parrafoTarea);
    $parrafoTarea.classList.add("tachada");
}







