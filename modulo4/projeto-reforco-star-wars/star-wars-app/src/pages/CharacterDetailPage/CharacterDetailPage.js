import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { FlexBox } from "./style";


const CharacterDetailPage = () => {
  const [details, setDetails] = useState({})
  const [planet, setPlanet] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const params = useParams()

  

  const goBack = () => {
    navigate(-1)
    
}
  console.log(params)

  useEffect(() => {
    getDetail()
    getPlanet()
  }, [])


  const getDetail = () => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}people/${params.i}`)
      .then((res) => {
          setDetails(res.data)
          setIsLoading(false)
      })
      .catch((err) => { console.log(err) })
      
  }

  const getPlanet = () => {
    axios
      .get(`${BASE_URL}planets/${params.i}`)
      .then((res) => {
        setPlanet(res.data)
      })
      .catch((err) => { console.log(err) })
  }

 

  return (
    <div>
      <h1>Detalhes do Personagem:</h1>
      <FlexBox>
      {isLoading ? 'CARREGANDO...' : <>Nome: {details.name}<br/>
      <br/>
                                            
                                    Planeta de origem: {planet.name}
                                    </>}
      
      </FlexBox>
      
      <button style ={{marginTop: 15}} onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CharacterDetailPage;
