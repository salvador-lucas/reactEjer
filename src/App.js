import React, { useState } from 'react';
import './App.css';
// import Card from '.components/Card/Card';
import CardList from './components/CardList/CardList';
import Button from './components/Button/Button';
import SearchForm from './components/SearchForm/SearchForm';

const App = props => {
  const [characterNameState, setCharactersState] = useState('');

  return (
    <div className="container">
        <h2>
        Challenge
        </h2>
        <h4>Searchinn</h4>
        <SearchForm setCharactersState={setCharactersState} />
        {/* <Button click={ toggleCardHandler } type="btn btn-danger"/> */}
        <CardList characterName={characterNameState}/>  
        
    </div>
  );
}

export default App;
