import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      await addDoc(collection(db, "users"), { ...user });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {}
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    signup,
    currentUser,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};