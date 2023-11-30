import { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Env } from 'remix.env';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Box, Tabs } from '@radix-ui/themes';
import Toolbar from '~/components/Toolbar';
import { byteFormatter } from './utils';

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const env = context.env as Env;
	const bucket = env.CONTENT.list({ include: ['customMetadata'] });
	const objects = (await bucket).objects;
	return objects;
};

export const action = async ({ request }: LoaderFunctionArgs) => {};

export default function () {
	const objects = useLoaderData<typeof loader>();

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

	return (
		<Tabs.Root defaultValue="gallery" asChild>
			<div className="flex-1 flex flex-col">
				<Tabs.List>
					<Tabs.Trigger value="gallery">Gallery</Tabs.Trigger>
					<Tabs.Trigger value="images">Images</Tabs.Trigger>
				</Tabs.List>

				<Box px="4" pt="0" pb="2" className="flex-1">
					<Tabs.Content value="gallery" asChild>
						<div className="ag-theme-alpine h-full">
							<Toolbar />
							<AgGridReact
								// @ts-ignore
								columnDefs={columnDefs}
								rowData={objects.filter(
									(row) =>
										row.key.startsWith('gallery/') &&
										row.size > 0
								)}
							/>{' '}
						</div>
					</Tabs.Content>

					<Tabs.Content value="images" asChild>
						<div className="ag-theme-alpine h-full">
							<Toolbar />
							<AgGridReact
								// @ts-ignore
								columnDefs={columnDefs}
								rowData={objects.filter(
									(row) =>
										row.key.startsWith('images/') &&
										row.size > 0
								)}
							/>{' '}
						</div>
					</Tabs.Content>
				</Box>
			</div>
		</Tabs.Root>
	);
}
