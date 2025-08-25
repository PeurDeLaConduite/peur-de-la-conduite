"use client";

import { Auth } from "aws-amplify";

export default function ConnectionButton({ label }: { label: string }) {
    const handleSignIn = () => {
        Auth.federatedSignIn(); // Cognito Hosted UI
    };

    return (
        <button
            type="button"
            onClick={handleSignIn}
            className="head-link connection-btn"
        >
            <span className="nav-link">{label}</span>
        </button>
    );
}
