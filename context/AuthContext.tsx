"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { userService } from "@/services/user.service";
import { UserProfile } from "@/types";
import AuthLoading from "@/components/auth/AuthLoading";

interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  authLoading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const fetchProfile = async (uid: string) => {
    try {
      const userProfile = await userService.getUser(uid);
      setProfile(userProfile);
    } catch (err) {
      console.error("Failed to load user profile from Firestore:", err);
      setProfile(null);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.uid);
    }
  };

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Load the profile details from Firestore
        await fetchProfile(currentUser.uid);
      } else {
        setProfile(null);
      }
      
      setAuthLoading(false);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, authLoading, refreshProfile }}>
      {authLoading ? <AuthLoading /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
