
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './style';
import { useNavigate } from 'react-router-dom';



const Header = ({rightButtonText, setRightButtonText}) => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
 

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token) {

      logout()
      setRightButtonText('Login')
      navigate('/login')

    } else {

      navigate('/login')

    }
  }
  
  return (
    
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => navigate('/')} color="inherit">Cookenu</Button>
          <Button onClick={rightButtonAction}color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}

export default Header