import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {},

    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        // ignoreBuildErrors: true,
    },

    async headers() {
        return [
            {
                source: "/img/favicon/logo.svg",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=36000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
