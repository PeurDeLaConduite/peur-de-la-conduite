"use client";
import { useEffect, useCallback } from "react";

export default function MobileRedirect() {
    const handleRedirect = useCallback(() => {
        if (window.innerWidth < 900) {
            const target = `https://mobile.peur-de-la-conduite.fr${window.location.pathname}${window.location.search}`;
            window.location.href = target;
        }
    }, []);

    useEffect(() => {
        handleRedirect();
    }, [handleRedirect]);

    return null;
}
