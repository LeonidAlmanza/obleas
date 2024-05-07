import React from 'react';
import  {useState} from 'react';
import './App.css'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imagen1 from './images/IMG-20240426-WA0179.jpg';
import imagen2 from './images/IMG-20240426-WA0178.jpg';
import imagen3 from './images/IMG-20240426-WA0180.jpg';
import imagen4 from './images/IMG-20240426-WA0181.jpg';
import imagen5 from './images/IMG-20240426-WA0182.jpg';


import Rectangulo from './components/rectangulo.jsx'
import Cuadro from './components/cuadro.jsx'


function App() {


    // Define el estado para el color de fondo
    const [backgroundColor, setBackgroundColor] = useState('#ffe4c4'); // Color de fondo inicial

  
    // Controlador de eventos para cambiar el color de fondo
    const changeBackgroundColor = () => {
      const newColor = getRandomColor(); // Función para obtener un color aleatorio, puedes implementarla según tus necesidades
      setBackgroundColor(newColor);
    };

    // Función para obtener un color aleatorio (puedes reemplazarla con cualquier lógica que quieras)
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  

  return (
    <div className='app' style={{ backgroundColor: backgroundColor }}>
    <div className='textos' >
      <div className='boton'>
        <button className='button' onClick={changeBackgroundColor}> Change the theme</button>
      </div>
      <div titulo>
        <h1>Obleas Delights</h1>
      </div>

    </div>
    <div className='contenedorImagenes'>
        <Rectangulo imagenProp={imagen1}/>
        <Cuadro imagenCuadro={imagen3}/>
        <Cuadro imagenCuadro={imagen4}/>
        <Rectangulo imagenProp={imagen5}/>
      </div>
      
    </div>
  )
}

export default App
