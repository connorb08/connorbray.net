import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

// Styling
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './tailwind.css';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => {
	return [{ title: 'Admin Dashboard' }];
};

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
				<Theme
					appearance="dark"
					accentColor="iris"
					grayColor="mauve"
					asChild
				>
					<div className="h-full">
						<Outlet />
					</div>
				</Theme>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
