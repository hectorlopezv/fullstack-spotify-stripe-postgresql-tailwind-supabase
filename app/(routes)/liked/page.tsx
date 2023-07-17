import getLikedSongs from "@/actions/get-liked-songs";
import Header from "@/components/header";
import Image from "next/image";
import LikedContent from "./components/liked-content";

type Props = {};
export const revalidate = 0;
export default async function Liked({}: Props) {
  const likedSongs = await getLikedSongs();
  return (
    <div
      className="bg-neutral-900 rounded-lg w-full h-full 
    overflow-hidden overflow-y-auto"
    >
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                fill
                src="/images/liked.png"
                alt="playlist"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden mdLblock font-semibold text-sm">Playlist</p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent likedSongs={likedSongs} />
    </div>
  );
}
