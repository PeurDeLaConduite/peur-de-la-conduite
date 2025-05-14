import { Metadata } from "next";
export const metadata: Metadata = {
    title: "informations-legales",
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
