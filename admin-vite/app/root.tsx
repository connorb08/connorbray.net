// import {
//   Links,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "@remix-run/react";
// import "./tailwind.css";

import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
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

export const meta: MetaFunction = () => {
	return [{ title: 'Admin Dashboard' }];
};

export function Layout({ children }: { children: React.ReactNode }) {
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
					appearance="light"
					accentColor="cyan"
					grayColor="slate"
					asChild
				>
					<div className="h-full">{children}</div>
				</Theme>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

// export default function App() {
// 	return (
// 		<html lang="en" className="h-full">
// 			<head>
// 				<meta charSet="utf-8" />
// 				<meta
// 					name="viewport"
// 					content="width=device-width, initial-scale=1"
// 				/>
// 				<Meta />
// 				<Links />
// 			</head>

// 			<body className="h-full">
// 				<Theme
// 					appearance="light"
// 					accentColor="cyan"
// 					grayColor="slate"
// 					asChild
// 				>
// 					<div className="h-full">
// 						<Outlet />
// 					</div>
// 				</Theme>
// 				<ScrollRestoration />
// 				<Scripts />
// 				<LiveReload />
// 			</body>
// 		</html>
// 	);
// }

export default function App() {
	return <Outlet />;
}
