import {
	LoaderFunctionArgs,
	unstable_parseMultipartFormData,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Env } from 'remix.env';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Box, Tabs } from '@radix-ui/themes';
import Toolbar from '~/components/Toolbar';
import { byteFormatter } from './utils';

const columnDefs = [
	{ field: 'key', headerName: 'File', flex: 1 },
	{
		field: 'customMetadata.height',
		headerName: 'Height',
		flex: 1,
	},
	{
		field: 'customMetadata.width',
		headerName: 'Width',
		flex: 1,
	},
	{
		field: 'size',
		flex: 1,
		valueFormatter: byteFormatter,
	},
	{ field: 'uploaded', flex: 1 },
];

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const env = context.env as Env;
	const bucket = env.CONTENT.list({ include: ['customMetadata'] });
	const objects = (await bucket).objects;
	return objects;
};

export const action = async ({ request, context }: LoaderFunctionArgs) => {
	const env = context.env as Env;

	if (request.method === 'POST') {
		const formData = await request.formData();

		for await (const index of formData) {
			const [key, value] = index;
			const file = value;

			if (typeof file === 'object') {
				if (file.type === 'image/jpeg') {
					const uploadResult = await env.CONTENT.put(
						`gallery/${file.name}`,
						file
					);
					if (uploadResult) {
						console.log('uploaded!');
					} else {
						console.log('error');
					}
				}
			}
		}

		return new Response('OK', { status: 200 });
	} else {
		return new Response('Method not allowed', { status: 405 });
	}
};

export default function () {
	const objects = useLoaderData<typeof loader>();

	const galleryData: typeof objects = [];
	const imagesData: typeof objects = [];

	objects.forEach((row) => {
		if (row.key.startsWith('gallery/') && row.key !== 'gallery/') {
			galleryData.push(row);
		} else if (row.key.startsWith('images/') && row.key !== 'images/') {
			imagesData.push(row);
		}
	});

	return (
		<Tabs.Root defaultValue="gallery" asChild>
			<div className="flex-1 flex flex-col">
				<Tabs.List>
					<Tabs.Trigger value="gallery">Gallery</Tabs.Trigger>
					<Tabs.Trigger value="images">Images</Tabs.Trigger>
				</Tabs.List>

				<Box px="4" pt="0" pb="2" className="flex flex-col flex-1">
					<Tabs.Content value="gallery" asChild>
						<div className="ag-theme-alpine flex-1 flex flex-col">
							<Toolbar />
							<AgGridReact
								className="flex-1"
								// @ts-ignore
								columnDefs={columnDefs}
								rowData={galleryData}
							/>{' '}
						</div>
					</Tabs.Content>

					<Tabs.Content value="images" asChild>
						<div className="ag-theme-alpine flex-1 flex flex-col">
							<Toolbar />
							<AgGridReact
								className="flex-1"
								// @ts-ignore
								columnDefs={columnDefs}
								rowData={imagesData}
							/>{' '}
						</div>
					</Tabs.Content>
				</Box>
			</div>
		</Tabs.Root>
	);
}
