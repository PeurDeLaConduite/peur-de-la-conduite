import { Metadata } from "next";
export const metadata: Metadata = {
    title: "informations-legales",
};
import PrivacyPolicy from "../../src/components/PrivacyPolicy";
export default async function Page() {
    // await new Promise((r) => setTimeout(r, 1000));
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <PrivacyPolicy />
            </div>
        </section>
    );
}
