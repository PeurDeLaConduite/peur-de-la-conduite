import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Réservation",
};
import Reservation from "../../src/components/svg_Icon/Reservation";
import Loader from "../../src/components/loader/Loader";
import Cone from "./Cone";
import Image from "next/image";
export default async function Page() {
    return (
        <section className="section" id="s1">
            {/* <div className="fixed-menu"></div> */}
            <div className="container">
                <div>
                    <h1>Réservation</h1>
                    <p>Cette page est en construction</p>
                </div>
                <div className="ld-frame">
                    <img
                        src="/img/retroviseur-1.svg"
                        alt="loader"
                        width={480}
                        height={196}
                    />
                    <div className="ld-dot2"></div>
                    <div className="ld-dot1"></div>
                    <div className="ld-dot"></div>
                </div>
                <Image
                    className="construct"
                    src="/img/Plots-Construction.png"
                    alt="Decorative background for construct section"
                    width={1388}
                    height={691}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
