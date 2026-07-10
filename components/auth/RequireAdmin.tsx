"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthLoading from "./AuthLoading";

export default function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { user, profile, authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!user || !profile || profile.role !== "admin") {
        router.replace("/");
      }
    }
  }, [user, profile, authLoading, router]);

  if (authLoading) {
    return <AuthLoading />;
  }

  const isAdmin = user && profile && profile.role === "admin";

  return isAdmin ? <>{children}</> : null;
}
