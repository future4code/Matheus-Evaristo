import Typography from '@mui/material/Typography';
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddRecipeForm from "./AddRecipeForm";
import { RecipeContainer, ScreenContainer } from "./style";



const AddRecipePage = () => {
    useProtectedPage()
    return (
      <ScreenContainer>
        <RecipeContainer>

        <Typography gutterBottom variant={'h4'} align={'center'} color ={'textPrimary'}>Adicionar Receita</Typography>
        
        <AddRecipeForm/>
        </RecipeContainer>
      </ScreenContainer>
    );
  }
  
  
  export default AddRecipePage;