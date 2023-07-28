import { getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../firebase.config";




export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUserUsingEmailAndPass = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass);
}

const updateUserProfile = (name,photo) => {
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}

const userSignInUsingEmailAndPass = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

const signOutUser = () => {
    signOut(auth);
}

useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
    })
    return () => unSubscribe()
}, [])

const authInfo = {
    user,
    loading,
    createUserUsingEmailAndPass,
    userSignInUsingEmailAndPass,
    signOutUser,
    updateUserProfile
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;