import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { CharCard } from "./style";


const PlanetListPage = () => {

    const [planetList, setPlanetList] = useState([]);
    const navigate = useNavigate()
    

    useEffect(() => {
        getPlanetList();
      }, []);

    const getPlanetList = () => {
        axios
            .get(`${BASE_URL}/planets/`)
            .then((res) => setPlanetList(res.data.results))
            .catch((err) => console.log(err.response));

    }

    const goToPlanetDetailPage = (i) => {
        navigate(`/info/${i}`)
        
      }

    const planetas = planetList.map((planet, i) => {
        return(
            <CharCard key={i} onClick={() => goToPlanetDetailPage(i+1)} >
            {planet.name}

            </CharCard>
        )
    })


    return(
        <div>
            {planetas}
        </div>
    )
  
  };
  


export default PlanetListPage;