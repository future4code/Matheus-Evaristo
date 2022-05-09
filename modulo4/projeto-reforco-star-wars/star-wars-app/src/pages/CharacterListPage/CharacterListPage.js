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


  const goToDetailPage = (i) => {
    navigate(`/detalhes/${i}`)
    
  }
  
  const chamaLista = characterList.map((person, i) => {
    return (
      
      <CharCard key={i} onClick={() => goToDetailPage(i+1)} >
          <img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} 
          width= '200px' height={'200px'} />
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
