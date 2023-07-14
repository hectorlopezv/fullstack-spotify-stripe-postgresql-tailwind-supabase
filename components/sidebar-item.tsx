import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
};

export default function SideBarItem({
  active,
  href,
  icon: Icon,
  label,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        `flex flex-row items-center h-auto w-full gap-x-4 text-md font-medium
        cursor-pointer hover:text-white transition text-neutral-400 py-1
        `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}
