import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button 
    type="button" className={props.type}
      onClick={ props.click }
    >
      Delete
    </button>
  )
}

export default Button;