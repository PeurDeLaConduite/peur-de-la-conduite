import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Réservation",
};
import Reservation from "../../src/components/svg_Icon/Reservation";
import Loader from "../../src/components/loader/Loader";
import Cone from "./Cone";
export default async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="container">
                <div>
                    <h1>Réservation</h1>
                    <p>Cette page est en construction</p>
                </div>
                <div className="ld-frame">
                    <img src="/img/retroviseur-1.svg" alt="loader" />
                    <div className="ld-dot2"></div>
                    <div className="ld-dot1"></div>
                    <div className="ld-dot"></div>
                </div>
                <div className="canvas">
                    <Cone />
                </div>
            </div>
        </section>
    );
}
