import React, { useState } from "react";
import Definicion from "./definiciones/factorsDefinicion";

function filtroCaracteres(cadena) {
    // Eliminamos todo lo que no sea números, comas o espacios.
    
    const cadenaLimpia = cadena.replace(/[^0-9,]/g, '');
    
    // Dividimos el string limpio, eliminamos espacios, y convertimos a números.
    const arrayNumeros = cadenaLimpia.split(',').map(item => Number(item.trim()));
    
    // Filtramos los valores NaN (si hay elementos vacíos u otros casos no válidos).
    return arrayNumeros.filter(num => !isNaN(num));
}

export default function Factors (){
    const [numeros, setNumeros] = useState("32, 64, 128");
    const [factores, setFactores] = useState("2, 4");
    const [contenido, setContenido] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const numerosArray = filtroCaracteres(numeros);
        const factoresArray = filtroCaracteres(factores);
        setContenido(<Definicion numeros={numerosArray} factores={factoresArray}   />)
    };


    return (
        <div>
            <h3>Introduce los valores</h3><br />

            <form onSubmit={submit}>
                <label htmlFor="numeros">Numeros de los que quieres los factores: </label>
                <input 
                    type="text" 
                    id="numeros"
                    value={numeros}
                    onChange={(e)=>setNumeros(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="factores">Factores a considerar de los factores de los numeros de arriba: </label>
                <input 
                    type="text" 
                    id="factores"
                    value={factores}
                    onChange={(e)=>setFactores(e.target.value)}
                    required
                />
                <br />

                <button type="submit" id="resolver">Resolver</button>
            </form>
            {contenido}
        </div>
    );
}