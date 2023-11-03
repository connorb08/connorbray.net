import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import tailwind from "~/tailwind.css";

export const links: LinksFunction = () => [
    ...(cssBundleHref
        ? [
              { rel: "stylesheet", href: cssBundleHref },
              { rel: "stylesheet", href: tailwind },
          ]
        : [{ rel: "stylesheet", href: tailwind }]),
];

export default function App() {
    return (
        <html lang="en" className="h-full">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="h-full">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}