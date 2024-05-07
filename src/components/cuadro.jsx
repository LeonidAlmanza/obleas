import React from 'react';

import '../stylesshets/cuadro.css';


const Cuadro = (props) => {

  return (
    <div className='cuadro'>
        
        <img src= {props.imagenCuadro} alt="" />
      
    </div>
  )
}

export default Cuadro
