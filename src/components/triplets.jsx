import React, {useState} from "react";
import Definicion from "./definiciones/tripletsDefinicion";
//import "./triplets.css";


export default function Triplets() {
    const [juan, setJuan] = useState({ num1: 1, num2: 2, num3: 3 });
    const [pedro, setPedro] = useState({ num1: 3, num2: 2, num3: 1 });
    const [contenido, setContenido] = useState ("");
    
    const change = (e, person) => {
      const { name, value } = e.target;
      if (person === 'juan') {
        setJuan(prevState => ({ ...prevState, [name]: value }));
      } else {
        setPedro(prevState => ({ ...prevState, [name]: value }));
      }
    };
    
    const submit = (e) => {
        e.preventDefault();
        const juanArray = [juan.num1, juan.num2, juan.num3];
        const pedroArray = [pedro.num1, pedro.num2, pedro.num3];
        setContenido(<Definicion juan={juanArray} pedro={pedroArray} />);
    };

    return (
    <div>
        <h3>Introduce los valores</h3>
        <br/>
        <form onSubmit={submit}>
          <p>Introduce los valores para Juan</p>

          <label htmlFor="juan1"> Número 1: </label>
          <input
            type="number"
            id="juan1"
            name="num1"
            value={juan.num1}
            onChange={(e) => change(e, 'juan')}
            required
          />
  
          <label htmlFor="juan2"> Número 2: </label>
          <input
            type="number"
            id="juan2"
            name="num2"
            value={juan.num2}
            onChange={(e) => change(e, 'juan')}
            required
          />
  
          <label htmlFor="juan3"> Número 3: </label>
          <input
            type="number"
            id="juan3"
            name="num3"
            value={juan.num3}
            onChange={(e) => change(e, 'juan')}
            required
          />
          <br/>
          <br/>
  
          <p>Introduce los valores para Pedro</p>

          <label htmlFor="pedro1"> Número 1: </label>
          <input
            type="number"
            id="pedro1"
            name="num1"
            value={pedro.num1}
            onChange={(e) => change(e, 'pedro')}
            required
          />
  
          <label htmlFor="pedro2"> Número 2: </label>
          <input
            type="number"
            id="pedro2"
            name="num2"
            value={pedro.num2}
            onChange={(e) => change(e, 'pedro')}
            required
          />
  
          <label htmlFor="pedro3"> Número 3: </label>
          <input
            type="number"
            id="pedro3"
            name="num3"
            value={pedro.num3}
            onChange={(e) => change(e, 'pedro')}
            required
          />
          <br/>
  
          <button type="submit" id="resolver">Resolver</button>
        </form>
        {contenido}
    </div> 
    );
  }