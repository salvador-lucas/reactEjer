import { useEffect, useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
// import Button from '../Button/Button';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';


const CardList = (props) => {

  const [charactersState, setCharactersState] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
  const [paginationState, setPaginationState] = useState({
    previous: null,
    next: null,
    page: 1
  });

  useEffect(() => {
    swApiGet(props.characterName);
  }, [props.characterName]);

  const swApiGet = async(name) => {
    try {
      setLoaderState(true);
      const res = await axios.get(`https://swapi.dev/api/people?search=${name}`);

      if(res?.data?.count === 0) {
        return Swal.fire({
          icon: 'error',
          title: 'Ooops...',
          text: 'Character not found',
        });
      }
      const data = res?.data?.results;
      setCharactersState(data);

      if(res?.data?.next) {
        setPaginationState({
          ...paginationState,
          next: res.data.next
        })
      }

      console.log(res?.data);
    } catch(e) {
      console.log(e);
    } finally {
      setLoaderState(false);
    }
  }

  if(loaderState){
    return <Loader/>
  }

  return (
    <div>
      {<Pagination 
      page={paginationState.page} 
      // next={paginationState.next}
      />}
      {
        charactersState.map(char => (
          <Card
            key={char.url}
            name={char.name}
            gender={char.gender}
            height={char.height}
            mass={char.mass}
            birthYear={char.birth_year}
          />
        ))
      }
    </div>
  )
}

export default CardList;


// const CardList = (props) => {
//   return (
//     <div>
//     {props.persons.map((person, i) => {
//       return <Card
//         // click={() => deleteCardHandler(i)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         // nameChange={(event) => switchNameHandler(event, person.id)}
//       >
//         <Button/>
//       </Card>
//     })}
//   </div>
//   )
// }