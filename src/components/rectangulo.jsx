import React from 'react';

import '../stylesshets/rectangulo.css';


const Rectangulo = (props) => {
    const ima = props.imagenProp
  return (
    <div className='rectangulo'>
        
        <img src= {props.imagenProp} alt="" />
      
    </div>
  )
}

export default Rectangulo
