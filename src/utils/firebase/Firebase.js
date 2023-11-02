import { initializeApp } from 'firebase/app'
import {
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyC744KmXhLBA2UF1NbVHojJpnroYdaq3S0',
    authDomain: 'shop-db-1285b.firebaseapp.com',
    projectId: 'shop-db-1285b',
    storageBucket: 'shop-db-1285b.appspot.com',
    messagingSenderId: '1016595600074',
    appId: '1:1016595600074:web:28af01b44795e7cd5e5a33',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// export const signInWithGoogleRedirect = () =>
//     signInWithRedirect(auth, googleProvider)
export const db = getFirestore()

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((element) => {
        const docRef = doc(collectionRef, element.title.toLowerCase())
        batch.set(docRef, element)
    })

    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey)
    const queryCollection = query(collectionRef)

    const querySnapshot = await getDocs(queryCollection)
    console.log(querySnapshot, 'querySnapshot')
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}
export const createUserDoc = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'user', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (er) {
            console.log('error creating data', er.message)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback)
