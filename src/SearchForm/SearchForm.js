import React from 'react';
import './SearchForm.css';

const searchForm = (props) => {
  return (
    <div className="SearchForm"> 
      <input 
        type="text"
        // value={props.name}
      />
      <button>
        Search
      </button>
    </div>
  )
}

export default searchForm;