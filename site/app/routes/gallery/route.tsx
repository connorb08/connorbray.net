import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import PhotoAlbum, { type Photo } from 'react-photo-album';

import { Env } from 'remix.env';
import Header from '../../components/Gallery/Header';
import { shuffleArray } from '../../components/Gallery/utils';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import optional lightbox plugins
import {
	Fullscreen,
	Slideshow,
	Thumbnails,
	Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const env = context.env as Env;

	const images = await env.CONTENT.list({
		prefix: 'gallery/',
		include: ['customMetadata'],
	});
	const files = images.objects;

	if (files) {
		const data = files
			.filter((file) => {
				return (
					file.size &&
					file.customMetadata?.height &&
					file.customMetadata?.width
				);
			})
			.map((file, index, files) => {
				return {
					src: `https://content.connorbray.net/${file.key}`,
					height: Number(file.customMetadata?.height) || 0,
					width: Number(file.customMetadata?.width) || 0,
				};
			});
		shuffleArray(data);
		return data as Photo[];
	} else {
		return [];
	}
};

export default function Gallery() {
	const data = useLoaderData() as any as Photo[];
	const [index, setIndex] = useState(-1);

	return (
		<div className="flex-1 min-h-full flex flex-col">
			<Header />
			<div className="flex flex-col flex-1 p-4">
				<PhotoAlbum
					layout="rows"
					targetRowHeight={(containerWidth) => {
						if (containerWidth >= 1200) {
							return containerWidth / 5;
						} else if (containerWidth >= 600) {
							return containerWidth / 4;
						} else if (containerWidth >= 300) {
							return containerWidth / 5;
						} else {
							return containerWidth / 2;
						}
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
