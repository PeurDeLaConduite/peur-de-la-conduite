"use client";

import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";

export default function Seo() {
    return (
        <>
            <DefaultSeo
                titleTemplate="%s | Peur de la conduite"
                defaultTitle="Peur de la conduite"
                description="Coaching personnalisé pour surmonter la peur de la conduite et gagner en confiance au volant. Que vous soyez novice ou confirmé, notre accompagnement sur mesure vous aide à gérer le stress, perfectionner votre conduite et maîtriser chaque situation sur la route."
                canonical="https://www.peur-de-la-conduite.fr/"
                openGraph={{
                    type: "website",
                    locale: "fr_FR",
                    url: "https://www.peur-de-la-conduite.fr/",
                    site_name: "Peur de la conduite",
                    title: "Peur de la conduite",
                    description:
                        "Mounir Bouakkaz vous accompagne avec un coaching sur mesure pour vaincre l’amaxophobie, réussir votre examen de conduite et conduire en toute sérénité.",
                    images: [
                        {
                            url:
                                "https://www.peur-de-la-conduite.fr/img/about/avatar.svg",
                            width: 225,
                            height: 225,
                            alt: "Photo de Mounir Bouakkaz",
                            type: "image/svg+xml",
                        },
                    ],
                }}
                twitter={{
                    handle: "@peurdelaconduite",
                    site: "@peurdelaconduite",
                    cardType: "summary_large_image",
                }}
            />

            <LocalBusinessJsonLd
                type="ProfessionalService"
                id="https://www.peur-de-la-conduite.fr/"
                name="Peur de la conduite - Coaching Auto"
                description="Coaching individuel pour surmonter l'amaxophobie, gérer le stress, réussir l'examen de conduite ou reprendre confiance au volant."
                url="https://www.peur-de-la-conduite.fr/"
                telephone="+33612345678"
                address={{
                    streetAddress: "10 Rue Denis Cordonnier",
                    addressLocality: "Le Havre",
                    addressRegion: "Normandie",
                    postalCode: "76610",
                    addressCountry: "FR",
                }}
                geo={{
                    latitude: "49.5116",
                    longitude: "0.1176",
                }}
                sameAs={[
                    "https://www.facebook.com/peurdelaconduite",
                    "https://www.instagram.com/peurdelaconduite",
                ]}
                images={[
                    "https://www.peur-de-la-conduite.fr/img/about/avatar.svg",
                ]}
                openingHours={[
                    {
                        opens: "08:00",
                        closes: "19:00",
                        dayOfWeek: [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ],
                    },
                ]}
            />
        </>
    );
}
