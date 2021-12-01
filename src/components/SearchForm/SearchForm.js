import React from 'react';
import { useSearchForm } from '../../hooks/useSearchForm';
// import './SearchForm.css';
import Swal from "sweetalert2"

const SearchForm = (props) => {

  const [inputs, handleChange, reset] = useSearchForm({
    searchTerm: ""
  });

  const {searchTerm} = inputs;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to provide a valid name',
      });
    }

    props.setCharactersState(searchTerm.trim().toLowerCase());
    reset();
  }

  return (
    <div className="mt-2 mb-2">
      <form 
        className="row"
        onSubmit={handleSubmit}
      >
        <div className="col-md-3">
          <input 
            type="text"
            className="form-control mb-2"
            placeholder="Search character"
            aria-label="Search"
            name="searchTerm"
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
        <div className="col-md-3">
          {/* <button className="btn btn-primary" type="button" id="button-addon2" onClick={ props.click }> */}
          <button 
            className="btn btn-dark"
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