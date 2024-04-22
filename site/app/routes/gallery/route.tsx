// Imports
import { useState } from 'react';
import { json } from '@remix-run/cloudflare';
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import PhotoAlbum, { type Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import {
	Fullscreen,
	Slideshow,
	Thumbnails,
	Zoom,
} from 'yet-another-react-lightbox/plugins';
import Header from './Header';
import { dev_data } from './dev_data';

// CSS imports
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

/* v8 ignore start */
export const meta: MetaFunction = () => {
	return [
		{ title: 'Photo Gallery' },
		{
			name: 'description',
			content: 'Photo Gallery.',
		},
	];
};
/* v8 ignore stop */

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const env = context.env as Env;

	// Return test data if in dev mode
	/* v8 ignore start */
	// @ts-ignore
	if (process.env.NODE_ENV === 'development') {
		return json({ data: dev_data });
	}
	/* v8 ignore stop */

	try {
		const images = await env.CONTENT.list({
			prefix: 'gallery/',
			include: ['customMetadata'],
		});
		const files = images.objects;
		const data = files
			.filter((file) => {
				return (
					file.size &&
					file.customMetadata?.height &&
					file.customMetadata?.width
				);
			})
			.map((file) => {
				return {
					src: `https://connorbray.net/cdn-cgi/image/format=auto/https://content.connorbray.net/${file.key}`,
					height: Number(file.customMetadata?.height) || 0,
					width: Number(file.customMetadata?.width) || 0,
					srcSet: [
						{
							src: `https://connorbray.net/cdn-cgi/image/format=auto,fit=scale-down,width=${Math.floor(
								Math.floor(
									(Number(file.customMetadata?.width) || 0) /
										2
								)
							)}/https://content.connorbray.net/${file.key}`,
							height:
								Math.floor(
									Number(file.customMetadata?.height) / 2
								) || 0,
							width:
								Math.floor(
									Number(file.customMetadata?.width) / 2
								) || 0,
						},
						{
							src: `https://connorbray.net/cdn-cgi/image/format=auto,fit=scale-down,width=${Math.floor(
								(Number(file.customMetadata?.width) || 0) / 3
							)}/https://content.connorbray.net/${file.key}`,
							height:
								Math.floor(
									Number(file.customMetadata?.height) / 3
								) || 0,
							width:
								Math.floor(
									Number(file.customMetadata?.width) / 3
								) || 0,
						},
					],
				};
			});
		return json(
			{ data },
			{
				headers: { 'Cache-Control': 'public, max-age=3600' },
			}
		);
	} catch (error) {
		/* v8 ignore start */
		console.log('Error fetching gallery images:');
		console.log(error);
		return new Response('Server Error', { status: 500 });
	}
	/* v8 ignore stop */
};

export default function Gallery() {
	const { data } = useLoaderData<typeof loader>() as unknown as {
		data: Photo[];
	};
	const [index, setIndex] = useState(-1);

	return (
		<div className="flex-1 min-h-full flex flex-col">
			<Header />
			<div className="flex flex-col flex-1 p-4">
				{/* v8 ignore start */}
				<PhotoAlbum
					layout="rows"
					columns={(containerWidth) => {
						if (containerWidth < 400) return 2;
						if (containerWidth < 800) return 3;
						return 4;
					}}
					photos={data}
					onClick={({ index }) => setIndex(index)}
					componentsProps={() => ({
						imageProps: {
							loading: 'eager',
							decoding: 'sync',
						},
					})}
				/>
				<Lightbox
					slides={data}
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
					plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
				/>
				{/* v8 ignore stop */}
			</div>
		</div>
	);
}
