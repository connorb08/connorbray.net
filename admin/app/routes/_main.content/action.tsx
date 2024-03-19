import type { ActionFunctionArgs } from '@remix-run/cloudflare';

export const action = ({ request, context }: ActionFunctionArgs) => {
	return new Response('OK', { status: 200 });
};
