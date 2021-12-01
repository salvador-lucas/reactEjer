import React, {useState} from 'react';
// import './SearchForm.css';

const SearchForm = (props) => {

  const [characters, setCharacters] = useState({
    search: ""
  });

  const handleInputChange = (event) => {
    setCharacters({
      ...characters,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // aca algun llamado a la api
  };

  return (
    <div className="mt-2 mb-2">
      <form 
        className="row"
        onSubmit={handleFormSubmit}
      >
        <div className="col-md-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            name="search"
            onChange={handleInputChange}
            // value={props.name}
          />
        </div>
        <div className="col-md-3">
          {/* <button className="btn btn-primary" type="button" id="button-addon2" onClick={ props.click }> */}
          <button 
            className="btn btn-primary"
            type="submit"
            id="button-addon2"
           >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;