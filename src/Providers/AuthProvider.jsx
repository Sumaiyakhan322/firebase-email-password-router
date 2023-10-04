import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from '../firebase.config';
export const  AuthContext=createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
  return  signInWithEmailAndPassword(auth,email,password)
}
const signout=()=>{
    return signOut(auth)
}
useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('observer current users',currentUser);
        return ()=>{
          unsubscribe
        }
    })
},[])

    const authInfo={user,createUser,signIn,signout}
   
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