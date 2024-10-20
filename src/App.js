import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Triplets from './components/triplets';
import Factors from './components/factors';
import Spirals from './components/spirals';



function App() {
  document.title = "Puntos extra"

  return (
    <Router>
      <h1>Actividad puntos extra</h1>
      <header>
        <h2>Selecciona una prueba</h2>
        <button onClick={() =>{ window.location.href = '/triplets'}}>Triplets</button>
        <button onClick={() =>{ window.location.href = '/factors'}}>Factors</button>
        <button onClick={() =>{ window.location.href = '/spirals'}}>Spirals</button>
      </header>

      <Routes>
        {/* Definición de rutas */}

        <Route path="/triplets" element={<Triplets />} />
        <Route path='/factors' element={<Factors />} />
        <Route path='/spirals' element={<Spirals />} />
      </Routes>
    </Router>
    

  );
}



export default App;

/*
<button > </button>


*/


