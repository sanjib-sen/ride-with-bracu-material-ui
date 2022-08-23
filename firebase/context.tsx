import { useEffect, useState, createContext, useContext } from "react";
import { ContextState } from "../types/ContextState";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";
export const FirebaseAuthContext = createContext<ContextState | undefined>(
  undefined
);

function FirebaseAuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const value = { user };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth };
