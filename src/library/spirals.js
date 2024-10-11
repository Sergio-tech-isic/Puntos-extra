/*
    Tiene usted un array de n*m elementos, y desea contar todos los espirales posibles
    solo sera posible hacer un espiral si se empieza desde la esquina superior izquierda
    y se recorre en sentido horario.

    *  *  * 
    0  0  *
    0  *  *
        
    El ejemplo anterior es una muestra de un posible espiral en una matriz de 3x3

    Se puede considerar un espiral incluso un recorrigo de una sola casilla.

    Por ejemplo, en una matriz de 1x1, solo hay un espiral posible.

    En una matriz de 2x2, hay 5 espirales posibles.

    En una matriz de 3x3, hay 19 espirales posibles.
    
*/
var matriz = [];
let ubicacion = [0,1];
let espiralesCreadas=0;
let tamañoFila = 0;
let tamañoColumna = 0;
let decidido = [false,false,false,false];
export default function spirals(n,m) {
    if((n*m)==1){
        espiralesCreadas = 1;
    }
    else if(n>m){
        main(m,n);
    }
    else{
        main(n,m);
    }
    return espiralesCreadas;   
}

function main(n,m){
    crearMatriz(n, m);
    console.log(matriz);
    tamañoColumna = m;
    tamañoFila = n;
    //Defino hasta donde se debe mover para iniciar a hacer espirales
    let puntoInicio = 2*(n-1)+1;
    if (!(m==n)) puntoInicio++;
    decision();
    console.log(decidido);
    /*
    //Voy desde la posición de origen haste un punto dado por puntoInicio
    for(let i = 1;i<=puntoInicio;i++){
        firstMove();
    }


    go(1,1);
    */
}

function crearMatriz(n, m) {
    // Crear una matriz de n filas
    for (let i = 0; i < n; i++) {
        // Para cada fila, crear un array de m columnas con ceros
        let fila = [];
        for (let e = 0; e < m; e++) {
            fila.push(0);
        }
        // Añadir la fila a la matriz
        matriz.push(fila);
    }
    return matriz;
}

function go(row,column){
    matriz[row][column]=1
    ubicacion[0]=row;
    ubicacion[1]=column;
    console.log(ubicacion);
    console.log(matriz);
}

function firstMove(){
    if(ubicacion==[0,0]){
        go(1,1)
    }else
    if(true){

    }

}

function decision(){
    decidido = [false,false,false,false];
    if(puedeAbajo()){
        decidido[0] = true;
        if(puedeDerecha()){
            decidido[1] = true;
        }
    }

    else 
    if(puedeDerecha()){
        decidido[1] = true;
        if(puedeArriba()){
            decidido[2] = true;
        }

    }

    else 
    if(puedeArriba()){
        decidido[2] = true;
        if(puedeIzquierda()){
            decidido[3] = true;
        }

    }

    else 
    if(puedeIzquierda()) decidido[3] = true;
    


    function puedeAbajo(){
        //si no se desborda el arrglo hacia abajo 
        //si el valor de abajo es 0
        console.log(tamañoColumna);
        if(ubicacion[0]<(tamañoColumna-1)){
            if(matriz[ubicacion[0]+1][ubicacion[1]]==0){
                return true;
            }
        }
        else return false;
    }

    function puedeDerecha(){
        //si no se desborda el arrglo hacia la derecha 
        //si el valor de la derecha es 0
        if(ubicacion[1]<(tamañoFila-1)){    
            if(matriz[ubicacion[0]][ubicacion[1]+1]==0) {
                return true;
            }
        }
        else return false;

    }

    function puedeArriba(){
        //si no se desborda el arrglo hacia arriba 
        //si el valor de arriba es 0
        if((ubicacion[0]-1)>=0){
            if(matriz[ubicacion[0]-1][ubicacion[1]]==0) {
                return true;
            }
        }
        else return false;

    }

    function puedeIzquierda(){
        //si no se desborda el arrglo hacia la izquierda 
        //si el valor de la izquierda es 0
        if((ubicacion[1]-1)>=0){    
            if(matriz[ubicacion[0]][ubicacion[1]-1]==0) {
                return true;
            }
        }
        else return false;

    } 
}