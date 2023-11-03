import type { MetaFunction } from "@remix-run/cloudflare";
import Hero from "~/components/Hero";

export const meta: MetaFunction = () => {
    return [{ title: "connorbray.net" }];
};

export default function Index() {
    return (
        <>
            <Hero />
        </>
    );
}
