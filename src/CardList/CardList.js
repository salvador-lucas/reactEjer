import React from 'react';
// import './CardList.css';
import Card from '../Card/Card';


const cardList = (props) => {
  return (
    <div>
    {props.persons.map((person, i) => {
      return <Card
        // click={() => deleteCardHandler(i)}
        name={person.name}
        age={person.age}
        key={person.id}
        // nameChange={(event) => switchNameHandler(event, person.id)}
      />
    })}
  </div>
  )
}

export default cardList;