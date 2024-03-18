import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrate } from 'react-dom';
// import { hydrateRoot } from 'react-dom/client';

startTransition(() => {
	hydrate(
		<StrictMode>
			<RemixBrowser />
		</StrictMode>,
		document
	);
});
