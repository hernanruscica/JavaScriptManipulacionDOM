
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

 
console.log($inputAgregar);
console.log($botonAgregar);

let cantidadTareas = 0, CANTIDAD_TAREAS_MAXIMAS = 10;
let numeroTareaId = 0;
//texto del mensaje por default
$mensaje.innerHTML = "Insert a task, then thick it or deleted it";

$botonAgregar.addEventListener("click", () => {
    //console.log("agregar tarea boton");
    agregarTarea($inputAgregar.value, numeroTareaId);
});

$inputAgregar.addEventListener("keyup", (e) => {
    //console.log(e.key);
    if (e.key == "Enter"){
        //console.log("agregar tarea por enter en input");
        agregarTarea($inputAgregar.value, numeroTareaId);
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
        mostrarMensaje("El campo [Tarea] NO puede estar vacio.", 2000);
        return;
    }
    if (cantidadTareas >= CANTIDAD_TAREAS_MAXIMAS){
        mostrarMensaje(`Limite de tareas maximas alcanzado = ${CANTIDAD_TAREAS_MAXIMAS}`, 2000);
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
    $parrafoTarea.setAttribute("onclick", `tacharTarea("tarea_numero_${tareaNumero}")`);

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
    //$botonEliminar.setAttribute("onclick", `mostrar("tarea_numero_${tareaNumero}")`); 
    $botonEliminar.setAttribute("onclick", `generarYmostrarModal("tarea_numero_${tareaNumero}")`); 

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
     numeroTareaId += 1;
};
//agregarTarea("primer tarea", 1);
//agregarTarea("otra tarea", 2);


const eliminarTarea = (idTarea) => {
    ocultarModal();    
    const $tareaAeliminar = $d.getElementById(idTarea);    
    $tareaAeliminar.remove();
    cantidadTareas -= 1;
    mostrarMensaje("SE ELIMINO LA TAREA", 2000);
    //console.log("eliminando tarea ", $tareaAeliminar);
    
}
//eliminarTarea("tarea_numero_1");

const tacharTarea = (idTarea) => {
    $parrafoTarea = $d.getElementById(idTarea).firstElementChild;
    //console.log($parrafoTarea);
    $parrafoTarea.classList.toggle("tachada");
}

const generarYmostrarModal = (idTarea) => {
    /*
    <div class="modal">
        <p>Mensaje del modal</p>
        <div id="botones_confirmacion"> 
            <button onclick = "eliminarTarea('tarea_numero_1')">si</button>
            <button onclick = "ocultarModal()">no</button>
        </div>        
    </div>
    */

    $d.querySelector(".bloqueo_pantalla").setAttribute("style", "display:block;");
   //Si ya existe un modal, lo elimino para tener uno nuevo con el id de tarea correcto
   const $modalBuscado = $d.querySelector(".modal");
    if ( $modalBuscado != null){ 
        $modalBuscado.remove();        
    } 
    //Si no existe un modal, lo creo y lo muestro
    else {
        //consigo el texto de la tarea
        let textoTarea = $d.getElementById(idTarea).firstElementChild.innerHTML;
        //console.log("este es el mensaje: ", textoTarea);

        //creo el modal que es un div
        const $modal = $d.createElement("div");
        $modal.classList.add("modal");

        //creo el parrafo del mensaje del modal
        const $mensajeModal = $d.createElement("p");
        $mensajeModal.innerHTML = `Are you sure you want to delete the following task?: <br> "${textoTarea}"`;

        //creo el contenedor de los botones
        const $botonesContenedor = $d.createElement("div");
        $botonesContenedor.setAttribute("id", "botones_confirmacion");

        //creo los botones de confirmacion y le asigno las acciones del evento onclick
        const $botonSi = $d.createElement("button");
        $botonSi.setAttribute("onclick", `eliminarTarea('${idTarea}')`);
        $botonSi.innerHTML = "YES";

        const $botonNo = $d.createElement("button");
        $botonNo.setAttribute("onclick", "ocultarModal();");
        $botonNo.innerHTML = "NO";

        $botonesContenedor.appendChild($botonSi);
        $botonesContenedor.appendChild($botonNo);

        $modal.appendChild($mensajeModal);
        $modal.appendChild($botonesContenedor);

        $d.body.appendChild($modal);
        //$d.body.appendChild(modalText);
        
    }
}


const ocultarModal = () => {
    const $modal = $d.querySelector(".modal");
    //console.log($modal);
    $modal.remove();
    $d.querySelector(".bloqueo_pantalla").setAttribute("style", "display:none;");
}
//mostrarMensaje("SE ELIMINO LA TAREA", 2000);
const mostrarMensaje = (mensajeAmostrar, tiempoAmostrar) => {
    let mensajeAnterior = $mensaje.innerHTML;
    $mensaje.innerHTML = mensajeAmostrar;
    setInterval(() => {
        $mensaje.innerHTML =  mensajeAnterior;
    }, tiempoAmostrar);
}




