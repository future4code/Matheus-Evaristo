import axios from "axios";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Spinner } from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { ScreenContainer } from "./style";



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
      
      {/* <h1>Detalhes do Personagem:</h1> */}
      {isLoading ? <Spinner color="warning" size="" >Loading...
                  </Spinner> : <>      
      <div>
        <Card
          body
          color="light"

        > 
          <CardBody style={{ fontFamily:'Lucida Sans' }} >
            <CardTitle tag="h5">
            Detalhes do Personagem
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
              
            >
              Nome
            </CardSubtitle>
            <CardText>
              {details.name}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Planeta de origem
            </CardSubtitle>
            <CardText>
              {planet.name}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Ano de nascimento
            </CardSubtitle>
            <CardText>
            {details.birth_year}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Peso
            </CardSubtitle>
            <CardText>
            {details.mass} kg
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Altura
            </CardSubtitle>
            <CardText>
            {details.height} cm
            </CardText>
            <Button style={{backgroundColor: 'black', color:'#FFE81F'}} onClick={goBack}>
              Voltar
            </Button >
          </CardBody>
        </Card>
      </div>
          
      </>}
 
    </div>
  );
};

export default CharacterDetailPage;

