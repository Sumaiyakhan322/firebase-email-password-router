import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from '../firebase.config';
export const  AuthContext=createContext(null)
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

    const authInfo={user,createUser,signIn,signout,loading}
   
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