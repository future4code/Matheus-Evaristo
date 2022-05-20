import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            navigate('/')
        }
    }, [navigate])
}

export default useUnprotectedPage