import React, { useState } from 'react';
import './App.css';
import Card from './Card/Card';
import CardList from './CardList/CardList';
import DeleteButton from './DeleteButton/DeleteButton';
import SearchForm from './SearchForm/SearchForm';

const App = props => {
  const [personsState, setCardsState] = useState({
    persons: [
      { name: 'lucas', age: '87', id: 1},
      { name: 'josele', age: '65', id: 2},
      { name: 'pipo', age: '88', id: 3},
    ]
  });

  const [ showCardsState, setShowCardsSate ] = useState({
    showCards: false
  });

  const switchNameHandler = (event, id) => {
    const personIndex = personsState.persons.find(person => {
      return person.id === id;
    });

    const person = {...personsState.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...personsState.persons];

    setCardsState({persons: persons});
  };   

  const toggleCardHandler = () => {
    setShowCardsSate({
      showCards: !showCardsState.showCards
    });
  };

  const deleteCardHandler = (index) => {
    const personsList = [...personsState.persons];
    personsList.splice(index, 1);
    setCardsState({persons: personsList});
  };

  let cards = null;
  if (showCardsState.showCards) {
    // cards = (
    //   <div>
    //     {personsState.persons.map((person, i) => {
    //       return <Card
    //         click={() => deleteCardHandler(i)}
    //         name={person.name}
    //         age={person.age}
    //         key={person.id}
    //         nameChange={(event) => switchNameHandler(event, person.id)}
    //       />
    //     })}
    //   </div>
    // );
    
    cards = (
      <div>
        <CardList
        persons={personsState.persons}
        />
      </div>
    );

  }

  return (
    <div className="App">
      {/* <header className="App-header">
        hola
      </header> */}
      <body>
        <div>
          aca algun titulo o algo de eso
        </div>
        <div>
          <SearchForm/>
          {/* <button 
            onClick={ toggleCardHandler }
          >
            boton magico
          </button> */}
          <DeleteButton click={ toggleCardHandler }/>
        </div>
        {
          cards
        }
      </body>
    </div>
  );
}

export default App;
