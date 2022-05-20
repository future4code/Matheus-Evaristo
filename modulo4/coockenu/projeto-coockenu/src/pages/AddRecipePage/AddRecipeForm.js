import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { AddRecipeFormContainer, InputsContainer } from "./style";
import { createRecipe } from "../../services/recipe";

const AddRecipeForm = () => {
    

    const [form, onChage, clear] = useForm({title:'', description:'', image:''})
    const [isLoading, setIsLoading] = useState(false)



    const onSubmitForm = (event) =>{
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)

    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChage}
                        label={'Título'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />

                    <TextField
                        name={"description"}
                        value={form.description}
                        onChange={onChage}
                        label={'Descrição'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />

                    <TextField
                        name={"image"}
                        value={form.image}
                        onChange={onChage}
                        label={'Foto'}
                        variant={'outlined'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                </InputsContainer>
                    <Button
                        color="primary"
                        variant="contained"
                        type={'submit'}
                        fullWidth
                    >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Adicionar Receita </>}      
                    </Button>
            </AddRecipeFormContainer>


        </form>
    )

}

export default AddRecipeForm;