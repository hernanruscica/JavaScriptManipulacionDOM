
/*
Manejo del DOM con JavaScript
Proyecto numero cuatro:
*/
const $d = document;

console.log("desde Jscript");

//los elementos del DOM: botones

const $botonIniciar = $d.getElementById("empezarPararBtn");
const $botonParar = $d.getElementById("resetearBtn");
const $pantallaTimer = $d.getElementById("timer");

let segundosIntervalo;
let contador = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

function cronometro(){
    contador++
    segundos = contador % 60;
    minutos = Math.trunc(contador / 60);
    horas = Math.trunc(contador / 3600);

    let segundosStr = "";
    let minutosStr = "";
    let horasStr = "";

    if (segundos <= 9){ segundosStr = "0" + segundos; }
    else {segundosStr = segundos};
    if (minutos <= 9){ minutosStr = "0" + minutos; }
    else {minutosStr = minutos};
    if (horas <= 9){ horasStr = "0" + horas; }
    else {horasStr = horas};

    //console.clear();   
    //console.log(`${horasStr} : ${minutosStr} : ${segundosStr}`);
    $pantallaTimer.innerHTML = "";
    $pantallaTimer.innerHTML = `${horasStr}:${minutosStr}:${segundosStr}`;
}

$botonIniciar.addEventListener("click", () => {
    console.log("boton de iniciar");      
    cambiarClase();
    iniciarCronometro();
    
});

$botonParar.addEventListener("click", () => {
    console.log("boton de parar");
    pararCronometro();
});

const cambiarClase = () => {
    $elemento = $botonIniciar.firstElementChild;
    let clase01 = "fa-play";
    let clase02 = "fa-pause";
    let idEstiloClase02 = "pausa";
    let idEstiloClase01 = "empezar";

    if ($elemento.classList.contains(clase01) == true){        
        $elemento.classList.remove(clase01);
        $elemento.classList.add(clase02);               
        $elemento.removeAttribute("id");
        $elemento.setAttribute("id", idEstiloClase02); 
    }else if ($elemento.classList.contains(clase02)){
        $elemento.classList.remove(clase02);
        $elemento.classList.add(clase01);  
        $elemento.removeAttribute("id");
        $elemento.setAttribute("id", idEstiloClase01); 
    }
}

//cambiarClase($botonIniciar.firstElementChild, "fa-play", "fa-pause");

const iniciarCronometro = () => {
    console.log("iniciando cronometro");
    
    segundosIntervalo = setInterval(cronometro, 1000);    
}

const pararCronometro = () => {
    console.log("Parando cronometro");
    clearInterval(segundosIntervalo);    
}