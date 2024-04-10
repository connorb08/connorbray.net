import type { ActionFunctionArgs } from '@remix-run/cloudflare';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const action = ({ request, context }: ActionFunctionArgs) => {
	return new Response('OK', { status: 200 });
};
