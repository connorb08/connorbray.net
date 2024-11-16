import { Pencil1Icon } from '@radix-ui/react-icons';
import { Flex, IconButton, Table, Tabs } from '@radix-ui/themes';
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
	const objects = (await bucket).objects.filter((object) => {
		return !object.key.endsWith('/');
	});
	return json({ objects });
};

export { action } from './action';

export default function Content() {
	const { objects } = useLoaderData<{ objects: R2Object[] }>();

	// Get unique directories from object keys
	const directories = Array.from(
		new Set(
			objects.map((obj) => {
				const parts = obj.key.split('/');
				return parts.length > 1 ? parts[0] : 'root';
			})
		)
	).sort();

	return (
		<Flex direction="column" gap="3" className="my-3">
			<Flex className="justify-center gap-3">
				<UploadImage />
			</Flex>

			<div className="flex w-full justify-center">
				<Flex
					direction="column"
					maxWidth="80%"
					className="grow bg-[var(--gray-5)] p-10 rounded-lg"
				>
					<Tabs.Root defaultValue={directories[0] || 'root'}>
						<Tabs.List>
							{directories.map((dir) => (
								<Tabs.Trigger key={dir} value={dir}>
									{dir}
								</Tabs.Trigger>
							))}
						</Tabs.List>

						{directories.map((dir) => (
							<Tabs.Content key={dir} value={dir}>
								<Table.Root>
									<Table.Header>
										<Table.Row>
											<Table.ColumnHeaderCell>
												File
											</Table.ColumnHeaderCell>
											<Table.ColumnHeaderCell>
												Height
											</Table.ColumnHeaderCell>
											<Table.ColumnHeaderCell>
												Width
											</Table.ColumnHeaderCell>
											<Table.ColumnHeaderCell></Table.ColumnHeaderCell>
										</Table.Row>
									</Table.Header>

									<Table.Body>
										{objects
											.filter((obj) => {
												const parts =
													obj.key.split('/');
												return (
													(dir === 'root' &&
														parts.length === 1) ||
													parts[0] === dir
												);
											})
											.map((object) => {
												return (
													<Table.Row key={object.key}>
														<Table.RowHeaderCell>
															{object.key}
														</Table.RowHeaderCell>
														<Table.Cell>
															{
																object
																	.customMetadata
																	?.height
															}
														</Table.Cell>
														<Table.Cell>
															{
																object
																	.customMetadata
																	?.width
															}
														</Table.Cell>
														<Table.Cell width="0">
															<span className="flex justify-end gap-2">
																<PreviewContent
																	content={
																		object.key
																	}
																/>
																<IconButton color="blue">
																	<Pencil1Icon />
																</IconButton>
																<DeleteContentButton
																	content={
																		object.key
																	}
																/>
															</span>
														</Table.Cell>
													</Table.Row>
												);
											})}
									</Table.Body>
								</Table.Root>
							</Tabs.Content>
						))}
					</Tabs.Root>
				</Flex>
			</div>
		</Flex>
	);
}
