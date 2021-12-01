import React from 'react';
import './Card.css';

const Card = (props) => {

  const {name, height, birthYear, gender, mass} = props;

  return (
    <div className="card mb-3 mt-2">
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">Height: {height}</p>
        <p className="card-text">Birth Year: {birthYear}</p>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text">Mass: {mass}</p>
        <button className="btn btn-primary">Eliminar</button> {/*aca importar el componente del button */}
      </div>
    </div>
  )
}

export default Card;