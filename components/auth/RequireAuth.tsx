"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthLoading from "./AuthLoading";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, authLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!authLoading && !user) {
      // Save current path to redirect back after login if desired
      const searchParams = new URLSearchParams();
      searchParams.set("redirect", pathname);
      router.replace(`/login?${searchParams.toString()}`);
    }
  }, [user, authLoading, router, pathname]);

  if (authLoading) {
    return <AuthLoading />;
  }

  return user ? <>{children}</> : null;
}
