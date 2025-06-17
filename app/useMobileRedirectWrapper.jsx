"use client";

import React from "react";
import { useMobileRedirect } from "@/src/hooks/useMobileRedirect";

const useMobileRedirectWrapper = ({ children }) => {
    useMobileRedirect();
    return <>{children}</>;
};

export default useMobileRedirectWrapper;
