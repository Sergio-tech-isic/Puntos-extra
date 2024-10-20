import React from "react";
import { factorsInArrays, generarFactores, esFactorComunDe, valoresAprobados } from "../../library/factors-in-arrays";

function formato (valores){
    var valorFormateado = "";
    valorFormateado = valores.map((valor)=>{return(String(valor)+ " ")})
    return valorFormateado;
}

const Definicion = ({numeros,factores})=>{
    const factoresGenerados = generarFactores(Math.min(...numeros));
    var factoresComunesConArreglo = [];
    factoresGenerados.forEach((factor)=>{
        if(esFactorComunDe(factor,numeros))factoresComunesConArreglo.push(factor);
    });
    var factoresAprobados= valoresAprobados(factores,numeros);

    return(
        <div>
            <p>La explicacion del codigo es que se reciben dos string donde se esperan los elementos separados por comas, donde se esperan los numeros  de los que se desean los factores y los factores de los factores a comprobar</p>
            <p>Posteriormente al presionar el boton de resolver se filtran los caracteres que no sean numeros para poder generar dos arreglos los cuales seran enviados a la funcion</p>
            <p>Internamente la funcion va generar los factores del 1 al numero mas pequeño del conjunto de numeros que se desea saber sus factores en este caso para {Math.min(...numeros)} del cual sus factores son {formato(factoresGenerados)}</p>
            <p>Entonces la funcion va comparar los factores obtenidos con los otros elementos de la lista de numeros {formato(numeros)} dando como resultado los siguientes factores en comun {formato(factoresComunesConArreglo)}</p>
            <p>Finalmente los factores se comparan con la lista de factores de factores y en caso de que los factores de la segunda lista sean factores de los factores que generamos entonces son los que se muestran, para este caso los que pasan con todas las condiciones son <strong> {formato(factoresAprobados)}</strong></p>
            <strong>El total de numeros que cumplen con las condiciones son {factoresAprobados.length}</strong>



        </div>
    );
}

export default Definicion;