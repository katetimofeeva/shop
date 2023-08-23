import { createContext, useState, useEffect } from 'react'

import {
    onAuthStateChangedListener,
    createUserDoc,
} from '../utils/firebase/Firebase'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDoc(user)
            }
            setCurrentUser(user)
        })
        return unSubscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
