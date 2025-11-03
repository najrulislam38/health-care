"use client";
import { IUser } from "@/types/user.types";
import checkAuth from "@/utils/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContextInterface {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = createContext<UserContextInterface | undefined>(undefined);

export const UseUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider.");
  }
  return context;
};

export const UserProvider = ({
  initialUser,
  children,
}: {
  initialUser?: IUser | null;
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUser | null>(initialUser ?? null);

  useEffect(() => {
    const revalidateUser = async () => {
      try {
        const res = await checkAuth();
        setUser(res.user);
      } catch {
        setUser(null);
      }
    };
    if (!user) {
      revalidateUser();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
