import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import logo from '../../assets/Star_Wars_Logo.svg.png'
import { BackGround, CharCard, FlexRow, H1Color, H1x, LogoContainer, LogoImage } from "./style";

const CharacterListPage = () => {
  const [ characterList, setCharacterList ] = useState([])
  

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
          style ={{paddingBottom: 10}} width= '180px' height={'200px'} />
          {person.name}
      </CharCard>
      
    );
  });

  return (
    <BackGround>
      <LogoContainer> <LogoImage src={ logo }/></LogoContainer>
      <H1x><h1>P E R S O N A G E N S</h1></H1x> 
      <FlexRow>
      {chamaLista}
      </FlexRow>
    </BackGround>
  );
};


export default CharacterListPage;
