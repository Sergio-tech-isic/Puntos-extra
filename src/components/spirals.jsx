import React, { useState } from "react";
import Definicion from "./definiciones/spiralsDefinicion";

export default function Spirals (){
    const[fila,setFila] = useState(1);
    const[columna,setColumna] = useState(1);
    const[contenido,setContenido]=useState("");

    const submit = (e)=>{
        e.preventDefault();
        setContenido(<Definicion fila={fila} columna={columna}/>);
    }

    return (
     <div>
        <h3>Introduce los valores</h3><br />

        <form onSubmit={submit}>
            <label htmlFor="filas">Introduce la cantidad de filas de la matriz: </label>
            <input 
                type="number" 
                id="filas"
                value={fila}
                onChange={(e)=>{setFila(e.target.value)}}
                required
            />
            <br />


            <label htmlFor="columnas">Introduce la cantidad de columnas de la matriz: </label>
            <input 
                type="number" 
                id="columnas"
                value={columna}
                onChange={(e)=>{setColumna(e.target.value)}}
                required
            />
            <br />
            <button type="submit" id="resolver" >Resolver</button>
        </form>
        {contenido}
     </div>   
    );
}