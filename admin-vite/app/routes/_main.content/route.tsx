import { EyeOpenIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Flex, IconButton, Table } from '@radix-ui/themes';
import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { DeleteContentButton } from '~/components/Content/DeleteContent';
import PreviewContent from '~/components/Content/PreviewContent';

import { dev_data } from './dev_data';
import { UploadImage } from '~/components/Content/Upload';

export const loader = async ({ context }: LoaderFunctionArgs) => {
	if (process.env.NODE_ENV === 'development') {
		return json({ objects: dev_data });
	}

	const env = context.cloudflare.env as Env;
	const content_bucket = env.CONTENT;
	if (!content_bucket) {
		return json({ objects: [] });
	}
	const bucket = env.CONTENT.list({ include: ['customMetadata'] });
	const objects = (await bucket).objects;
	return json({ objects });
};

export { action } from './action';

export default function Content() {
	const { objects } = useLoaderData<typeof loader>();

	return (
		<Flex direction="column" gap="3" className="mt-3">
			<Flex className="ml-3">
				<UploadImage />
			</Flex>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>File</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Height</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Width</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell></Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{objects.map((object) => {
						return (
							<Table.Row key={object.key}>
								<Table.RowHeaderCell>
									{object.key}
								</Table.RowHeaderCell>
								<Table.Cell>
									{object.customMetadata?.height}
								</Table.Cell>
								<Table.Cell>
									{object.customMetadata?.width}
								</Table.Cell>
								<Table.Cell width="0">
									<span className="flex justify-end gap-2">
										<PreviewContent content={object.key} />
										{/* <IconButton color="amber" asChild>
                    <Link
                        to={`https://content.connorbray.net/${object.key}`}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <EyeOpenIcon />
                    </Link>
                </IconButton> */}
										<IconButton color="blue">
											<Pencil1Icon />
										</IconButton>
										<DeleteContentButton
											project={{} as Project}
										/>
									</span>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table.Root>
		</Flex>
	);
}
