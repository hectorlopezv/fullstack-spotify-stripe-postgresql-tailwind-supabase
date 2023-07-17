"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay, FaPause } from "react-icons/fa";
type Props = {
  image: string;
  name: string;
  href: string;
};

export default function ListItem({ href, image, name }: Props) {
  const router = useRouter();
  const onClick = () => {
    // ADD aUTHERNTICATION BEFGORE PUSH
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4
  bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} fill alt={name} className="object-cover" />
      </div>
      <p className="font-medium truncate py-5 text-white">{name}</p>
      <div
        className="absolute transition opacity-0 rounded-full flex items-center justify-center
      bg-green-500 p-4 drop-shadow-sm right-5 group-hover:opacity-100 hover:scale-105"
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}
