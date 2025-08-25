"use client";

import { useEffect, useRef } from "react";
import { signInWithRedirect } from "aws-amplify/auth";

export default function ConnectionButton({ label }: { label: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = linkRef.current;
    if (!element) return;

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      signInWithRedirect();
    };

    element.addEventListener("click", handleClick);
    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <a ref={linkRef} href="#" className="head-link connection-btn">
      <span className="nav-link">{label}</span>
    </a>
  );
}
