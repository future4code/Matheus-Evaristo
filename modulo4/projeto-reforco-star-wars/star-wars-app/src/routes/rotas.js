import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PlanetDetailsPage from "../pages/PlanetDetailsPage/PlanetDetailPage";


const Rotas = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CharacterListPage />} />

        <Route path='/detalhes/:i' element={<CharacterDetailPage />} />

        <Route path='/info/:i' element={<PlanetDetailsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
