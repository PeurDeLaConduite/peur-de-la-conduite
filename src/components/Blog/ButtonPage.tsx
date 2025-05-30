// src/components/button/ButtonPage.tsx
import React from "react";
import { BackButton } from "@components/button/Buttons";
// import Link from "next/link";

interface ButtonPageProps {
    href: string;
    className?: string;
}

const ButtonPage: React.FC<ButtonPageProps> = ({ href, className = "" }) => (
    <div className={`button-page ${className}`.trim()}>
        <div className="center-fixed">
            <BackButton href={href} label={""} className="button-page__back" />
        </div>
    </div>
);

export default ButtonPage;
