"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/models/user.model";
import { getStorage } from "@/utils/storage";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser: User | null = getStorage("user");
      //setUser(storedUser);

      if (!storedUser || !storedUser.authenticated) {
        router.push("/login");
      }
    }
  }, [router]);

  return <>{children}</>;
}

export default AuthGuard;
