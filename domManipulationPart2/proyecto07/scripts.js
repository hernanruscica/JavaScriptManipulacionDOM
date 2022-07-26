/*******************************
Local Storage con JavaScript
Metodos:  setItem, getItem, removeItem, clear, key, length
 *******************************/



/*******************************
Variables y constantes globales
 *******************************/
let series = JSON.parse(localStorage.getItem("data")) || [];
let contadorSeries = 0;

/* Model de Objeto serie
{
    id: 0,
    titulo: "Título de la serie",
    descripcion: "Descripción de la serie",
    cantidadCapitulos: 24,
    capituloActual: 1,
    imagen: "imagen.png"    
}*/

$d = document;

/**********************************
 Funciones utilitarias
 ************************************/

//agrega una nueva serie al array de series. recibe: los ids de titulo, descripcion, cantidad de capitulos del formulario de nueva serie
const agregarSerie = (idTitulo, idDescripcion, idCantidadCapitulos, imagen, idContenedor) => {

    let tituloSerie = $d.getElementById(idTitulo).value;
    let descripcionSerie = $d.getElementById(idDescripcion).value;
    let cantidadCapitulosSerie = parseInt($d.getElementById(idCantidadCapitulos).value);
    let nuevoId = contadorSeries;

    series.push({
        id: nuevoId, 
        titulo: tituloSerie, 
        descripcion: descripcionSerie, 
        cantidadCapitulos: cantidadCapitulosSerie, 
        capituloActual: 0,
        imagen: "imagen.png"});    
    contadorSeries += 1;
    localStorage.setItem("data", JSON.stringify(series));
}
//agregarSerie("nueva_serie_titulo", "nueva_serie_descripcion", "nueva_serie_cantidad_capitulos", "imagenPasada.jpg", "nueva_serie");


const eliminarSerie = (idEliminar) => {
    console.log("id a eliminar: ", idEliminar);
    let nuevoArraySeries = series.filter(elemento => elemento.id != idEliminar);
    series = nuevoArraySeries;
    localStorage.setItem("data", JSON.stringify(series));
    //console.log(series);
}
//eliminarSerie(0);

const aumentarCapitulo = (id) => {
    series.forEach((elemento) => {
        if (elemento.id == id){
            if (elemento.capituloActual < elemento.cantidadCapitulos){elemento.capituloActual += 1;}            
        }
    })
    localStorage.setItem("data", JSON.stringify(series));
    //console.log(id);
}

const disminuirCapitulo = (id) => {
    series.forEach((elemento) => {
        if (elemento.id == id){
            if (elemento.capituloActual > 0){elemento.capituloActual -= 1;}
        }
    })
    localStorage.setItem("data", JSON.stringify(series));
    //console.log(id);
}


// muestra el modal de ingreso de nueva serie. recibe: el id del modal
const mostrarOcultarModalNuevaSerie = (idModal) => {
    $modalNuevaSerie = $d.getElementById(idModal);
    $modalNuevaSerie.classList.toggle("oculto");
    const $imputsModal = $modalNuevaSerie.querySelectorAll("input");
    $imputsModal.forEach((elemento) => {
        elemento.value = "";
    });
    //console.log(idModal, $modalNuevaSerie);
}
/*
 <!--plantilla para la vista de una serie
<div id="serie_1" class="serie">
    <h3 id="titulo_serie_1" class="titulo_serie">titulo serie</h3>
    <p id="descripcion_serie_1" class="descripcion_serie">Descripcion serie</p>
    <button id="btn_menos_serie_1" class="btn">-</button>
    <label>1</label>
    <button id="btn_mas_serie_1" class="btn">+</button>
    <br>
    <button class="btn rojo">Eliminar Serie</button>
</div>
-->
*/
//mostrar todos las series que estan el array de objetos serie. recibe: idContenedor y el array de series
const mostrarTodasLasSeries = (series, idContenedor) => {
    const $contenedorSeries = $d.getElementById(idContenedor);
    $contenedorSeries.innerHTML = "";
    //console.log($contenedorSeries);
    series.forEach(elemento => {        
        //console.log(elemento.titulo, elemento.descripcion);      
        let serieHTML = `<div id="serie_${elemento.id}" class="serie">
                                <h3 id="titulo_serie_${elemento.id}" class="titulo_serie">${elemento.titulo}</h3>
                                <p id="descripcion_serie_${elemento.id}" class="descripcion_serie">${elemento.descripcion}</p>       
                                <div class="avance_capitulos">
                                    <div class="progreso">
                                        <p id="capitulos_serie_1" class="capitulos_serie">
                                            Capitulo ${elemento.capituloActual} de ${elemento.cantidadCapitulos}
                                        </p>            
                                        <progress id = "progreso_barra_${elemento.id}" class="progreso_barra" max = "${elemento.cantidadCapitulos}" value = "${elemento.capituloActual}"></progress>
                                    </div>
                                    <div class="botonera">
                                        <button id="btn_menos_serie_${elemento.id}" class="btn btn_menos">-</button>
                                        <button id="btn_mas_serie_${elemento.id}" class="btn btn_mas">+</button>
                                    </div>        
                                </div>         
                                <button class="btn btn_eliminar rojo" id="btn_eliminar_${elemento.id}">X</button>
                            </div>`

        
        $contenedorSeries.innerHTML += serieHTML;
    });
}
mostrarTodasLasSeries(series, "series_contenedor");

/**************************************
 Manejadores de eventos
 *************************************/

 $d.addEventListener("click", (evento) => {
    //console.log("click en el documento", evento.target);
    if (evento.target.matches("button")){
        evento.preventDefault();
        if (evento.target.id == "nueva_serie_btn_agregar"){
            //console.log("boton de agregar en el formulario nueva serie");
            agregarSerie("nueva_serie_titulo", "nueva_serie_descripcion", "nueva_serie_cantidad_capitulos", "imagenPasada.jpg", "nueva_serie");      
            mostrarOcultarModalNuevaSerie("modal_nueva_serie");     
            mostrarTodasLasSeries(series, "series_contenedor");
        }
        //nueva_serie_btn_cerrar
        if (evento.target.id == "nueva_serie_btn_cerrar"){
            //console.log("boton de cerrar en el formulario nueva serie");
            mostrarOcultarModalNuevaSerie("modal_nueva_serie"); 
        }

        if (evento.target.id == "nueva_serie"){
            //console.log("boton de nueva serie en el menu");
            mostrarOcultarModalNuevaSerie("modal_nueva_serie");            
        }              
        if (evento.target.id.includes("btn_eliminar")){
            let idNumeroActual = evento.target.id.slice(-1);
            eliminarSerie(parseInt(idNumeroActual));
            mostrarTodasLasSeries(series, "series_contenedor");
            //console.log("Boton de eliminar");
        }
        if (evento.target.id.includes("btn_menos_serie")){
            let idNumeroActual = evento.target.id.slice(-1);
            disminuirCapitulo(parseInt(idNumeroActual));
            mostrarTodasLasSeries(series, "series_contenedor");
            //console.log("Boton de menos serie");
        }
        if (evento.target.id.includes("btn_mas_serie")){
            let idNumeroActual = evento.target.id.slice(-1);
            aumentarCapitulo(parseInt(idNumeroActual));
            mostrarTodasLasSeries(series, "series_contenedor");
            //console.log("Boton de mas serie");
        }
    }
     
 })

 $d.addEventListener("DOMContentLoaded", (e) => {
    console.log("domcontentloaded");
    mostrarTodasLasSeries(series, "series_contenedor");
 })