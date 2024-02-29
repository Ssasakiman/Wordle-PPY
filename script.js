let diccionario = ["APPLE" , "ANGEL", "ROBIN" , "VALOR", "PARTY" , "DREAM" , "DRINK" , "DRUMS" , "BEARS" , "CRAZY" , "HORSE" ];
let palabra = diccionario[Math.floor(Math.random()*diccionario.length)];
let intentos= 5;
const input = document.getElementById("guess-input");
const boton = document.getElementById("guess-button");
const valor = input.value;
let error = document.getElementById("noesc");
const reintentar = document.getElementById("reintentar");

//window.addEventListener("load", init)

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    error.style.display = "none";
    return intento;
}

function terminar(mensaje){
    input.disabled = true;
    boton.disabled = true;
    let contenedor = document.getElementById("guesses");
    let answer = document.getElementById("answer");
    answer.innerHTML = palabra;
    contenedor.innerHTML = mensaje;
    if (intentos == 0) {
        answer.style.color = "red";
    } else {
        answer.style.color = "green";
    }
    reintentar.style.display= "block";
    boton.style.display= "none";
}

function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    if(INTENTO.length!=5){
        error.style.display= "block";
        error.innerHTML= "¡Debe ser de 5 letras!";
        error.style.color= "red";
        return;
    }
    if (INTENTO === palabra) {
        terminar("<h1 style='color: green;'>¡GANASTE! ;)</h1>");
        error.style.display= "none";
        return;
    }
    error.style.display= "none";
    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = INTENTO[i];
        if (INTENTO[i]===palabra[i]) {
            SPAN.style.backgroundColor = "#79b851";
        } else if ( palabra.includes(INTENTO[i])){
            SPAN.style.backgroundColor = "#f3c237";
        } else {
            SPAN.style.backgroundColor = "#a4aec4";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--
    if (intentos==0){
        terminar("<h1 style='color: red;'>¡PERDISTE! >:)</h1>");
    }
}

boton.addEventListener ("click", intentar,);

function nuevaPalabra() {
    return diccionario[Math.floor(Math.random() * diccionario.length)];
}

function reiniciarJuego(){
    let contenedor = document.getElementById("guesses");
    let answer = document.getElementById("answer");
    const intentosant = document.getElementById("grid");
        reintentar.style.display= "none";
        boton.style.display= "block";
        input.value = "";
        input.disabled = false;
        boton.disabled = false;
        contenedor.innerHTML= "";
        answer.innerHTML="";
        intentosant.innerHTML="";
        intentos = 5
        palabra = nuevaPalabra();
}

reintentar.addEventListener ("click", reiniciarJuego)