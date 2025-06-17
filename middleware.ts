import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const ua = request.headers.get("user-agent") || "";
    const isBot = /bot|crawl|slurp|spider|mediapartners/i.test(ua);
    if (isBot) return NextResponse.next();

    const isTablet =
        /(iPad|Tablet)/i.test(ua) ||
        (/(Android)/i.test(ua) && !/Mobile/i.test(ua));
    const isMobile =
        !isTablet &&
        /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    // Si mobile → redirige vers le sous-domaine mobile
    if (isMobile) {
        const destination = `https://mobile.peur-de-la-conduite.fr${request.nextUrl.pathname}${request.nextUrl.search}`;
        return NextResponse.redirect(destination);
    }

    // Sinon (desktop, tablette, bots…) → ne fais rien
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/((?!_next|api|robots.txt|sitemap.xml|favicon.ico).*)"],
};
