/*******************************
Local Storage con JavaScript
Metodos:  setItem, getItem, removeItem, clear, key, length
 *******************************/



/*******************************
Variables y constantes globales
 *******************************/
const series = [];

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
    let nuevoId = series.length;

    series.push({
        id: nuevoId, 
        titulo: tituloSerie, 
        descripcion: descripcionSerie, 
        cantidadCapitulos: cantidadCapitulosSerie, 
        capituloActual: 1,
        imagen: "imagen.png"});

    //console.log(idTitulo, idDescripcion, idCantidadCapitulos, imagen, idContenedor);
    console.log(series);
};
//agregarSerie("nueva_serie_titulo", "nueva_serie_descripcion", "nueva_serie_cantidad_capitulos", "imagenPasada.jpg", "nueva_serie");


// muestra el modal de ingreso de nueva serie. recibe: el id del modal
const mostrarOcultarModalNuevaSerie = (idModal) => {
    $modalNuevaSerie = $d.getElementById(idModal);
    $modalNuevaSerie.classList.toggle("oculto");
    const $imputsModal = $modalNuevaSerie.querySelectorAll("input");
    $imputsModal.forEach((elemento) => {
        elemento.value = "";
    })
    console.log(idModal, $modalNuevaSerie);
}

//inserta en el local Storage, todas las series que esten en el array de objetos serie
const agregarArraySeriesLocalStorage = (series) => {
    let miStorage = window.localStorage;
    miStorage.clear();
    series.forEach((elemento, indice) => {
        miStorage.setItem(`serie_${indice}`, JSON.stringify(elemento));
    });    
}

//A prueba... pasar lo del local storage al array
const agregarLocalStorageArraySeries = (series) => {
    let miStorage = window.localStorage;
    let longitudMiLocalStorage = miStorage.length;
    /*miStorage.clear();
    series.forEach((elemento, indice) => {
        miStorage.setItem(`serie_${indice}`, JSON.stringify(elemento));
    });    
    */
   for (let i = 0; i < longitudMiLocalStorage; i++){
        let serie = miStorage.getItem(`serie_${i}`);
        console.log(serie);
   }
   //console.log(miStorage.length);
}

agregarLocalStorageArraySeries(series);


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
                            <button id="btn_menos_serie_${elemento.id}" class="btn">-</button>
                            <label>${elemento.capituloActual}</label>
                            <button id="btn_mas_serie_${elemento.id}" class="btn">+</button>
                            <br>
                            <button class="btn rojo">Eliminar Serie</button>
                        </div>`;
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
            console.log("boton de agregar en el formulario nueva serie");
            agregarSerie("nueva_serie_titulo", "nueva_serie_descripcion", "nueva_serie_cantidad_capitulos", "imagenPasada.jpg", "nueva_serie");  
            agregarArraySeriesLocalStorage(series);    
            mostrarOcultarModalNuevaSerie("modal_nueva_serie");      
            mostrarTodasLasSeries(series, "series_contenedor");
        }
        if (evento.target.id == "nueva_serie"){
            console.log("boton de nueva serie en el menu");
            mostrarOcultarModalNuevaSerie("modal_nueva_serie");
            
        }              
    }
     
 })