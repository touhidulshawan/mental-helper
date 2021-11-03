import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup
  const signup = async (user) => {
    const { firstName, lastName, email, password } = user;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
      router.push("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  // login
  const router = useRouter();

  const login = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/feed");
    } catch (error) {
      return "Credentials mismatch or User does not exits!";
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
    login,
    currentUser,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
