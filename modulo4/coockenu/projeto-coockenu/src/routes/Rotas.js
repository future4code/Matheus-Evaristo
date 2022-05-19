import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipesListPage/RecipeListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Rotas = ({setRightButtonText}) => {
    return(
        
      
            <Routes>

                <Route index element={<RecipeListPage />} />    

                <Route path='/login' element={<LoginPage setRightButtonText={setRightButtonText} />} />

                <Route path='/cadastro' element={<SignUpPage setRightButtonText={setRightButtonText} />} />

                <Route path='/addreceita' element={<AddRecipePage />} />

                <Route path='detalhe/:id' element={<RecipeDetailPage />} />
                
                <Route path='*' element={<ErrorPage />} />    

            </Routes>
        
    
    )
}

export default Rotas;
