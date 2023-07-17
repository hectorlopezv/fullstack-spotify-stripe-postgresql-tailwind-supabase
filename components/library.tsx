"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/use-auth-modal";
import { useUser } from "@/hooks/use-user";
import useUploadModal from "@/hooks/use-upload-modal";
type Props = {};

export default function Library({}: Props) {
  const onOpen = useAuthModal((state) => state.onOpen);
  const onOpenSongModal = useUploadModal((state) => state.onOpen);

  const { user } = useUser();
  const onClick = () => {
    if (!user) {
      return onOpen();
    }
    onOpenSongModal();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-500" size={24} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
    </div>
  );
}
