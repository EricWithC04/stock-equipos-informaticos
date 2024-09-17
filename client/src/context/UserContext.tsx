import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextProps {
    login?: () => void
    logout?: () => void
    userData?: {
        isLogged: boolean
    }
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
        fetch('http://localhost:3000/auth/user-data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserData({
                    ...userData,
                    role: data.role
                })
            })
            .catch(err => console.log(err))
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
        <UserContext.Provider value={{ login, logout, userData }}>
            {children}
        </UserContext.Provider>
    )
}