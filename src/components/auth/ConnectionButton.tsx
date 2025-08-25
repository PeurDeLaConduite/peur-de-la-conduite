"use client";

import { signInWithRedirect, signOut } from "aws-amplify/auth";
import { useAuth } from "./AuthProvider";

export default function ConnectionButton({ label }: { label: string }) {
  const { user } = useAuth();

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (user) {
      await signOut();
    } else {
      await signInWithRedirect();
    }
  };

  return (
    <button onClick={handleClick} className="head-link connection-btn">
      <span className="nav-link">{label}</span>
    </button>
  );
}

