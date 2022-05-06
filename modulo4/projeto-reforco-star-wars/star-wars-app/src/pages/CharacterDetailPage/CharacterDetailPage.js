import { useNavigate } from "react-router-dom";

const CharacterDetailPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
}

  return (
    <div>
      <h1>Detalhes do Personagem</h1>
      
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CharacterDetailPage;
