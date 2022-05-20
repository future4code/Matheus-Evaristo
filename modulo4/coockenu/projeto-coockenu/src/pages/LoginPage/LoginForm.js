import React, { useState } from "react";
import { InputsContainer } from "./style";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import {login} from '../../services/user';
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";


const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm ({email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()

    const onSubmitForm = (event) => {     
      event.preventDefault()
      login(form, clear, navigate, setRightButtonText, setIsLoading)
    }


    



    return (
    
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'email'}
                        fullWidth
                        margin={"normal"}
                        required
                        type={'email'}
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
                        
                    />

                    <Button 
                      type={'submit'}
                      fullWidth
                      variant={"contained"}
                     
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Fazer Login </>}
                    </Button>

                </form>
            </InputsContainer>

    );
  }
  
  export default LoginForm;