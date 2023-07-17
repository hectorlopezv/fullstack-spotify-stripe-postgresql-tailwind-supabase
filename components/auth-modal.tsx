"use client";
import useAuthModal from "@/hooks/use-auth-modal";
import Modal from "./modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

type Props = {};

export default function AuthModal({}: Props) {
  const isOpen = useAuthModal((state) => state.isOpen);
  const onClose = useAuthModal((state) => state.onClose);
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [router, session, onClose]);
  return (
    <Modal
      title="Test Modal"
      description="Test Description"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        providers={[]}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
}
