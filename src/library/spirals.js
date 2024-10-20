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
var matriz=[];

export default function spirals(n,m) {
    matriz=[];
    crearMatriz(n,m);
    return(matriz[n-1][m-1]);
}

function crearMatriz(filas, columnas) {
    // Crear una matriz de n filas
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let e = 0; e < columnas; e++) {
            if(i===0){
                fila.push(Number(e+1));
            }
            
            else if(e===0){
                fila.push(Number(i+1));
            }
            
            else {
                let superior = (matriz[i-1][e]);
                let lateral = (fila[e-1]);
                let valor = (superior+lateral+1)
                fila.push(valor);
            }
        }
        // Añadir la fila a la matriz
        matriz.push(fila);
    }
}


/*
let matriz = [];
let matrizTerminada=[];
let ubicacion = [0,0];
let espiralesCreadas=1;
let tamañoFila = 0;
let tamañoColumna = 0;
let decidido = [false,false,false,false];


function filtro(n,m){
    if((n*m)===1){
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

function main(filas,columnas){
    matriz = [];
    matrizTerminada=[];
    ubicacion = [0,0];
    espiralesCreadas=1;
    tamañoFila = 0;
    tamañoColumna = 0;
    decidido = [false,false,false,false];

    crearMatriz(filas, columnas);
    tamañoColumna = filas;
    tamañoFila = columnas;

    

    //Defino hasta donde se debe mover para iniciar a hacer espirales
    let puntoInicio = 2*(filas-1);
    //if ((columnas!==filas)) puntoInicio++;
    go();
    console.log(puntoInicio);

    

    //Voy desde la posición de origen haste un punto dado por puntoInicio
    for(let i = 1;i<=puntoInicio-1;i++){
        //console.log("ciclo: "+ i);
        if(puedeDerecha()){
            //console.log("pudo derecha en ciclo "+i);
            irDerecha();   
        }
        else  irAbajo();
    }
    espiralesCreadas=espiralesCreadas-puntoInicio;

    
    let contar=0;
    while(matriz !== matrizTerminada){
        contar++;
        let centinela = false;
        decision();

        if(decidido[0]===true){//puede abajo ir abajo
            if(decidido[1]===true){//puede abajo y derecha breakpoint e ir abajo
                //breakpoint
                irAbajo();            
            }
            else irAbajo();
        } 

        else if(decidido[1]===true){//derecha derecha ir derecha
            if(decidido[2]===true){//puede derecha y arriba breakpoint e ir derecha
                //breakpoint;
                irDerecha();
            }
            else irDerecha();
            
        }

        else if(decidido[2]===true){//puede arriba ir arriba
            if(decidido[3]===true){//puede arriba y izquierda breakpoint e ir arriba
                //breakpoint;
                irArriba();
            }
            else irArriba();
        }

        else if(decidido[3]===true){//puede izquierda ir izquierda
            irIzquierda();
        } 
        
        else centinela = true;

        if(centinela) break;
    }

    
    console.log(matriz);
    console.log(ubicacion);
    console.log(espiralesCreadas);
    return;
}

function crearMatriz(n, m) {
    // Crear una matriz de n filas
    for (let i = 0; i < n; i++) {
        // Para cada fila, crear un array de m columnas con ceros
        let fila = [];
        let filaTerminada = []
        for (let e = 0; e < m; e++) {
            fila.push(0);
            filaTerminada.push(1);
        }
        // Añadir la fila a la matriz
        matriz.push(fila);
        matrizTerminada.push(filaTerminada);
    }
}

function go(row=ubicacion[0],column=ubicacion[1]){
    matriz[row][column]=1
    ubicacion[0]=row;
    ubicacion[1]=column;
    //console.log(ubicacion);
    //console.log(matriz);    
}

function irAbajo(){
    ubicacion[0]=(ubicacion[0]+1);
    espiralesCreadas++;
    go();
}

function irDerecha(){
    ubicacion[1]=(ubicacion[1]+1);
    espiralesCreadas++;
    go();
}

function irArriba(){
    ubicacion[0]=(ubicacion[1]-1);
    espiralesCreadas++;
    go();
}

function irIzquierda(){
    ubicacion[1]=(ubicacion[1]-1);
    espiralesCreadas++;
    go();
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
}  

function puedeAbajo(){
    //si no se desborda el arrglo hacia abajo 
    //si el valor de abajo es 0
    if(ubicacion[0]<(tamañoColumna-1)){
        if(matriz[ubicacion[0]+1][ubicacion[1]]===0){
            return true;
        }
    }
    else return false;
}

function puedeDerecha(){
    //si no se desborda el arrglo hacia la derecha 
    //si el valor de la derecha es 0
    if(ubicacion[1]<(tamañoFila-1)){    
        if(matriz[ubicacion[0]][ubicacion[1]+1]===0) {
            return true;
        }
    }
    else return false;

}

function puedeArriba(){
    //si no se desborda el arrglo hacia arriba 
    //si el valor de arriba es 0
    if((ubicacion[0]-1)>=0){
        if(matriz[ubicacion[0]-1][ubicacion[1]]===0) {
            return true;
        }
    }
    else return false;

}

function puedeIzquierda(){
    //si no se desborda el arrglo hacia la izquierda 
    //si el valor de la izquierda es 0
    if((ubicacion[1]-1)>=0){    
        if(matriz[ubicacion[0]][ubicacion[1]-1]===0) {
            return true;
        }
    }
    else return false;

} 

*/
