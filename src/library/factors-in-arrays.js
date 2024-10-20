/*
Habrá dos arrays de números enteros. 
Determine todos los números enteros que satisfacen las dos condiciones siguientes:

Los elementos del primer array son todos factores del número entero que se está considerando
El número entero que se está considerando es un factor de todos los elementos de la segunda matriz

Se dice que estos números están entre los dos arrays. 
Determine cuántos números de este tipo existen.

Ejemplo
a = [2, 4]
b = [32, 64, 128]

Los numeros que cumplen las condiciones son: 4, 8, 16, 32

porque:
4 es un factor de 32
4 es un factor de 64
4 es un factor de 128

8 es un factor de 32
8 es un factor de 64
8 es un factor de 128

16 es un factor de 32
16 es un factor de 64
16 es un factor de 128

32 es un factor de 32
32 es un factor de 64
32 es un factor de 128

y al mismo tiempo

2 es factor de 4
2 es factor de 8
2 es factor de 16
2 es factor de 32

4 es factor de 4
4 es factor de 8
4 es factor de 16
4 es factor de 32

Por lo tanto, el resultado es 4




*/
var factoresAprobados = [];
export default function factorsInArrays(a,b) {
    //console.log("Arreglo: "+b)
    var factores  = generarFactores(Math.min(...b));
    var factoresComunesConArreglo = [];
    factoresAprobados = []
    
    factores.forEach((factor)=>{
        if(esFactorComunDe(factor,b))factoresComunesConArreglo.push(factor);
    });
    //console.log("Factores Comunes Con Arreglo "+factoresComunesConArreglo);
    
    factoresComunesConArreglo.forEach((numero)=>esAprobado(numero));
    
    //console.log(factoresAprobados);

    return factoresAprobados.length;

    function esAprobado(valor){
        let problem = false;
        a.forEach((factor)=>{
            if(!(valor%factor==0))problem=true;    
        });
        if(!problem) factoresAprobados.push(valor);
    }
}    

export function generarFactores(minValue) {
    let comun=[];
    let i =0;
    
    //Saca los numeros comunes del numero mas pequeño
    while(true){//Saca los numeros comunes 
        i++;
        if(i>minValue) break;
        if((minValue%i)==0)comun.push(i);
    }
    if(comun.length>2&&comun[0]==1)comun.splice(0,1);
    //console.log("Comunes del mas pequeño "+comun);
    return comun;
}

export function esFactorComunDe(valor,arreglo){
    arreglo.forEach((numeroDelArreglo)=>{
        
        if(!numeroDelArreglo%valor==0)return false;
    });
    return true;
    
    
}

export function valoresAprobados(a,b){
    factorsInArrays(a,b);
    return(factoresAprobados);
}


