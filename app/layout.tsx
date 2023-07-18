import getSongsByUserId from "@/actions/get-songs-by-user-id";
import Player from "@/components/player";
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

export const revalidate = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupaBaseProvider>
          <UserProvider>
            <ToastProvider />
            <ModalProvider />
            <SideBar songs={userSongs}>{children}</SideBar>
            <Player />
          </UserProvider>
        </SupaBaseProvider>
      </body>
    </html>
  );
}
