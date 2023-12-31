import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
    ...(cssBundleHref
        ? [
              { rel: "stylesheet", href: cssBundleHref },
              { rel: "stylesheet", href: stylesheet },
          ]
        : [{ rel: "stylesheet", href: stylesheet }]),
];

export const meta: MetaFunction = () => {
    return [
        { title: "Connor Bray" },
        {
            name: "description",
            content: "My personal site",
        },
    ];
};

export default function App() {
    return (
        <html lang="en" className="h-full">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.connorbray.net" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.connorbray.net/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <Meta />
                <Links />
            </head>
            <body className="h-full bg-primary-1 overscroll-none flex flex-col">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
