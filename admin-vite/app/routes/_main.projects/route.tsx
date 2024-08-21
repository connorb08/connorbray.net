import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { Box, Card, Flex, Table } from '@radix-ui/themes';
import { UpdateProjectButton } from '~/components/Projects/UpdateProject';
import styles from './styles.module.css';
import NewProjectButton from '~/components/Projects/NewProject/NewProjectButton';
import { DeleteProjectButton } from '~/components/Projects/DeleteProject';

export async function loader() {
	try {
		const response = await fetch('https://api.connorbray.net/api/projects');
		const projectDocuments: Project[] = await response.json();
		return json({ projectDocuments, error: null });
	} catch (error) {
		console.error(error);
		return json({
			error: 'Error fetching projects',
			projectDocuments: [],
		});
	}
}

export default function Projects() {
	const { projectDocuments, error } = useLoaderData<typeof loader>();
	const [projects] = useState<Project[]>(projectDocuments as Project[]);
	if (error) {
		return <div>{error}</div>;
	}

	return (
		<Flex
			gap="8"
			direction="column"
			align="center"
			justify="center"
			className="flex-1"
		>
			<Box width="1024px">
				<Card size="1">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeaderCell>
									Name
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell>
									Description
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell>
									ID
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell></Table.ColumnHeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{projects.map((project, index) => (
								<Table.Row key={project._id}>
									<Table.RowHeaderCell
										className={styles.TableCell}
									>
										{project.name}
									</Table.RowHeaderCell>
									<Table.Cell className={styles.TableCell}>
										{project.description}
									</Table.Cell>
									<Table.Cell className={styles.TableCell}>
										{project._id}
									</Table.Cell>
									<Table.Cell className={styles.TableCell}>
										<span className="flex gap-2">
											<UpdateProjectButton
												project={projects[index]}
											/>
											<DeleteProjectButton
												project={projects[index]}
											/>
										</span>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Card>
			</Box>
			{/* <div className="flex-1 flex items-center justify-center"> */}
			{/* <div className="flex-1 max-w-4xl"> */}
			<NewProjectButton />
			{/* </div> */}
			{/* </div> */}
		</Flex>
	);
}
