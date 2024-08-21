import { PlusIcon } from '@radix-ui/react-icons';
import { Button, Flex, Separator, TextArea, TextField } from '@radix-ui/themes';
import { Form, useSubmit } from '@remix-run/react';
import { useState, type PropsWithChildren } from 'react';

export function UpdateProjectForm(
	props: PropsWithChildren<{ project: Project; handleClose: () => void }>
) {
	const submit = useSubmit();
	const [project, setProject] = useState(props.project);

	const preventSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	// Handle the submit ourselves and pass as json
	const handleSubmit = async () => {
		// event.preventDefault();
		submit(JSON.stringify(project), {
			method: 'PATCH',
			encType: 'application/json',
			action: '/database/project',
			navigate: false,
		});
	};

	return (
		<Form onSubmit={preventSubmit}>
			<Flex direction="column" gap="4">
				{/* Basic Project Info */}

				<div>
					<label>Project name</label>
					<TextField.Root
						placeholder="project name"
						value={project.name}
						type="text"
						name="name"
						aria-label="name"
						onChange={(event) => {
							setProject({
								...project,
								name: event.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label>Project description</label>
					<TextArea
						value={project.description}
						name="description"
						aria-label="description"
						onChange={(event) => {
							setProject({
								...project,
								description: event.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label>More about project</label>
					<TextArea
						value={project.about}
						name="about"
						aria-label="about"
						onChange={(event) => {
							setProject({
								...project,
								about: event.target.value,
							});
						}}
					/>
				</div>
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Languages */}
				<Flex direction="column" gap="1">
					{project.languages.map((language, index) => (
						<div key={index}>
							<TextField.Root
								placeholder="language name"
								type="text"
								name={`languages[${index}].name`}
								aria-label="language name"
								value={language.name}
								onChange={(event) => {
									const languages = [...project.languages];
									languages[index].name = event.target.value;
									setProject({
										...project,
										languages,
									});
								}}
							/>
						</div>
					))}

					<AddElement
						name="language"
						handleClick={() => {
							const languages = [...project.languages];
							languages.push({ name: '' });
							setProject({ ...project, languages });
						}}
					/>
				</Flex>
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Stats */}
				{project.stats.map((stat, index) => (
					<div key={index}>
						<label>Stat name:</label>
						<TextField.Root
							placeholder="stat name"
							type="text"
							name={`stats[${index}].name`}
							aria-label="stat name"
							value={stat.name}
							onChange={(event) => {
								const stats = [...project.stats];
								stats[index].name = event.target.value;
								setProject({ ...project, stats });
							}}
						/>
						<label>Stat value:</label>
						<TextField.Root
							placeholder="stat value"
							type="text"
							name={`stats[${index}].value`}
							aria-label="stat value"
							value={stat.value}
							onChange={(event) => {
								const stats = [...project.stats];
								stats[index].value = event.target.value;
								setProject({ ...project, stats });
							}}
						/>
						<label>Stat unit:</label>
						<TextField.Root
							placeholder="stat unit"
							type="text"
							name={`stats[${index}].unit`}
							aria-label="stat unit"
							value={stat.unit}
							onChange={(event) => {
								const stats = [...project.stats];
								stats[index].unit = event.target.value;
								setProject({ ...project, stats });
							}}
						/>
					</div>
				))}
				<AddElement
					name="stat"
					handleClick={() => {
						const stats = [...project.stats];
						stats.push({
							name: '',
							value: '',
							unit: '',
						});
						setProject({ ...project, stats });
					}}
				/>

				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Technologies */}
				{project.technologies.map((technology, index) => (
					<div key={index}>
						<label>Technology name:</label>
						<TextField.Root
							placeholder="technology name"
							type="text"
							name={`technologies[${index}].name`}
							aria-label="technology name"
							value={technology.name}
							onChange={(event) => {
								const technologies = [...project.technologies];
								technologies[index].name = event.target.value;
								setProject({
									...project,
									technologies,
								});
							}}
						/>
						<label>Technology logo src:</label>
						<TextField.Root
							placeholder="technology logo src"
							type="text"
							name={`technologies[${index}].logoSrc`}
							aria-label="technology logo src"
							value={technology.logoSrc}
							onChange={(event) => {
								const technologies = [...project.technologies];
								technologies[index].logoSrc =
									event.target.value;
								setProject({
									...project,
									technologies,
								});
							}}
						/>
					</div>
				))}

				<AddElement
					name="technology"
					handleClick={() => {
						const technologies = [...project.technologies];
						technologies.push({
							name: '',
							logoSrc: '',
						});
						setProject({ ...project, technologies });
					}}
				/>
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Links */}
				{project.links.map((link, index) => (
					<Flex key={index} justify="center" gap="4">
						<div>
							<label className="text-sm">Link name:</label>
							<TextField.Root
								placeholder="Link name"
								type="text"
								name={`links[${index}].name`}
								aria-label="link name"
								value={link.name}
								onChange={(event) => {
									const links = [...project.links];
									links[index].name = event.target.value;
									setProject({ ...project, links });
								}}
							/>
						</div>
						<div className="flex-1">
							<label className="text-sm">Link href:</label>
							<TextField.Root
								placeholder="Link href"
								type="text"
								name={`links[${index}].href`}
								aria-label="link href"
								value={link.href}
								onChange={(event) => {
									const links = [...project.links];
									links[index].href = event.target.value;
									setProject({ ...project, links });
								}}
							/>
						</div>
					</Flex>
				))}
				<AddElement
					name="link"
					handleClick={() => {
						const links = [...project.links];
						links.push({ name: '', href: '' });
						setProject({ ...project, links });
					}}
				/>

				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Hidden checkbox */}
				{/* <Checkbox
					checked={project.hidden}
					onCheckedChange={(checked) => {
						const isHidden =
							checked.valueOf().toString() === 'true';
						setProject({ ...project, hidden: isHidden });
					}}
				/> */}

				{/* Submit Form */}
				<Flex justify="center">
					<Button
						aria-label="submit"
						onClick={() => {
							handleSubmit();
							props.handleClose();
						}}
					>
						Submit
					</Button>
				</Flex>
			</Flex>
		</Form>
	);
}

function AddElement(
	props: PropsWithChildren<{ name: string; handleClick: () => void }>
) {
	return (
		<Flex>
			<Button onClick={props.handleClick}>
				<PlusIcon />
				Add {props.name}
			</Button>
		</Flex>
	);
}
