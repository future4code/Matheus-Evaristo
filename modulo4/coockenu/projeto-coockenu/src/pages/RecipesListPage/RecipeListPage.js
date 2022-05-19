import { Add } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { AddRecipeButton, RecipeListContainer } from "./style";


const RecipesListPage = () => {
  
  useProtectedPage()
  
  const navigate = useNavigate()

  const goToAddRecipePage = () => {
    navigate('/addreceita')
  }

  const goToRecipeDetailPage = (id) => {
   navigate(`/detalhe/${id}`)
  }

  useEffect(() => {
    
  }, [])


  

  const recipes =  useRequestData([], `${BASE_URL}/recipe/feed`)
  

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard 
          key={recipe.recipe_id}
          title={recipe.title}
          image={recipe.image}
          onClick={() => goToRecipeDetailPage(recipe.recipe_id)}
        />
    )
  })


    return (
      <RecipeListContainer>
        
        {recipeCards.length > 0 ? recipeCards : <Loading/>}

        <AddRecipeButton
          color={'primary'}
          onClick={() => goToAddRecipePage()}
        >
          
          <Add/>
        </AddRecipeButton>

      </RecipeListContainer>
    );
  }
  
  export default RecipesListPage;