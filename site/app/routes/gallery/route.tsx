/**
 * Library Imports
 */
import { useState } from 'react';
import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import PhotoAlbum, { type Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
	Fullscreen,
	Slideshow,
	Thumbnails,
	Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

/**
 * Component Imports
 */
import Header from '../../components/Gallery/Header';
import { dev_data } from '../../components/Gallery/dev_data';

/**
 *  Type Imports
 */
import type { Env } from 'remix.env';

/**
 * Loader
 */
export const loader = async ({ context }: LoaderFunctionArgs) => {
	const env = context.env as Env;

	// Return test data if in dev mode
	// @ts-ignore
	if (process.env.NODE_ENV === 'development') {
		return json({ data: dev_data });
	}

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
					// src: `https://content.connorbray.net/${file.key}`,
					src: `/content/${file.key}`,
					height: Number(file.customMetadata?.height) || 0,
					width: Number(file.customMetadata?.width) || 0,
				};
			});
		return json(
			{ data },
			{
				headers: { 'Cache-Control': 'public, max-age=3600' },
			}
		);
	} catch (error) {
		return new Response('Server Error', { status: 500 });
	}
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
				<PhotoAlbum
					layout="rows"
					columns={(containerWidth) => {
						if (containerWidth < 400) return 2;
						if (containerWidth < 800) return 3;
						return 4;
					}}
					photos={data}
					onClick={({ index }) => setIndex(index)}
				/>
				<Lightbox
					slides={data}
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
					plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
				/>
			</div>
		</div>
	);
}
