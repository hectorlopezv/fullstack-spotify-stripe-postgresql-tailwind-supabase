import SideBar from "@/components/sidebar";
import ModalProvider from "@/providers/modal-provider";
import SupaBaseProvider from "@/providers/supabase-provider";
import ToastProvider from "@/providers/toast-provider";
import UserProvider from "@/providers/user-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify clone next13",
  description: "Spotify clone next13, strype, supabase, postgresql, tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupaBaseProvider>
          <UserProvider>
            <ToastProvider />
            <ModalProvider />
            <SideBar>{children}</SideBar>
          </UserProvider>
        </SupaBaseProvider>
      </body>
    </html>
  );
}
