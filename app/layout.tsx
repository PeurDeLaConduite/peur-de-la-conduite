import type { Metadata } from "next";
import localFont from "next/font/local";
import "../src/assets/styles/main.scss";
import { DrivingProvider } from "../src/utils/context/DrivingContext";
import { SearchProvider } from "../src/utils/context/SearchContext";
import { Suspense } from "react";
import HeaderProps from "./headerProps";
import { ScrollProvider } from "../src/utils/context/ScrollContext";
import ScrollSectionsWrapper from "./ScrollSectionsWrapper";
import Footer from "../src/components/footer/footer"

export const RobotoFlex = localFont({
    src: "/fonts/RobotoFlex.woff2",
    variable: "--RobotoFlex",
    weight: "100 900",
    display: "swap", 
});

const Montserrat = localFont({
    src: "./fonts/Montserrat.woff2",
    variable: "--montserrat",
    weight: "100 900",
    display: "swap", 
});

const Nunito = localFont({
    src: "./fonts/Nunito.woff2",
    variable: "--nunito",
    weight: "100 900",
    display: "swap", 
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.peur-de-la-conduite.fr/"),
    title: {
        template: '%s | Peur de la conduite',
        default: 'Peur de la conduite',
    },
    description:
        "Coaching personnalisé pour surmonter la peur de la conduite et gagner en confiance au volant. Que vous soyez conducteur novice ou confirmé, notre accompagnement sur mesure vous aide à gérer le stress, perfectionner votre conduite et maîtriser chaque situation sur la route. Bénéficiez d’un coaching adapté pour vaincre l’amaxophobie, réussir votre examen de conduite, améliorer votre trajectoire et conduire en toute sérénité.",
    authors: [{ name: "Mounir Bouakkaz" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Peur de la conduite",
        description: `
            Mounir Bouakkaz, enseignant de la conduite, vous accompagne avec un coaching personnalisé 
            pour vaincre l’amaxophobie, gérer le stress avant examen et améliorer votre maîtrise au volant.
        `,
        url: "https://www.peur-de-la-conduite.fr/",
        siteName: "Peur de la conduite",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/img/about/avatar.webp",
                width: 225,
                height: 225,
                alt: "Mounir Bouakkaz, Enseignant de la conduite",
            },
            {
                url: "https://www.facebook.com/photo/?fbid=122107253852575347&set=a.122098521692575347",
                width: 284,
                height: 267,
                alt: "Logo Peur de la Conduite sur Facebook",
            },
        ],
    },
    
  icons: {
        apple: [
            { url: "/img/favicon/apple-touch-icon.png" },  // 120x120
            { url: "/img/favicon/logo.svg", sizes: "152x152", type: "image/png" },  // iPad
            { url: "/img/favicon/logo.svg", sizes: "180x180", type: "image/png" },  // Retina
        ],

        icon : [
            { url: "/img/favicon/logo.svg", type: "image/svg+xml" },
            { url: "/img/favicon/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },  
            { url: "/img/favicon/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },  
            { url: "/img/favicon/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },  
            { url: "/img/favicon/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, 
            { url: "/img/favicon/logo.svg", sizes: "48x48", type: "image/svg+xml" },  
            { url: "/img/favicon/logo.svg", sizes: "64x64", type: "image/svg+xml" }, 
            { url: "/img/favicon/logo.svg", sizes: "270x270", type: "image/svg+xml"  },  
            { url: "/img/favicon/logo.svg", sizes: "310x310", type: "image/svg+xml"  }, 
            { url: "/img/favicon/logo.svg", sizes: "152x152", type: "image/svg+xml"  },  
            { url: "/img/favicon/logo.svg", sizes: "180x180", type: "image/svg+xml" }, 
        ],        
    },
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/", 
        media: {
            "only screen and (max-width: 900px)": "https://mobile.peur-de-la-conduite.fr/", 
            "only screen and (min-width: 900px)": "https://desktop.peur-de-la-conduite.fr/", 
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr-FR">
            <head>
                <link rel="alternate" media="only screen and (max-width: 640px)" href="https://mobile.peur-de-la-conduite.fr/"/>
                <link rel="preload" href="/defer.css" as="style" />
                <link
                    rel="stylesheet"
                    href="/defer.css"
                    fetchPriority="low"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "@id": "https://www.peur-de-la-conduite.fr/",
                        "name": "Peur de la conduite - Coaching Auto",
                        "image": [
                            "https://www.peur-de-la-conduite.fr/img/about/avatar.svg"
                        ],
                        "url": "https://www.peur-de-la-conduite.fr/",
                        "telephone": "+33 6 74 25 91 81",
                        "email": "contact.peurdelaconduite@gmail.com",
                        "description": "Coaching individuel pour surmonter l'amaxophobie, gérer le stress, réussir l'examen de conduite ou reprendre confiance au volant.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "17 Allée Didier Daurat",
                            "addressLocality": "Le Havre",
                            "addressRegion": "Normandie",
                            "postalCode": "76620",
                            "addressCountry": "FR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "49.5051",
                            "longitude": "0.1604"
                        },
                        "openingHoursSpecification": [
                            {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "07:00",
                            "closes": "20:00"
                            }
                        ],
                        "sameAs": [
                            "http://www.youtube.com/@MounirBouakkaz-r4i",
                            "https://wa.me/33674259181",
                            "https://www.tiktok.com/@peur.de.la.condui?_t=ZN-8taHCRDnmnH&_r=1",
                            "https://www.instagram.com/peurdelaconduite.fr/",
                            "https://www.facebook.com/profile.php?id=61567260421073",
                            "https://www.linkedin.com/in/mounir-bouakkaz"
                        ],
                        "founder": {
                            "@type": "Person",
                            "name": "Mounir Bouakkaz"
                        }
                        })
                    }}
                />

            </head>
            <body
                className={`${RobotoFlex.variable} ${Montserrat.variable} ${Nunito.variable}`} id="top"
            >
                <ScrollProvider>
                    <ScrollSectionsWrapper>
                        <SearchProvider>
                            <DrivingProvider>
                                <Suspense fallback={<div>Chargement du header...</div>}>
                                    <header>
                                        <div className="content-wrapper">
                                            <HeaderProps />
                                        </div>
                                    </header>
                                    <main>{children}</main>
                                    <Footer />
                                </Suspense>
                            </DrivingProvider>
                        </SearchProvider>
                    </ScrollSectionsWrapper>
                </ScrollProvider>
            </body>
        </html>
    );
}