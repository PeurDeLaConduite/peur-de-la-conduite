"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { handleSignIn } = ((await import(
        "aws-amplify/auth"
      )) as unknown) as {
        handleSignIn: () => Promise<void>;
      };
      await handleSignIn();
      router.replace("/");
    })();
  }, [router]);

  return <p>Chargement...</p>;
}
