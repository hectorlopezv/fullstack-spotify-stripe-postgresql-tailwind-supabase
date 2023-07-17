"use client";
import AuthModal from "@/components/auth-modal";
import UploadModal from "@/components/upload-modal";

import { useEffect, useState } from "react";

type Props = {};

export default function ModalProvider({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <UploadModal />
      <AuthModal />
    </>
  );
}
