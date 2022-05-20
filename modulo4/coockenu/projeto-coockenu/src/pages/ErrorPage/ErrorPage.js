import React from "react";
import { ErrorImage, ErrorPageContainer } from "./style";
import error from '../../assets/error.png'
import Typography from '@mui/material/Typography';



const ErrorPage = () => {
    return (
      <div>

        <ErrorPageContainer>
          <ErrorImage src={error}/>
          <Typography color={'primary'} variant={'h4'} align={'center'}> Erro 404 - Página Não Encontrada </Typography>
        </ErrorPageContainer>

      </div>
    );
  }
  
  export default ErrorPage;