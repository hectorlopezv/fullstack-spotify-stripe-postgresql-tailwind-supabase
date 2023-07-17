import { MyUserContextProvider } from "@/hooks/use-user";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: Props) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}
