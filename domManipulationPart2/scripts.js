/*

Frases de Abraham lincoln en español: https://us.as.com/us/2021/02/11/actualidad/1613080170_462613.html
*/

console.log("Enlazado jscript");

$d = document;

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
                    frase: "Si quieres cambiar al mundo, cámbiate a ti mismo."
                },
                {
                    persona: "Albert Einstein",
                    frase: "Todo debe simplificarse lo máximo posible, pero no más."
                },
                {
                    persona: "Aristóteles",
                    frase: "La amistad es un alma que habita en dos cuerpos; un corazón que habita en dos almas."
                },
                {
                    persona: "Benjamin Franklin",
                    frase: "La felicidad no se produce por grandes golpes de fortuna, que ocurren raras veces, sino por pequeñas ventajas que ocurren todos los días."
                },
                {
                    persona: "Abraham Lincoln",
                    frase: "No estoy destinado a ganar, pero estoy obligado a ser sincero. No estoy obligado a tener éxito, pero estoy obligado a vivir a la altura de la luz que tengo."
                },
                {
                    persona: "Steve Jobs",
                    frase: "Tu tiempo es limitado, así que no lo malgastes viviendo la vida de otra persona."
                },
                {
                    persona: "Oprah Winfrey",
                    frase: "El mejor descubrimiento de todos los tiempos es que una persona puede transformar su futuro solo con cambiar su actitud"
                },
                {
                    persona: "Confucio",
                    frase: "Si ya sabes lo que tienes que hacer y no lo haces entonces estás peor que antes"
                },
                {
                    persona: "Martin Luther King",
                    frase: "Siempre es el momento apropiado para hacer lo que es correcto"
                },
                {
                    persona: "Lao-Tse",
                    frase: "Un árbol enorme crece de un tierno retoño. Un camino de mil pasos comienza en un solo paso"
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
