import { useState, createContext } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null)
    const signIn = (user) => {
        setUser(user)
        console.log(user)
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user
        }}>
            { children } 
        </AuthContext.Provider>
    )
}