"use client";
import React, { createContext, useContext } from "react";

import { User } from "@/models/user.model";
import { getStorage } from "@/utils/storage";

interface UserContextType {
  user: User | null;
}
interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export const UserProvider = ({ children }: Props) => {
  const user: User | null = getStorage("user");

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
