import React, { createContext, useContext, useState } from "react";

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
    });

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