import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from '../firebase.config';
export const  AuthContext=createContext(null)
const  provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null)
  const[loading,setLoading]=useState(true)

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoading(true)
  return  signInWithEmailAndPassword(auth,email,password)
}
const signout=()=>{
    setLoading(true)
    return signOut(auth)
}
const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
        console.log('observer current users',currentUser);
        return ()=>{
          unsubscribe
        }
    })
},[])

    const authInfo={user,createUser,signIn,signout,loading,googleSignIn}
   
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}