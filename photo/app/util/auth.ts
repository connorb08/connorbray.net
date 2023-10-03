import { NavigateFunction } from "@remix-run/react";

export const initializeAuthFlow = (clientID: string, navigate: NavigateFunction) => {
    // const scope = "openid,offline_access,creative_sdk"
    const scope = "openid"
    const response_type = "code"
    const code_challenge = "c9vBtg5G7DupTxSYODrpd2LpBeECiSTTQtQclGNMklM"
    const code_challenge_method = "S256"


    const endpoint = `https://ims-na1.adobelogin.com/ims/authorize/v2?client_id=${clientID}&scope=${scope}&response_type=${response_type}&code_challenge=${code_challenge}&code_challenge_method=${code_challenge_method}`

    // https://ims-na1.adobelogin.com/ims/authorize/v2?client_id=6c7f6d367261400d97822fcbf71bc5fe&response_type=code&scope=openid&code_challenge=c9vBtg5G7DupTxSYODrpd2LpBeECiSTTQtQclGNMklM&code_challenge_method=S256
    // console.log(endpoint);
    window.location.href = endpoint;
    // return 0;
}



const getToken = async (clientID: string) => {
    const endpoint = `https://ims-na1.adobelogin.com/ims/token/v3?client_id=${clientID}`;
    var details = {
        code: "AUTHORIZATION_CODE",
        grant_type: "authorization_code",
        code_verifier: "CODE_VERIFIER",
    };

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        // @ts-ignore
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    const body = formBody.join("&");

    const req = new Request(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
    });
    console.log("redirect!");

    fetch(req)
        .then((res) => {
            console.log("ok!");
            console.log(res);
        })
        .catch((error) => {
            console.log("error!");
            console.log(error);
        });

    // window.location.href = `google.com`;
};