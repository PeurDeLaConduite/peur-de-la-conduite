"use client";
import { useEffect } from "react";

export default function MobileRedirect() {
    useEffect(() => {
        if (window.innerWidth < 900) {
            // Définition du cookie
            document.cookie = `deviceType=mobile; path=/; domain=.peur-de-la-conduite.fr; Secure; SameSite=Strict`;

            // Redirection vers la version mobile
            window.location.href =
                "https://peur-de-la-conduite.fr" +
                window.location.pathname +
                window.location.search;
        }
    }, []);

    return null;
}
