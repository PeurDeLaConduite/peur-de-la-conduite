import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Informations-légales",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/informations-legales",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/informations-legales",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/informations-legales",
        },
    },
};
import PrivacyPolicy from "../../src/components/PrivacyPolicy";
import TermsOfUse from "../../src/components/TermsOfUse";
export default async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h1 className="pp_title">Informations légales</h1>
                <TermsOfUse />
                <PrivacyPolicy />
            </div>
        </section>
    );
}
