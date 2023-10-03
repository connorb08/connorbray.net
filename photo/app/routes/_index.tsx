import type {
    LoaderFunction,
    LoaderFunctionArgs,
    MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useLocalStorage } from "usehooks-ts";
import { initializeAuthFlow } from "~/util/auth";
import PhotoAlbum from "react-photo-album";
import { Env } from "remix.env";

export const meta: MetaFunction = () => {
    return [
        { title: "Photos" },
        { name: "description", content: "Connor Bray Photos" },
    ];
};

// curl -X POST '' \
//   -H 'Content-Type: application/x-www-form-urlencoded' \
//   -d 'code={AUTHORIZATION_CODE}&grant_type=authorization_code&code_verifier={CODE_VERIFIER}'

export function Index() {
    const [clientID, setClientID] = useLocalStorage("cliend_id", "");
    const navigate = useNavigate();

    return (
        <div>
            <input
                value={clientID}
                onChange={(e) => setClientID(e.target.value)}
            />
            <button onClick={() => initializeAuthFlow(clientID, navigate)}>
                Login
            </button>
        </div>
    );
}

export const loader: LoaderFunction = async ({ context, params }) => {
    const env = context.env as Env;
    try {
        console.log("loader");
        const res = await env.CONTENT.fetch("/images");
        const body = await res.json();
        console.log(body);
        return body;
    } catch (error) {
        console.log(error);
        return "Error!";
    }
};

export default function Gallery() {
    const photos = useLoaderData();
    console.log(photos);
    return <PhotoAlbum layout="rows" photos={photos} />;
}
