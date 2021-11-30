import React from 'react';
import './Card.css';

const person = (props) => {
  return (
    <div className="Card"> 
      <p 
        onClick={props.click}
      >
        Nombre: {props.name},
        Edad: {props.age}

      </p>
      <p>
        {props.children}
      </p>
    </div>
  )
}

export default person;