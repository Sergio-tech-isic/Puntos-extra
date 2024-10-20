import React from "react"
import triplets from "../../library/triplets";

const Definicion = ({juan,pedro}) => {
    let resultado = triplets(juan,pedro);
    let mensaje = "";

    if(resultado[0]===resultado[1]){ mensaje = "Es un empate";}
    else if (resultado[0] > resultado[1]) {mensaje ="Juan es el ganador";}
    else if (resultado[0] < resultado[1]){ mensaje = "Pedro es el ganador";}
    
    return(
        <div>
            <p>La explicacion del codigo es que se envia el conjunto de valores de juan y pedro en dos arreglos. </p>
            <p>Se compara el primer numero de juan que es {juan[0]} con el primer numero de pedro que es {pedro[0]} y el ganador es el mayor.</p>
            <p>Se compara el segundo numero de juan que es {juan[1]} con el segundo numero de pedro que es {pedro[1]} y el ganador es el mayor.</p>
            <p>Se compara el tercer numero de juan que es {juan[2]} con el tercer numero de pedro que es {pedro[2]} y el ganador es el mayor.</p>
            <p>Al final la puntuacion  es {triplets(juan,pedro)[0]} para juan y {triplets(juan,pedro)[1]} para pedro </p>
            <strong> {mensaje} </strong>
        </div>
    );
}

export default Definicion;