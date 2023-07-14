import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Box({ children, className }: Props) {
  return (
    <div className={cn("bg-neutral-900 rounded-lg h-fit w-full", className)}>
      {children}
    </div>
  );
}
