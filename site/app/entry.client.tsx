/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
// import { hydrate } from 'react-dom';

startTransition(() => {
	hydrateRoot(
		document,
		<StrictMode>
			<RemixBrowser />
		</StrictMode>
	);
	// Reverting to hydrate from react-dom to fix hydration issue. App uses react 17 instead of 18.
	// hydrate(
	// 	<StrictMode>
	// 		<RemixBrowser />
	// 	</StrictMode>,
	// 	document
	// );
});
