import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { CharCard } from "./style";

const CharacterListPage = () => {
  const [ characterList, setCharacterList ] = useState([])
  const [ clickedChar, setClickedChar] = useState('')

  const navigate = useNavigate()

  useEffect(() => {

    getCharacterList();

  }, [])

 
  const getCharacterList = () => {
      axios
          .get(`${BASE_URL}people/`)
          .then((res) => setCharacterList(res.data.results))
          .catch((err) => console.log(err.response))

  }


  const goToDetailPage = (url) => {
    navigate('/detalhes-personagem')
    
  }
  
  const chamaLista = characterList.map((person) => {
    return (
      
      <CharCard key={person.url} onClick={goToDetailPage} >
        {person.name}
      </CharCard>
      
    );
  });

  return (
    <div>
      <h1>Lista de Personagens</h1>
      {chamaLista}
    </div>
  );
};


export default CharacterListPage;
