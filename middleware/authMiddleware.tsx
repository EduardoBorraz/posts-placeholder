"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/models/user.model";
import { getStorage } from "@/utils/storage";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user: User | null = getStorage("user");

  useEffect(() => {
    if (!user || !user.authenticated) {
      // El usuario no está autenticado, redirige al login
      router.push("/login");
    }
  }, [user, router]);

  return <>{children}</>;
}

export default AuthGuard;
