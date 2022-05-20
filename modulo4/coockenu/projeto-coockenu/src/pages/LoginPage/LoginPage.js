import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./style";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import logo from '../../assets/logo.png'



const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  const navigate = useNavigate()
    

    return (
      <div>
        <ScreenContainer>
            <LogoImage src={logo} />
              <LoginForm setRightButtonText={setRightButtonText}/>
              <SignUpButtonContainer>
                    <Button 
                      onClick={() => { navigate('/cadastro')}}
                      type={'submit'}
                      fullWidth
                      variant={'text'}
                     
                    >
                        Não possui Conta? Cadastre-se
                    </Button>

              </SignUpButtonContainer>

        </ScreenContainer>        
       
      </div>
    );
  }
  
  export default LoginPage;