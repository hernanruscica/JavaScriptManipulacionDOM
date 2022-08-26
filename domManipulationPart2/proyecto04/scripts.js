
/*
Manejo del DOM con JavaScript
Proyecto numero cuatro:
*/ 
const $d = document;

console.log("desde Jscript");

//los elementos del DOM: 

const $botonIniciarPausar = $d.getElementById("empezarPararBtn");
const $botonResetear = $d.getElementById("resetearBtn");
const $pantallaTimer = $d.getElementById("timer");
const $mediciones = $d.getElementById("mediciones");
const $mensaje = $d.querySelector(".mensaje");

let segundosIntervalo;
let contador = 0;
let milisegundos = 0;
let segundos = 0; 
let minutos = 0;
let horas = 0;
//estadoCronometro puede ser null, "play", "pause", "reset"
let estadoCronometro = null;

const mediciones = [];
let cantidadMedicionesAmostrar = 8;

function cronometro(){
    
    contador += 1;
    
    centecimas = contador % 100;
    segundos = Math.trunc(contador / 100);    
    minutos = Math.trunc(contador / 6000);
    horas = Math.trunc(contador / 360000);

    let centecimasStr = "";
    let segundosStr = "";
    let minutosStr = "";
    let horasStr = "";
    if (centecimas <= 9 ){ 
        centecimasStr = "0" + centecimas;
    } else {centecimasStr = centecimas;}    
    if (segundos <= 9){ segundosStr = "0" + segundos; }
    else {segundosStr = segundos};
    if (minutos <= 9){ minutosStr = "0" + minutos; }
    else {minutosStr = minutos};
    if (horas <= 9){ horasStr = "0" + horas; }
    else {horasStr = horas};
    
    $pantallaTimer.innerHTML = "";
    $pantallaTimer.innerHTML = `${horasStr}:${minutosStr}:${segundosStr}:${centecimasStr}`;
}

$botonIniciarPausar.addEventListener("click", () => {
    if (estadoCronometro == "reset" || estadoCronometro == "pause" || estadoCronometro == null){
        estadoCronometro = "play"
        iniciarCronometro();
        cambiarClase();
        mostrarMensaje("Stop-Wath Running ...");
    } else if (estadoCronometro == "play" || estadoCronometro == null){
        estadoCronometro = "pause";
        pausarCronometro();
        cambiarClase();
        mostrarMensaje("Stop-Watch in Pause, now you could reset it.");
    }
    console.log(estadoCronometro);          
});

$botonResetear.addEventListener("click", () => {
    if (estadoCronometro == "pause" && estadoCronometro != "reset"){
        console.log("reset button");
        estadoCronometro = "reset";
        resetarCronometro();        
        mostrarMensaje("click Play to start");       

    }else if (estadoCronometro == "play"){        
        mostrarMensaje("You must pause it, them reset it.");
    }
});

const cambiarClase = () => {
    $elemento = $botonIniciarPausar.firstElementChild;
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
    segundosIntervalo = setInterval(cronometro, 10);    
}

const pausarCronometro = () => {
    console.log("pausando cronometro");
    clearInterval(segundosIntervalo);     
}

const resetarCronometro = () => {
    console.log("reseteando cronometro");
    
    if (mediciones.length <= cantidadMedicionesAmostrar){
        mediciones.push($pantallaTimer.innerHTML);
    }else{
        mediciones.shift();
        mediciones.push($pantallaTimer.innerHTML);
    }
    //console.log(mediciones);
    mostrarMediciones();

    contador = 0, segundos = 0, minutos = 0, horas = 0;
    $pantallaTimer.innerHTML = "00:00:00:00";
    clearInterval(segundosIntervalo);    
}

/*
<p class="medicion">00:01:25:89</p>              
*/
const agregarMedicion = (medicionText) => {
    const $medicion = $d.createElement("p");
    $medicion.classList.add("medicion");
    $medicion.innerHTML = medicionText;
    $mediciones.appendChild($medicion);
}

const mostrarMensaje = (mensaje) => {
    $mensaje.innerHTML = "";
    $mensaje.innerHTML = mensaje;
}

const mostrarMediciones = () => {
    $mediciones.innerHTML = "";    
    let longitudMediciones = mediciones.length
    for (let i = longitudMediciones - 1; i >= 0; i--){
            agregarMedicion(mediciones[i]);
    }
}

mostrarMensaje("click Play to start");