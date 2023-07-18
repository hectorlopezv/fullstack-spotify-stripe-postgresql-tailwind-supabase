"use client";
import useSongById from "@/hooks/use-get-song-by-id";
import useLoadSongUrl from "@/hooks/use-load-song-url";
import usePlayer from "@/hooks/use-player";
import React from "react";
import PlayerContent from "./player-content";

type Props = {};

export default function Player({}: Props) {
  const player = usePlayer();
  const { isLoading, song } = useSongById(player.activeId);
  const songUrl = useLoadSongUrl(song);
  if (!song || !songUrl || !player.activeId) return null;
  return (
    <div
      className="fixed bottom-0 bg-black w-full py-2
  h-[80px] px-4"
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
}
