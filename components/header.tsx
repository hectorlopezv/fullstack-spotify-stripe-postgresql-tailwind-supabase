"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import Button from "./button";
import useAuthModal from "@/hooks/use-auth-modal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/use-user";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
type Props = {
  children: ReactNode;
  className?: string;
};

export default function Header({ children, className }: Props) {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const useModal = useAuthModal();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error("Error logging out, please try again.");
    }
  };
  return (
    <div
      className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => {
              router.back();
            }}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>

          <button
            onClick={() => {
              router.forward();
            }}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="rounded-full p-2 bg-white flex items-center justify-center
          hover:opacity-75 transition"
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="rounded-full p-2 bg-white flex items-center justify-center
          hover:opacity-75 transition"
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gapx-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button className="bg-white px-6 py-2" onClick={handleLogout}>
                Logout
              </Button>
              <Button
                className="bg-white"
                onClick={() => {
                  router.push("/account");
                }}
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={useModal.onOpen}
                >
                  SignUp
                </Button>
              </div>
              <div>
                <Button
                  className="bg-white px-6 py-2"
                  onClick={useModal.onOpen}
                >
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
