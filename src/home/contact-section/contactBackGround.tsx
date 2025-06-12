import React from "react";
import Image from "next/image";

const ContactBackGround = () => {
    return (
        <Image
            className="contact-bg"
            src="https://s3.eu-west-3.amazonaws.com/assets.peur-de-la-conduite.fr/img/contact/bg-contact.svg"
            alt="Decorative background for contact section"
            width={1440}
            height={1587}
            loading="lazy"
        />
    );
};

export default ContactBackGround;
