import { EyeOpenIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { IconButton, Table } from '@radix-ui/themes';
import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const env = context.env as Env;
	const bucket = env.CONTENT.list({ include: ['customMetadata'] });
	const objects = (await bucket).objects;
	return json({ objects });
};

export { action } from './action';

export default function Content() {
	const { objects } = useLoaderData<typeof loader>();
	console.log(objects);

	return (
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
									<IconButton color="amber" asChild>
										<Link
											to={`https://content.connorbray.net/${object.key}`}
											target="_blank"
											rel="noreferrer noopener"
										>
											<EyeOpenIcon />
										</Link>
									</IconButton>
									<IconButton color="blue">
										<Pencil1Icon />
									</IconButton>
									<IconButton color="ruby">
										<TrashIcon />
									</IconButton>
								</span>
							</Table.Cell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table.Root>
	);
}
