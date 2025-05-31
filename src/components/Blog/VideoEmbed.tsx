"use client";

import React, { useEffect } from "react";

function getYouTubeId(url?: string): string | null {
    if (typeof url !== "string") return null;
    try {
        const u = new URL(url);
        if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
        if (u.hostname.includes("youtube.com")) {
            if (u.pathname.startsWith("/shorts/"))
                return u.pathname.split("/")[2];
            if (u.pathname.startsWith("/embed/"))
                return u.pathname.split("/")[2];
            if (u.pathname.startsWith("/v/")) return u.pathname.split("/")[2];
            return u.searchParams.get("v");
        }
    } catch {}
    return null;
}

function isYoutubeShort(url?: string) {
    if (!url) return false;
    try {
        const u = new URL(url);
        return (
            u.hostname.includes("youtube.com") &&
            u.pathname.startsWith("/shorts/")
        );
    } catch {
        return false;
    }
}

function getTikTokId(url?: string): string | null {
    if (typeof url !== "string") return null;
    const m = url.match(
        /(?:tiktok\.com\/@[^/]+\/video\/|vm\.tiktok\.com\/)(\d+)/
    );
    return m?.[1] ?? null;
}

type Props = {
    url?: string;
    title?: string;
    iframeAllow?: string | false;
    iframeTabIndex?: number | false;
};

const VideoEmbed: React.FC<Props> = ({
    url,
    title,
    iframeAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    iframeTabIndex = 0,
}) => {
    const ytId = getYouTubeId(url);
    const tkId = getTikTokId(url);
    const isShort = isYoutubeShort(url);

    useEffect(() => {
        if (!tkId) return;
        const SCRIPT_ID = "__tiktok-embed-js";
        if (!document.getElementById(SCRIPT_ID)) {
            const s = document.createElement("script");
            s.id = SCRIPT_ID;
            s.src = "https://www.tiktok.com/embed.js";
            s.async = true;
            document.body.appendChild(s);
        }
    }, [tkId]);

    if (ytId) {
        return (
            <div
                className={`video-embed${isShort ? " video-embed--short" : ""}`}
            >
                <iframe
                    className="video-embed__iframe"
                    src={`https://www.youtube.com/embed/${ytId}?playsinline=1`}
                    {...(iframeAllow !== false ? { allow: iframeAllow } : {})}
                    allowFullScreen
                    title={title || "YouTube video"}
                    {...(iframeTabIndex !== false
                        ? { tabIndex: iframeTabIndex }
                        : {})}
                />
            </div>
        );
    }

    if (tkId) {
        return (
            <blockquote
                className="tiktok-embed"
                cite={url}
                data-video-id={tkId}
                style={{ maxWidth: 605, minWidth: 325 }}
            >
                <section>Chargement de la vidéo TikTok…</section>
            </blockquote>
        );
    }

    return null;
};

export default React.memo(VideoEmbed);
