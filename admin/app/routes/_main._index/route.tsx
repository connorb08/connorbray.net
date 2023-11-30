import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [{ title: 'Admin Dashboard' }];
};

export default function Index() {
	return <Link to="/content">Content</Link>;
}
