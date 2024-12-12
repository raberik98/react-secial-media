import { createContext, useCallback, useEffect } from "react";
import { auth } from "../firebase/auth.js";
import { useIdToken } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword, signOut as firebaseSignOut, signInWithEmailAndPassword } from "firebase/auth";


export const authContext = createContext(null)

export function AuthContextProvider({ children }) {
    const [user, loading, authError] = useIdToken(auth)

    useEffect(() => {
        if (authError != undefined) {
            alert(authError)
        }
    }, [authError])


    const signIn = useCallback(async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).catch(err => {
            alert(err)
        })
    }, [])
    
    const registrationWIthEmailAndPassword = useCallback(async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }, [])

    const signOut = useCallback(async () => {
        return firebaseSignOut(auth).catch(err => alert(err))
    }, [])

    return <authContext.Provider value={{ 
            signOut,
            signIn,
            registrationWIthEmailAndPassword,
            user,
            loading
        }}>
        {children}
    </authContext.Provider>
}

