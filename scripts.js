/*
Version de pruebas y en español del video de youtube:
https://www.youtube.com/watch?v=5fb2aPlgoys
Titulo: "JavaScript DOM Manipulation – Full Course for Beginners"
Subido por FreeCodeCamp el 7 de Julio de 2022.
*/
console.log("Manipulacion del DOM con JavaScript");

//Seleccionando elementos en javascript
//-----------------------------------------

const $d = document;

//document.getElementById Devuelve un object
const $tituloPrincipal = $d.getElementById("titulo_principal");
console.log("Titulo principal: ", $tituloPrincipal, " es del tipo: ", typeof($tituloPrincipal));

//document.getElementsByClassName  Devuelve una coleccion HTML
const $enlacesRecuadros = $d.getElementsByClassName("recuadro__enlaces__a");
console.log("enlaces de los recuadros: \ndevuelve HTMLCollection", $enlacesRecuadros );
for (i = 0; i < $enlacesRecuadros.length; i++){
    $enlacesRecuadros[i].setAttribute("style", "color: red");
}

//document.getElementsByTagName devuelve una coleccion HTML
const $elementosLista = $d.getElementsByTagName("li");
console.log("Los elementos de lista son: ", $elementosLista);
for (i = 0; i < $elementosLista.length; i++){
    $elementosLista[i].style.color = "cyan";
}

//document.querySelector - Hay que poner si es una clase o una etiqueta (. o #) Selecciona el 1ro
const $recuadroTitulo = $d.querySelector(".recuadro__titulo");
console.log("Titulo de los recuadros: ", $recuadroTitulo, typeof($recuadroTitulo));
$recuadroTitulo.setAttribute("style", "color: red");

//document.querySelectorAll - Hay que poner si es una clase o una etiqueta (. o #) Selecciona a todos - Devuelve HTML collection
const $parrafos = $d.querySelectorAll("p");
console.log("parrafos: ", $parrafos);
for (i = 0; i < $parrafos.length; i++){
    $parrafos[i].setAttribute("style", "color: green");
}


//cambiando los estilos de los elementos seleccionados: Con el metodo setAttribute() y con el atributo style p.e.: $elemento.style.color = "red"
//-----------------------------------------------------------------------------------------------------------------------------------------------
$recuadroTitulo.style.fontSize = "3em";
$tituloPrincipal.setAttribute("style", "font-size: 2.5em");


//diferencias entre innerText, textContent y innerHTML
//----------------------------------------------------------
console.log("diferencias, ejemplo con el titulo: ", $tituloPrincipal);
console.log("innerText: ", $tituloPrincipal.innerText);
console.log("textContent: ", $tituloPrincipal.textContent);
console.log("innerHTML: ", $tituloPrincipal.innerHTML);


//Creando elementos HTML 
//----------------------------------------------------------
const $lista01 = $d.getElementById("lista01");
//console.log($listaOrdenada01);
const $elementoLista = $d.createElement("li");
$elementoLista.innerHTML = "texto para el enlace agregado dinamicamente";


//agregando elemento creado a un elemento existente
//----------------------------------------------------------
$lista01.appendChild($elementoLista);



//Modificando atributos y clases
//----------------------------------------------------------
$elementoLista.setAttribute("id", "nueva_lista");

$tituloPrincipal.removeAttribute("id");

valorAtributoId = $elementoLista.getAttribute("id");
$tituloPrincipal.setAttribute("id", valorAtributoId);
console.log("valor del id de titulo principal: ", $tituloPrincipal.id);

$tituloPrincipal.classList.add("verde");
$tituloPrincipal.classList.add("violeta");
//tengo una lista de clases de ese elemento
console.log("Primera clase del elemento", $tituloPrincipal.classList[0]);
clasesTituloPrincipal_ListaDOMToken = $tituloPrincipal.classList;

//Una lista DOM Token acepta el forEach() y de paso muestro el indice y la clase
clasesTituloPrincipal_ListaDOMToken.forEach((element, indice) => {
    console.log("Clase ", indice, " : ", element);
});

let nombreClaseEliminar = "violeta";
let contieneClaseVioleta =  $tituloPrincipal.classList.contains(nombreClaseEliminar);
if (contieneClaseVioleta) {
    $tituloPrincipal.classList.remove(nombreClaseEliminar);
    console.log("Clase '", nombreClaseEliminar,"'  eliminada")
}else {
    console.log("no contiene la clase '", nombreClaseEliminar,"'");
}


