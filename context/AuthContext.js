import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, database } from "../utils/firebase";
import { ref, set } from "firebase/database";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // signup
  const signup = async (user) => {
    const { firstName, lastName, email, password } = user;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
      router.push("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  // login

  const login = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/feed");
    } catch (error) {
      return "Credentials mismatch or User does not exits!";
    }
  };

  // update Profile
  const updateUserProfile = async ({ firstName, lastName, bio }) => {
    let isUpdateFinished = false;
    try {
      const fullName = `${firstName} ${lastName}`;
      if (auth.currentUser.displayName !== fullName) {
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
        });
        isUpdateFinished = true;
      }
      if (bio !== "") {
        set(ref(database, "bio/" + auth.currentUser.uid), {
          bio,
        });
        isUpdateFinished = true;
      }
      return isUpdateFinished;
    } catch (error) {
      return isUpdateFinished;
    }
  };

  // reset Password

  const resetPassword = async ({ email }) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (err) {
      return false;
    }
  };

  const logout = async () => {
    try {
      router.push("/");
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
    updateUserProfile,
    resetPassword,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
