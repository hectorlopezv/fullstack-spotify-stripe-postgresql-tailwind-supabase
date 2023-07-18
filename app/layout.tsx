import getActiveProductsWithPrices from "@/actions/get-active-products-with-prices";
import getSongsByUserId from "@/actions/get-songs-by-user-id";
import Player from "@/components/player";
import SideBar from "@/components/sidebar";
import SubscribeModal from "@/components/subscribe-modal";
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
  const products = await getActiveProductsWithPrices();
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupaBaseProvider>
          <UserProvider>
            <ToastProvider />
            <ModalProvider />
            <SubscribeModal products={products} />
            <SideBar songs={userSongs}>{children}</SideBar>
            <Player />
          </UserProvider>
        </SupaBaseProvider>
      </body>
    </html>
  );
}
