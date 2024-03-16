let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroSecreto===numeroDeUsuario) {
        asignarTextoElemento('p', 'Acertaste el número');
        asignarTextoElemento('p', `Acertaste en ${intentos} ${intentos===1 ? 'vez':'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto)
            asignarTextoElemento('p','El número es menor');
        else {
            asignarTextoElemento('p','El número es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    // Si el # generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto()
    } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
}
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    return;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


/*let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntento = 'intento';
let maximosIntentos = 6;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt (prompt(`Ingresa un número de 1 a ${numeroMaximoPosible}:`));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : "veces"}` );
    } else {
    if (numeroUsuario > numeroSecreto) {
        alert("el numero es menor");
    } else {
            alert ("el numero es mayor");
        }
        //intentos = intentos + 1;
        //intentos +=1;
        intentos++;
        palabraIntento = "intentos";
        if (intentos > maximosIntentos) {
            alert (`Llegaste al número máximo de ${maximosIntentos} intentos`)
            break;
        }
    } 
}*/
        //alert("No acertaste el número")
