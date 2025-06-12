import React from "react";
import Image from "next/image";

const ContactFormTitle = () => {
    return (
        <div className="form-title flx-c">
            <h2>Contact</h2>
            <Image
                src="https://s3.eu-west-3.amazonaws.com/assets.peur-de-la-conduite.fr/img/contact/icon/key.svg"
                alt="announcement"
                width={37}
                height={32}
                className="announcement-bg"
                loading="lazy"
            />
        </div>
    );
};

export default ContactFormTitle;
