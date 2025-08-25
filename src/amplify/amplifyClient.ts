import { Amplify } from "aws-amplify";

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: "eu-west-3_cVrLIne9H",
        userPoolClientId: "2o648gc7uffevblkuj47lnrfaq",
        loginWith: { email: true },
      },
    },
  });
}
