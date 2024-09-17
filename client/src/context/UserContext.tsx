import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextProps {
    login?: () => void
    logout?: () => void
    userData?: {
        isLogged: boolean
        role: string
    }
    setUserData?: ({ isLogged, role }: { isLogged: boolean, role: string }) => void  
}

const UserContext = createContext<UserContextProps>({});

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const [userData, setUserData] = useState({
        isLogged: false,
        role: 'user'
    });

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setUserData({
                ...userData,
                isLogged: true
            })
        }
    }, [])

    const login = () => {
        setUserData({
            ...userData,
            isLogged: true
        })
    }

    const logout = () => {
        setUserData({
            ...userData,
            isLogged: false
        })
    }

    return (
        <UserContext.Provider value={{ login, logout, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}