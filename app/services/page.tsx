import { Metadata } from "next";
import { servicesData } from "../../src/assets/data/servicesData";
export const metadata: Metadata = {
    title: "Services",
    description:
        "Coaching personnalisé pour surmonter la peur de la conduite et gagner en confiance au volant. Que vous soyez conducteur novice ou confirmé, notre accompagnement sur mesure vous aide à gérer le stress, perfectionner votre conduite et maîtriser chaque situation sur la route. Bénéficiez d’un coaching adapté pour vaincre l’amaxophobie, réussir votre examen de conduite, améliorer votre trajectoire et conduire en toute sérénité.",
};
import React from "react";
import ServicesIcon from "../../src/components/svg_Icon/Services";
import SectionContainer from "../blog/SectionContainer";
export default function Page() {
    return (
        <SectionContainer
            id="services-page"
            title="Nos Services"
            icon={<ServicesIcon />}
        >
            {Object.values(servicesData).map((category) => (
                <React.Fragment key={category.id}>
                    <div className="ref" id={category.ref}>
                        <section className="category flx-c">
                            <h2 className="category-title">{category.title}</h2>
                            <p className="category-intro">{category.intro}</p>

                            {category.services.map((service, index) => (
                                <article
                                    key={index + "trf"}
                                    className="packs-container"
                                    id={service.id}
                                >
                                    <div className="margin-srv"></div>
                                    <div className="srvP_card-title">
                                        <div className="srvP-img">
                                            <img
                                                src={service.imgSrc}
                                                alt={service.imgAlt}
                                            />
                                        </div>
                                        <div className="srvP-h3">
                                            <h3>{service.title}</h3>
                                        </div>
                                    </div>

                                    <div className="srvP_bull-card">
                                        <div className="bull-bd">
                                            <img
                                                src="/img/utils/bulle-bd.svg"
                                                alt={service.imgAlt}
                                            />
                                        </div>
                                        <p className="service-description">
                                            {service.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                </React.Fragment>
            ))}
        </SectionContainer>
    );
}
