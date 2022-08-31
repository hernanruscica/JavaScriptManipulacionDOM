
//console.log("Enlazado jscript");

$d = document;

window.addEventListener("DOMContentLoaded", function(){
    cargarFrase();
})
//Elementos del DOM
const $contenedorPrincipal = $d.querySelector(".contenido_principal") //elemento padre

//elementos hijos
const $btnNuevaFrase = $d.getElementById("nueva_frase");
const $frase = $d.querySelector(".frase");
const $persona = $d.querySelector(".persona");
/*
console.log($btnNuevaFrase);
console.log($frase);
console.log($persona);
*/

const frases = [
                {
                    persona: "mahatma gandhi",
                    frase: "If you want to change the world, change yourself."
                },
                {
                    persona: "Albert Einstein",
                    frase: "Everything should be simplified as much as possible, but not more."
                },
                {
                    persona: "Aristóteles",
                    frase: "Friendship is a soul that lives in two bodies; a heart that dwells in two souls."
                },
                {
                    persona: "Benjamin Franklin",
                    frase: "Happiness is not produced by big windfalls, which happen rarely, but by small advantages that happen every day."
                },
                {
                    persona: "Abraham Lincoln",
                    frase: "I am not destined to win, but I am forced to be honest. I am not obligated to succeed, but I am obligated to live up to the light that I have."
                },
                {
                    persona: "Steve Jobs",
                    frase: "Your time is limited, so don't waste it living someone else's life."
                },
                {
                    persona: "Oprah Winfrey",
                    frase: "The greatest discovery of all time is that a person can transform their future just by changing their attitude."
                },
                {
                    persona: "Confucio",
                    frase: "If you already know what you have to do and you don't do it, then you are worse off than before."
                },
                {
                    persona: "Martin Luther King",
                    frase: "It's always the right time to do what's right."
                },
                {
                    persona: "Lao-Tse",
                    frase: "A huge tree grows from a tender sapling. A path of a thousand steps begins with a single step."
                }
]
/* acceso a las frases
frases.forEach(element => {
    let fraseActual = element['frase'];
    let personaActual = element['persona'];
    console.log(`Frase: ${fraseActual} Persona: ${personaActual}`);
});
*/

const cargarFrase = () => {
    let valorMinimo = 0, valorMaximo = 9;
    let numeroAzar = Math.floor((Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo);;
    $frase.innerHTML = frases[numeroAzar]['frase'];
    $persona.innerHTML = frases[numeroAzar]['persona'];
}

$contenedorPrincipal.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("button") == true){
        console.log("es el boton");
        cargarFrase();
    }
});
