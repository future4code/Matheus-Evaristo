import React, { useState } from "react";
import { InputsContainer, SignUpFormContainer } from "./style";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";


const SignUpForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm ({ name:'', email: '', password: '' })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {     
      event.preventDefault()
      signUp(form, clear, navigate, setRightButtonText, setIsLoading) 
    }

    return (
        <form onSubmit={onSubmitForm}>

            <SignUpFormContainer>    

                <InputsContainer>
                
                        <TextField 
                            value={form.name}
                            name={'name'}
                            onChange={onChange}
                            label={'Nome'}
                            variant={"outlined"}
                            fullWidth
                            required
                            autoFocus
                            margin={"normal"}
                            
                            
                        />

                        <TextField 
                            name={'email'}
                            value={form.email}
                            onChange={onChange}
                            label={'email'}
                            fullWidth
                            margin={"normal"}
                            required
                            type={'email'}
                            variant="outlined"
                        />

                        <TextField 
                            name={'password'}
                            value={form.password}
                            onChange={onChange}
                            label={'password'}
                            fullWidth
                            margin={"normal"}
                            required
                            type={'password'}
                            variant="outlined"
                            
                        />

                        <Button 
                        type={'submit'}
                        fullWidth
                        variant={"contained"}
                        
                        >
                        {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Fazer Cadastro </>}

                        </Button>

                </InputsContainer>
                
            </SignUpFormContainer>    
            
        </form>
    );
  }
  
  export default SignUpForm;