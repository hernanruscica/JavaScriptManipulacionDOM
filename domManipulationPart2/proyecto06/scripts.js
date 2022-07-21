console.log("desde la consola");

const datosVisionadoSeries = [{
    id: 0,
    nombre : "nombre de la serie",
    datosTemporada: "Datos de la temporada",
    cantidadCapitulos: 24,
    ultimoCapituloVisto: 1
}
];

const ejemploSerieVisionada = {
    id: 1,
    nombre : "shigeki",
    datosTemporada: "primer temporada",
    cantidadCapitulos: 24,
    ultimoCapituloVisto: 8
};

//agrega un nuevo objeto al array de "datosVisionadoSerie"
const agregarVisionadoSerie = (datosVisionadoSeriesObjeto) => {
    datosVisionadoSeries.push(datosVisionadoSeriesObjeto);
}
agregarVisionadoSerie(ejemploSerieVisionada);

//muestra por consola los datos de visionado de todas las series
const mostrarVisionadoSeries = (datosVisionadoSeriesObjeto) => {
    console.log(datosVisionadoSeriesObjeto);
}
mostrarVisionadoSeries(datosVisionadoSeries);

/*
<div class="serie_contenedor">
    <h2 class="titulo_serie">Titulo serie</h2>
    <h3 class="nombre_temporada">nombre temporada</h3>
    <div class="capitulos_slider">
        <label for="capitulos">Capitulos: </label>
        <div class="capitulos" name="capitulos" >
            <a href="#" class="capitulo capitulos_flecha_atras">«</a>
            <a href="·" class="capitulo capitulo_numero">1</a>
            <a href="·" class="capitulo capitulo_numero">2</a>       
            <a href="·" class="capitulo capitulo_numero capitulo_actual">3</a>     
            <a href="·" class="capitulo capitulo_numero">4</a>
            <a href="·" class="capitulo capitulo_numero">5</a>   
            <a href="#" class="capitulo capitulos_flecha_adelante">»</a>                         
        </div>
    </div>
    <div class="progreso">
        <label for="file">Progreso:</label>
        <progress id="file" value="32" max="100" class="progress_bar"> 32% </progress>   
    </div>
</div>

############!!!!!!!!!!########################!!!!!!!!!!!!!!!!!!###################################
Abajo la funcion que arma todo lo de arriba, recibe: id del contenedor, el objeto 'serie visionada'.                                             
*/
const crearYAgregarNuevaSerie = (serieVisionadaObjeto, idContenedor) => {

    //creo el fragmento de DOM
    const $fragment = document.createDocumentFragment();

    //creo el div con la clase serie_contenedor
    const $serieContenedor = document.createElement("div");
    $serieContenedor.classList.add("serie_contenedor");

    //creo los titulos h2 y h3
    const $tituloSerie = document.createElement("h2");
    $tituloSerie.classList.add("titulo_serie");
    $tituloSerie.innerHTML = serieVisionadaObjeto["nombre"];
    const $nombreTemporada = document.createElement("h3");
    $nombreTemporada.classList.add("nombre_temporada");
    $nombreTemporada.innerHTML = serieVisionadaObjeto["datosTemporada"];

    //creo el div capitulos_slider

    //console.log(serieVisionadaObjeto, "el id es : ", idContenedor);
    $serieContenedor.appendChild($tituloSerie);
    $serieContenedor.appendChild($nombreTemporada);
    $fragment.appendChild($serieContenedor);

    console.log($fragment);
}
crearYAgregarNuevaSerie(ejemploSerieVisionada,"contenedor");