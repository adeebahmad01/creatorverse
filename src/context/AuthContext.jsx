import { auth } from "../config/Firebase";
import React, { useState, useEffect, createContext,useContext } from 'react';


const AuthContext = createContext();

export const useAuth = () =>  useContext(AuthContext);

const AuthContextProvider = ({children}) => {
  const [user,setUser] = useState({});
  const [isAuth,setIsAuth] = useState(false);
  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if(user){
        setUser(user);
        setIsAuth(true);
      } else{
        setUser({});
        setIsAuth(false);
      }
    });
  },[]);
  const login = (email,password,resolve,reject)=>{
    auth.signInWithEmailAndPassword(email,password).then(resolve).catch(reject);
  }
  const logout = ()=> auth.signOut()
  const value = {user,isAuth,login,logout};
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;