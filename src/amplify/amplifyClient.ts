"use client";

import { Amplify } from "aws-amplify";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
        userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
        domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
        signInRedirectURI: `${process.env.NEXT_PUBLIC_APP_URL!}/auth/callback`,
        signOutRedirectURI: `${process.env.NEXT_PUBLIC_APP_URL!}`
      }
    }
  } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
}
