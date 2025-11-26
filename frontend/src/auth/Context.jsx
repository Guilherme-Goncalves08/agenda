import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'

const isTokenValid = (token) => {
    try {
        console.log(token)
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000
        return decoded.exp > currentTime
    } catch (error) {
        return false
    }
}

const getRole = (token) => {
    try {
        const decoded = jwtDecode(token)
        return decoded.role
    } catch (error) {
        return false
    }
}

export const AuthContext = createContext()
// token do usuario
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        const storageToken = localStorage.getItem('token')
        if (storageToken && isTokenValid(storageToken)) {
            setToken(storageToken)
            setRole(getRole(storageToken))
        } else {
            setToken(null)
            setRole(null)
            localStorage.removeItem('token')
        }
        setLoading(false)
    }, [])

    if(loading) {
        return <div>Carregando...</div>
    }
    return (
        <AuthContext.Provider value={{ token, login, logout, role }}>
            { children }
        </AuthContext.Provider>
    )
}