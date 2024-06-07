import type { MetaFunction } from '@remix-run/cloudflare';
import {
	Links,
	Meta,
	Outlet,
	PrefetchPageLinks,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import './globals.css';
import './tailwind.css';
import '@radix-ui/colors/grass.css';
import '@radix-ui/colors/sage.css';
import '@radix-ui/colors/blue.css';
import '@radix-ui/colors/green-dark.css';

export const meta: MetaFunction = () => {
	return [
		{ title: 'connorbray.net' },
		{
			name: 'description',
			content: 'My personal site.',
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
				{/* Defer loading of font stylesheet */}
				<link
					rel="preload"
					as="style"
					href="https://fonts.connorbray.net/fonts/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					onLoad={(e) => {
						e.currentTarget.onload = null;
						e.currentTarget.rel = 'stylesheet';
					}}
				/>
				<noscript>
					<link
						rel="stylesheet"
						href="https://fonts.connorbray.net/fonts/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					/>
				</noscript>
				<Meta />
				<Links />
			</head>
			<body className="min-h-full bg-primary-1 overscroll-none flex flex-col dark">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<PrefetchPageLinks page="/gallery" />
				<PrefetchPageLinks page="/about" />
			</body>
		</html>
	);
}
