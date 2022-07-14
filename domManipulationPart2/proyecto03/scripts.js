
/*
Manejo del DOM con JavaScript
Proyecto numero tres: Accordions

Temas centrales del proyecto:
get elements by class name
manejador de eventos
ciclos for..
this
el toggle de las classList
*/


const $accordion = document.getElementsByClassName('contenedor_contenido');


for( i = 0; i < $accordion.length; i++) {

    $accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

};