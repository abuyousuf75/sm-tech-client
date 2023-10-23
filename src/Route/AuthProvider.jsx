import { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firbaseKey";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [looding, setLooding] = useState(true);
   
    // crete user via register

    const createUser = (email,password) =>{
        setLooding(true)
        return createUserWithEmailAndPassword (auth, email,password);
    }
  
    // const updateUser = () =>{
    //     setLooding(true);
    //     return updateProfile (auth.currentUser);
    // }

 // login user via google
 const googleProvider = new GoogleAuthProvider();

 const googleLogin = () =>{
    setLooding(true)
     return signInWithPopup(auth, googleProvider)
 }

 //login via github

 const githubProvider =  new GithubAuthProvider();

const githubLogin = () =>{
    setLooding(true)
    
    return signInWithPopup(auth, githubProvider)
}




     // logIn user

     const loginUser = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password);
     }

 // logOut user
 const logOut = () =>{
    setLooding(true);
    return signOut(auth);
 }

     //observe user via onAuth state change

     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, Cuser =>{
            setUser(Cuser);
            setLooding(false);
        });
        return () =>{
            unsubscribe()
        }
     },[])


    
    const authInfo = {
        user,createUser, looding, loginUser, logOut,googleLogin,  githubLogin, 
    }

    return (
       <AuthContext.Provider value={authInfo} >
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;