import Image from "next/image";
import React from "react";

interface ContactAnnouncementProps {
    message: string;
}

const ContactAnnouncement: React.FC<ContactAnnouncementProps> = ({
    message,
}) => {
    return (
        <div className="flx-c ctc-announcement">
            <div className="flx-c">
                <Image
                    src="https://s3.eu-west-3.amazonaws.com/assets.peur-de-la-conduite.fr/img/contact/icon/announcement.svg"
                    alt="announcement"
                    width={45}
                    height={45}
                    className="announcement-bg"
                    loading="lazy"
                />
            </div>
            <p>{message}</p>
        </div>
    );
};

export default ContactAnnouncement;
