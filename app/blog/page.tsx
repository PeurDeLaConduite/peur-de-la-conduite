import { Metadata } from "next";
import Loader from "../../src/components/loader/Loader";
export const metadata: Metadata = {
    title: "Blog",
};
export default function Page() {
    return (
        <section className="section" id="hs">
            <div className="fixed-menu"></div>
            <h2>Le Blog</h2>
            <p>
                Cette section n&apos;est pas encore disponible, merci de votre
                patience.
            </p>
            <Loader />
        </section>
    );
}
