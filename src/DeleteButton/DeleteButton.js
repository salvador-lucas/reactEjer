import React from 'react';
import './DeleteButton.css';

const deleteButton = (props) => {
  return (
    <button 
      className="DeleteButton"
      onClick={ props.click }
    >
      Delete
    </button>
  )
}

export default deleteButton;