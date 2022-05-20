import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import logo from '../../assets/Star_Wars_Logo.svg.png'
import { BackGround, CharCard, FlexRow, FlexRowPlanetas, H1x, Jutify, LogoContainer, LogoImage, PlanetCard } from "./style";
import { Spinner } from "reactstrap";
import fundo from '../../assets/background.jpg'



const CharacterListPage = () => {
  const [ characterList, setCharacterList ] = useState([])
  const [planetList, setPlanetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()

  useEffect(() => {
    getPlanetList()
    getCharacterList();

  }, [])

 
  const getCharacterList = () => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}people/`)
      .then((res) => {
        setCharacterList(res.data.results)
          setIsLoading(false)
      })
      .catch((err) => { console.log(err) })
      
  }

  const getPlanetList = () => {
    setIsLoading(true)
    axios
        .get(`${BASE_URL}/planets/`)
        .then((res) => {
          setPlanetList(res.data.results)
          setIsLoading(false)
        })
        .catch((err) => console.log(err.response));

}


  const goToDetailPage = (i) => {
    navigate(`/detalhes/${i}`)
    
  }

  const goToPlanetDetailPage = (i) => {
    navigate(`/info/${i}`)
    
  }
  
  const planetas = planetList.map((planet, i) => {
    return(
        
        <PlanetCard key={i} onClick={() => goToPlanetDetailPage(i+1)} >
        
        {planet.name}

        </PlanetCard>
        
    )
})
  
  const chamaLista = characterList.map((person, i) => {
    return (
      
      
      <CharCard key={i} onClick={() => goToDetailPage(i+1)} >
          <img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} 
          style ={{paddingBottom: 10}} width= '176px' height={'200px'} />
          {person.name}
      </CharCard>
      
      
    );
  });

  return (
    <BackGround>

      <LogoContainer> <LogoImage src={ logo } /></LogoContainer>

      <H1x><h1>P E R S O N A G E N S</h1></H1x>
       

     
          
          <div className="container">
          <div className="row ">
          <div className="col">
          <div className="row justify-content-center">
          
          
  
            

      {isLoading ? <Spinner color="warning" size=""  >Loading...
                  </Spinner> : <>{chamaLista}
                  </>}
                  
          
          </div>
          </div>
          </div>
          </div>
     
  
          
      <H1x><h1>P L A N E T A S</h1></H1x>

          <div className="container my-1 py-1">
          <div className="row">
          <div className="col-12 md-1 mb-1">
          <div className="row justify-content-center">
      
      {isLoading ? <Spinner color="warning" size="" >Loading...
                  </Spinner> : <>{planetas}
                  </>}

          </div>
          </div>
          </div>
          </div>

    </BackGround>
  );
};

<PlanetCard></PlanetCard>

export default CharacterListPage;
