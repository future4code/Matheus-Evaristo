import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Rotas = () => {
  const [ characterList, setCharacterList ] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CharacterListPage />} />

        <Route path='/detalhes/:i' element={<CharacterDetailPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
