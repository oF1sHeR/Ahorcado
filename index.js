//Parte JavaScript


//Variables globales
var palabra;
var palabraArray = new Array();
var cadenaArray = new Array();
var contador = 1; // Contador utilizado como global para tener en cuenta las letras erroneas utilizadas.
var letrasPulsadas = new Array(); // array de las letras que introducimos por teclado



//Funcion para escoger una palabra aleatoria de todo el diccionario
function escogerPalabraAleatoria() {
    var diccionario = new Array("Pokemon Purpura", "Hola Cintia", "Pedo");

    //Para escoger numero aleatorio, calculamos el total del array, y luego calculamos el nr aleatorio de esa cantidad.
    var total = diccionario.length;

    var aleatorio = numeroAleatorio(total);
    palabraArray = diccionario[aleatorio];
    crearRayas(palabraArray);
}




// Funcion para calcular un numero aleatorio desde min hasta maximo indicado por parametro.
function numeroAleatorio(numero) {
    var max = numero;
    return Math.floor(Math.random() * (max));
}


// Funcion para crear las rayas por cada letra que tenga la palabra en el principio.
function crearRayas(palabra) {
    var palabra = palabra.split('');


    //Recorremos cada letra para obtener el texto censurado

    for (i = 0; i < palabra.length; i++) {
        // Comprobamos si la palabra es un caracter o es un espacio, por si el juego es con más de una palabra.
        if (palabra[i] == " ") {
            cadenaArray[i] = "  ";
        } else {
            cadenaArray[i] = "_ ";
        }
        // Imprimimos la salida

       document.getElementById("palabra").value += cadenaArray[i];
    }
 

}




//Funcion para recoger las letras que tecleamos y las pasamos a mayusculas
// Esta función, también realizará la funcion de realizar la comprobacion si está o no
function recogerLetra(manejador){
    var letra;
    letra = manejador.key;

    if(manejador.keyCode >= 97 && manejador.keyCode <= 122){
        letra = convertirMayuscula(letra);
        
        comprobarCorrecto(letra);
        agregarLetra(letra);
        comprobarVictoria();
    
    }


}

// Funcion para pasar a mayuscula la letra que introducimos
function convertirMayuscula(letra){
    var letraMayus = letra.toUpperCase();
    return letraMayus;
}


// Comprobamos si la letra que tecleamos está en la palabra.

function comprobarCorrecto(letra){
    
    //Variable global palabraArray
    //alert(palabraArray);
    
    
    var hayletra = false;
    
    for(i = 0;i<palabraArray.length;i++){
        if(palabraArray[i].toUpperCase() == letra && palabraArray[i] != " "){
            cadenaArray[i] = letra + " ";
            hayletra = true;
            mostrarLetra();
        }
        
        
    }

    if(!hayletra){
        mostrarMiembro(letra);

        //alert("no está");
    }
    
    
}

//Funcion que cambia los guiones por letras.
function mostrarLetra(){
    var i;
    document.getElementById("palabra").value = "";
    for(i=0;i<palabraArray.length;i++){
        document.getElementById("palabra").value += cadenaArray[i];
    }
}

// Funcion para mostrar cada parte del cuerpo cada vez que se introduce un letra correcta
function mostrarMiembro(letra){
    //Comprobamos si la letra ya está introducida no añadir un error más.
    var i;
    var letrasTotales;
    var yaesta = false;
    var campo;

    campo = document.getElementById("campo");
    letrasTotales = document.getElementById("letras").value;
    for(i = 0;i<letrasTotales.length;i++){
        if(letra == letrasTotales[i]){
            yaesta = true;
        }
    }
    
    if((contador <=6) && !yaesta){
        document.getElementById("parteCuerpo"+contador).style.visibility= "visible";
        contador++;
    }
    if(contador>6){
        document.getElementById("error").style.display = "inline-block";
        document.getElementById("cuerpo").style.opacity = 0.6;
        mostrarBotonReinicio();

    }
}


//Funcion utilizada para mostrar que letra se ha introducido.

function agregarLetra(letra){
    var i;
    var yaesta = false;
    for(i=0;i<letrasPulsadas.length;i++){
        if(letrasPulsadas[i] == letra){
            yaesta = true;
        }
    }
    if(!yaesta){
        letrasPulsadas.push(letra);
    }
    document.getElementById("letras").value = letrasPulsadas;

}



//Funcion para comprobar si se ha terminado el juego


function comprobarVictoria(){
    var i;
    var terminado = true;

    for(i=0;i<cadenaArray.length;i++){
        if(cadenaArray[i] == "_ "){
            terminado = false;
        }
    }

    if(terminado){
        mostrarBotonReinicio();
        alert("Enhorabuena, has completado el juego");
    }
}


//Boton de reiniciar

function reiniciar(){
    window.location.reload();
}

function mostrarBotonReinicio(){
    var boton;
    boton = document.getElementById("campoBoton");

    boton.style.display="inline-block";
}

//Colocamos el boton de Reinicio
/* 
function colocarReinicio(){
    var izquierda,arriba;
    var boton,capaBoton;
    var alturaBoton,anchuraBoton;

    
    boton = document.getElementById("reinicio");

    alert(boton.off)
    capaBoton = document.getElementById("campoBoton");
    
    izquierda = screen.availWidth/2 - boton.style.width/2;
    arriba = screen.availHeight/2 - boton.style.height/2;

    capaBoton.style.left = izquierda + "px";
    capaBoton.style.top = arriba + "px";

}
*/
