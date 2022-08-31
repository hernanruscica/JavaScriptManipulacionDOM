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

//----------------------------------------------------------
//Recorriendo el DOM (Document Object Model)
//----------------------------------------------------------



//Recorriendo los Nodos padres
//----------------------------------------------------------
console.log("Elemento: ", $tituloPrincipal);
console.log("Su Elemento padre es:", $tituloPrincipal.parentElement);
console.log("Su Nodo padre es:", $tituloPrincipal.parentNode);
/*
La diferencia entre los dos: 
parentElement devuelve null si el padre no es un elemento de nodo, esa es la principal diferencia entre parentElement y parentNode. 
En muchos casos, uno puede usar cualquier de los dos, en la mayoria de los casos. Por Ejemplo:
*/
// Devuelve el nodo del documento
console.log(document.documentElement.parentNode); 
// Devuelve null
console.log(document.documentElement.parentElement); 



//Recorriendo los nodos hijos
//----------------------------------------------------------


// Devuelve una lista de nodos. Incluyendo los elementos html, los espacios en blanco (text), y los saltos de linea (\n text tambien)
console.log($lista01.childNodes);

//Para seleccionar el primero y el ultimo nodo hijo
console.log("Primer nodo hijo de la lista:", $lista01.firstChild);
console.log("Ultimo nodo hijo de la lista:", $lista01.lastChild);
//Para seleccionar un elemento en particular, se puede usar un indice, como si fuera un array
console.log("El elemento 3 de los hijos de la lista es :", $lista01.childNodes[3]);



//Recorriendo los Nodos hermanos (mismo nivel)
//----------------------------------------------------------


//para seleccionar el elemento hermano previo y el siguiente de un elemento
console.log("El hermano ANTERIOR  de la lista con id='lista_desordenada' es: ", $lista01.previousElementSibling);
console.log("El hermano SIGUIENTE de la lista con id='lista_desordenada' es: ", $lista01.nextElementSibling);



//----------------------------------------------------------
// EVENT LISTENERS - ESCUCHADORES DE EVENTOS
//----------------------------------------------------------
console.clear();

// element.addEventListener("click", function)

const $buttonTwo = $d.querySelector(".btn02");
function mensaje(){
    console.log("click sobre el boton");
}
$buttonTwo.addEventListener("click", mensaje);


// MOUSEOVER
const $caja03 = $d.querySelector(".caja03");
function cambiarColorFondo(){
    $caja03.style.backgroundColor = "blue";
}
function resetearColorFondo(){
    $caja03.style.backgroundColor = "cyan";
    $caja03.style.color = "black";
}
$caja03.addEventListener("mouseover", cambiarColorFondo);

// MOUSEOUT
$caja03.addEventListener("mouseout", resetearColorFondo)


// EVENT PROPAGATION - PROPAGACION DE EVENTOS
/*----------------------------------------------------------
Fases:  1. captura del evento
        2. Target
        3. Event bubbling

El ultimo parametro del addEventListenner tiene que se booleano e indica la forma de propagacion del evento:
Si es "false", se propaga de andentro hacia afuera. Es decir, desde el elemento donde se produce el evento, hacia los padres.
Si es "true" , lo hace desde la maxima jerarquia hasta el el elemento donde se produjo el evento.
los valores de este ultimo parametro en las distintas capas de deben ser coherentes, si todos trues o todos falses.
Adiccionalmente se puede utilizar el metodo stopPropagation() del evento
*/

window.addEventListener("click", function(e){
    console.log("window");
}, false);
document.addEventListener("click", function(e){
    //en este caso, con false, el e.stopPropagation(); la propagacion del evento va del elemento hacia afuera hasta el document, sin afectar a window
    e.stopPropagation();
    console.log("document");
}, false);
/*
document.querySelector(".parrafo-normal").addEventListener("click", function(e){
    console.log("parrafo-normal");
}, false);
*/
//recuadro
document.querySelector(".recuadro").addEventListener("click", function(e){
    console.log("recuadro");
}, false);

//recuadro__enlaces
document.querySelector(".recuadro__enlaces").addEventListener("click", function(e){    
    e.preventDefault();
    console.log("recuadro__enlaces");
}, true);

//Toma el primer boton y le pone el addEventListener
document.querySelector("button").addEventListener("click", function(e){    
    e.preventDefault();
    console.log(e.target.innerText = "Clickeado!");
}, true);


// EVENT DELEGATION - DELEGACION DE EVENTOS
/*----------------------------------------------------------
Permite a los usuarios agregar un solo escuchador de eventos, a un elemento padre. 
De esta manera todos los elementos hijos, presentes y futuros de ese mismo padre, tendran su propio "eventListenner" automaticamente.
Los cuales los identificamos con su selector.
*/

const $deportes = $d.getElementById("deportes");

$deportes.addEventListener("click", (e) => {
    e.stopPropagation();

    const target = e.target;
    const idClickeado = e.target.getAttribute("id");

    if (target.matches("li") == true ){
        target.style.backgroundColor = "yellow";
    } 
    console.log("Id clickeado: ", idClickeado);
}, false);

// funcion que agrega elementos de lista dinamicamente.
const crearYagregarNuevoElemento = (nombreDeporte) => {
    const $liDeporte = $d.createElement("li");
    $liDeporte.setAttribute("id", nombreDeporte);
    $liDeporte.classList.add("btn");
    $liDeporte.innerHTML = nombreDeporte;
    $deportes.appendChild($liDeporte);
}

crearYagregarNuevoElemento("rugby");




