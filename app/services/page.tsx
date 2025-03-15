import { Metadata } from "next";
import { servicesData } from "../../src/assets/data/servicesData";
export const metadata: Metadata = {
    title: "Services",
};
import React from "react";
import Services from "../../src/components/svg_Icon/Services";

export default function Page() {
    return (
        <section className="section page" id="services-page">
            <div className="fixed-menu"></div>
            <div className="container">
                <div className="page-title">
                    <Services />
                    <h1 className="title">Nos Services</h1>
                </div>
                {Object.values(servicesData).map((category) => (
                    <React.Fragment key={category.id}>
                        <div className="ref" id={category.ref}>
                            <div className="fixed-menu"></div>
                            <section className="category flx-c">
                                <h2 className="category-title">
                                    {category.title}
                                </h2>
                                <p className="category-intro">
                                    {category.intro}
                                </p>

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
            </div>
        </section>
    );
}
