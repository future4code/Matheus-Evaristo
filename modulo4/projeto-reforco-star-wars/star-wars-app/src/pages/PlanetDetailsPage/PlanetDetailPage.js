import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const PlanetDetailsPage = () => {
    const [planet, setPlanet] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const params = useParams()

    const goBack = () => {
        navigate(-1)
        
    }

    useEffect(() => {
        getPlanet()
      }, [])

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
      
      
      {isLoading ? 'CARREGANDO...' : <>      
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
              {planet.name}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Planeta de origem
            </CardSubtitle>
            <CardText>
              {planet.gravity}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Ano de nascimento
            </CardSubtitle>
            <CardText>
            {planet.population}
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Peso
            </CardSubtitle>
            <CardText>
            {planet.arid} kg
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Altura
            </CardSubtitle>
            <CardText>
            {planet.terrain} cm
            </CardText>
            <Button style={{backgroundColor: 'black', color:'#FFE81F'}} onClick={goBack}>
              Voltar
            </Button >
          </CardBody>
        </Card>
      </div>
          
      </>}
 
    </div>
    )
}

export default PlanetDetailsPage