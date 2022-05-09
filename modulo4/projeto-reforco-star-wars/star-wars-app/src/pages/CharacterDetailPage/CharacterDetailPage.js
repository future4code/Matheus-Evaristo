import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { FlexBox } from "./style";

const CharacterDetailPage = () => {
  const [details, setDetails] = useState({})
  const navigate = useNavigate()

  const params = useParams()

  const goBack = () => {
    navigate(-1)
    
}
  console.log(params)

  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = () => {
    axios
      .get(`${BASE_URL}people/${params.i}`)
      .then((res) => {
          setDetails(res.data)
      })
      .catch((err) => { console.log(err) })
  }

 

  return (
    <div>
      <h1>Detalhes do Personagem: {details.name}</h1>
      <FlexBox>
      {details.url}

      
      </FlexBox>

      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CharacterDetailPage;
