
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
const $mensaje = $d.getElementById("mensaje");
const $modal = $d.querySelector(".modal");

console.log($inputAgregar);
console.log($botonAgregar);

let cantidadTareas = 0;

$mensaje.innerHTML = "Ingrese una nueva tarea.";

$botonAgregar.addEventListener("click", () => {
    console.log("agregar tarea boton");
    agregarTarea($inputAgregar.value, cantidadTareas + 1);
});

$inputAgregar.addEventListener("keyup", (e) => {
    //console.log(e.key);
    if (e.key == "Enter"){
        //console.log("agregar tarea por enter en input");
        agregarTarea($inputAgregar.value, cantidadTareas + 1);
    }
});


/*
<div class = "lista_tareas_contenedor" id = "tarea_numero_1">
    <p class="tarea">Collect Shopping Collect Shopping</p>
    <button class = "hecha"  onclick="tacharTarea('tarea_numero_1')"><i class="fa-solid fa-check"></i></button>
    <button class = "eliminar" onclick="eliminarTarea('tarea_numero_1')"><i class="fa-solid fa-trash-can"></i></button>
</div>  
*/
const agregarTarea = (textoTarea, tareaNumero) => {
    
    if (textoTarea == ""){
        $mensaje.innerHTML = "El campo [Tarea] NO puede estar vacio.";  
        setTimeout(() => {
            $mensaje.innerHTML = "Ingrese una nueva tarea.";  
        },1000); 
        return;
    }
    $inputAgregar.value = "";

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
    $botonHecha.classList.add("hecha");
    $botonHecha.setAttribute("onclick", `tacharTarea("tarea_numero_${tareaNumero}")`);

    //icono de tarea hecha, el tilde o check
    const $iconoChequeado = $d.createElement("i");
    $iconoChequeado.classList.add("fa-solid");
    $iconoChequeado.classList.add("fa-check");

    //Boton de eliminar tarea
    const $botonEliminar = $d.createElement("button");    
    $botonEliminar.classList.add("eliminar");
    $botonEliminar.setAttribute("onclick", `eliminarTarea("tarea_numero_${tareaNumero}")`); 
    //$botonEliminar.setAttribute("onclick", `generarYmostrarModal("tarea_numero_${tareaNumero}")`); 

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

     cantidadTareas += 1;
};
//agregarTarea("primer tarea", 1);
//agregarTarea("otra tarea", 2);


const eliminarTarea = (idTarea) => {
    //$modal.classList.remove("oculto");
    $d.getElementById(idTarea).outerHTML = "";
}
//eliminarTarea("tarea_numero_1");

const tacharTarea = (idTarea) => {
    $parrafoTarea = $d.getElementById(idTarea).firstElementChild;
    console.log($parrafoTarea);
    $parrafoTarea.classList.add("tachada");
}

const generarYmostrarModal = (idTarea) => {
    let modalText = `<div class="modal">
                        <p>Mensaje del modal</p>
                        <div id="botones_confirmacion"> 
                            <button onclick = "eliminarTarea("tarea_numero_${idTarea}")">si</button>
                            <button onclick = "ocultarModal()">no</button>
                        </div>        
                    </div>`;
    
    //$d.body.appendChild(modalText);
}


const ocultarModal = () => {
    $modal.classList.add("oculto");
}





