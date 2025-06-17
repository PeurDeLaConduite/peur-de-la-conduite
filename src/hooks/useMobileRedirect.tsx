"use client";

import { useEffect } from "react";

export function useMobileRedirect(options?: {
    breakpoint?: number;
    mobileDomain?: string;
}) {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const {
            breakpoint = 900,
            mobileDomain = "mobile.peur-de-la-conduite.fr",
        } = options || {};

        const isMobile = window.innerWidth < breakpoint;
        const onMobileDomain = window.location.hostname.startsWith("mobile.");

        if (isMobile && !onMobileDomain) {
            // Redirige uniquement si pas déjà sur mobile
            const dest =
                "https://" +
                mobileDomain +
                window.location.pathname +
                window.location.search +
                window.location.hash;
            window.location.replace(dest);
        }
        // Optionnel: l'inverse pour forcer le desktop → à compléter si besoin
    }, []);
}
