import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Mentions-légales",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/mentions-legales",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/mentions-legales",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/mentions-legales",
        },
    },
};
import LegalNotices from "../../src/components/Legal/LegalNotices";

export default async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h1 className="pp_title">Mentions légales</h1>
                <LegalNotices />
            </div>
        </section>
    );
}
