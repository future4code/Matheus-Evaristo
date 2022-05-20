import axios from "axios";
import { BASE_URL } from "../constants/urls";


export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {

    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        setIsLoading(false)
        navigate('/')
        setRightButtonText('Logout')
        
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    
    })
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    
    setIsLoading(true)
    
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        setIsLoading(false)
        navigate('/')
        setRightButtonText('Logout')

    })
    .catch((err) => {
        alert(err.response.data.message)
        setIsLoading(false)
    })
}