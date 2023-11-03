import {
    json,
    type LoaderFunction,
    type LoaderFunctionArgs,
    type MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useLocalStorage } from "usehooks-ts";
import { initializeAuthFlow } from "~/util/auth";
import PhotoAlbum from "react-photo-album";

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
    // const env = context.env as Env;
    try {
        // const res = await context.CONTENT.fetch("/images");
        const body = JSON.stringify([
            {
                key: "images/CR7_09-03-2023-0.jpg",
                size: 3206084,
                src: "https://content.connorbray.net/images/CR7_09-03-2023-0.jpg",
                width: 693,
                height: 1040,
            },
            {
                key: "images/CR7_09-03-2023-1.jpg",
                size: 4644881,
                src: "https://content.connorbray.net/images/CR7_09-03-2023-1.jpg",
                width: 1225,
                height: 816,
            },
            {
                key: "images/CR7_09-03-2023-3.jpg",
                size: 7688844,
                src: "https://content.connorbray.net/images/CR7_09-03-2023-3.jpg",
                width: 693,
                height: 1040,
            },
            {
                key: "images/CR7_09-03-2023-5.jpg",
                size: 3632456,
                src: "https://content.connorbray.net/images/CR7_09-03-2023-5.jpg",
                width: 1225,
                height: 816,
            },
            {
                key: "images/CR7_09-03-2023-6.jpg",
                size: 1233359,
                src: "https://content.connorbray.net/images/CR7_09-03-2023-6.jpg",
                width: 693,
                height: 1040,
            },
        ]);
        return json(body);
    } catch (error) {
        console.log(error);
        return "Error!";
    }
};

export default function Gallery() {
    const photos = useLoaderData();
    console.log(photos);
    console.log(typeof photos);
    const imgs = JSON.parse(photos);
    console.log(imgs);
    return (
        <div className="h-full flex flex-col p-10 bg-black">
            <PhotoAlbum layout="masonry" photos={imgs} />
        </div>
    );
}
