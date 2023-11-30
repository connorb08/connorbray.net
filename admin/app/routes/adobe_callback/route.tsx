import { LoaderFunctionArgs, json, redirect } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';

// export const loader = async ({ request }: LoaderFunctionArgs) => {
// 	const url = new URL(request.url);
// 	const code = url.searchParams.get('code');

// 	if (!code) {
// 		return redirect('/');
// 	}

// 	try {
// 		const res = await fetch(token_endpoint, {
// 			method: 'POST',
// 			headers: {
// 				Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
// 				'Content-Type':
// 					'application/x-www-form-urlencoded;charset=UTF-8',
// 			},
// 			body: new URLSearchParams({
// 				authorization_code: code,
// 				grant_type: 'authorization_code',
// 			}),
// 		});

// 		return json({
// 			res: res.status,
// 			text: res.statusText,
// 			body: await res.text(),
// 		});
// 	} catch (e) {
// 		console.error(e);
// 		return json({
// 			res: 500,
// 			text: 'Internal Server Error',
// 			body: 'none',
// 		});
// 	}
// };

export default function () {
	// const { res, text, body } = useLoaderData<typeof loader>();

	return (
		<>
			{/* Callback page. Res: {res}: {text}
			<br />
			Body: {body}
			<br />
			<Link to="/">Home</Link>
			<br />
			<Link to="/adobe">Adobe</Link> */}
			H
		</>
	);
}
