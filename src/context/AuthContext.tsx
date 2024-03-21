import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Firebaseauth'
import { onAuthStateChanged } from 'firebase/auth'

interface AuthContextType {
    user: string | null
}

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({ user: null })

export function useAuthContext() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<string | null>(null)
    const value = {
        user,
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setUser(user?.email ?? null)
        })
        return () => {
            unsubscribed()
        }
    }, [])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
