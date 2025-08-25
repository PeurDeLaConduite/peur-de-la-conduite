import { Amplify } from "aws-amplify";

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: "eu-west-3_cVrLIne9H", // ⚠️ ton vrai UserPoolId
            userPoolClientId: "2o648gc7uffevblkuj47lnrfaq", // ⚠️ ton vrai App Client Id
            loginWith: { email: true },
        },
    },
});
