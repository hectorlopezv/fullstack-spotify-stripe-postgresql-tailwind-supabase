"use client";
import LikeButton from "@/components/like-button";
import MediaItem from "@/components/media-items";
import { useUser } from "@/hooks/use-user";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  likedSongs: Song[];
};

export default function LikedContent({ likedSongs }: Props) {
  const router = useRouter();
  const { user, isLoading } = useUser();
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, router, user]);
  if (likedSongs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full p-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {likedSongs.map((song) => (
        <div className="flex items-center gap-x-4 w-full" key={song.id}>
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
