import { LoaderFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
    request
        .text()
        .then((body) => {
            console.log(body);
        })
        .catch((err) => {
            console.log(err);
        });
    return 0;
};

export default function () {
    // const code_verifier = BASE64_URL_ENCODE(SHA256(code_verifier))
    const client_id = "";
    const grant_type = "";
    const authorization_code = "url.params.code";
    return (
        <>
            Callback page <Link to="/">Return home</Link>
        </>
    );
}
