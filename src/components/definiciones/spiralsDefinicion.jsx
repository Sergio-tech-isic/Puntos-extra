import React from "react";
import spirals from "../../library/spirals";

const Definicion = ({fila,columna})=>{
    let valor = spirals(fila,columna); 
    return(
        <div>
            <p>Para este problema se necesita conocer la cantidad de espirales que se pueden crear en una matriz de dimensiones n por m por lo que se recibe el tamaño de la fila y la columna en los cuadros de entrada de datos</p>
            <p>Posteriormente se mandan estos datos a la funcion de espirales la cual por medio de una operacion recursiva obtiene el resultado siguiendo este procedimiento:</p>
            <img src="/Ejemplo_espirales.png" alt="Imagen" />
            <p>Sabemos que en una matriz de tamaño 1 por m la cantidad de los espirales sera m</p> 
            <p>Al igual que en una matriz de tamaño n por 1 la cantidad de los espirales sera n</p>
            <p>Entonces partimos de ahi para generar los demas tipos de matrices generando la primera fila de valores que contiene m elementos</p>
            <p>Despues creamos n filas sumando el inmediato anterior numero generado en la fila mas el valor del equivalente en la posicion del arreglo anterior</p>
            <p>Por ejemplo en la celda c3 se ve como se suma c2 + b3 y se le añade 1 </p>
            <p>Algo parecido con la celda d3 que es la suma de d2 y c3 ademas de añadirle 1 </p>
            <p>Y se sigue esa logica hasta completar la matriz y finalmente se regresa el valor que este en la posicion n x m </p>
            <strong>En este caso una matriz de {fila} por {columna} nos da un resultado de {valor} espirales</strong>
        </div>
    );
}

export default Definicion;