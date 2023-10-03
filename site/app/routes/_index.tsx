import type { V2_MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Hero from "~/components/Hero";

export const meta: V2_MetaFunction = () => {
    return [{ title: "connorbray.net" }];
};

export default function Index() {
    return (
        <>
            <Hero />
        </>
    );
}
