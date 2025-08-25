"use client";

import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { configureAmplify } from "@src/amplify/amplifyClient";

interface AuthContextValue {
  user: unknown | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<unknown | null>(null);

  useEffect(() => {
    configureAmplify();

    const fetchUser = async () => {
      try {
        const current = await getCurrentUser();
        setUser(current);
      } catch {
        setUser(null);
      }
    };

    fetchUser();

    const unsubscribe = Hub.listen("auth", () => {
      fetchUser();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({ user, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
