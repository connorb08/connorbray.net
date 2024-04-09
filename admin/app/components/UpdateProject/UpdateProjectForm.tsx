import { Button, Flex, Separator, TextArea, TextField } from '@radix-ui/themes';
import { Form, useSubmit } from '@remix-run/react';
import { useState, type PropsWithChildren } from 'react';

export function UpdateProjectForm(
	props: PropsWithChildren<{ project: Project }>
) {
	const submit = useSubmit();
	const [project, setProject] = useState(props.project);

	// Handle the submit ourselves and pass as json
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		submit(JSON.stringify(project), {
			method: 'PATCH',
			encType: 'application/json',
			action: '/database/project',
		});
	};

	return (
		<Form onSubmit={handleSubmit}>
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
					{props.project.languages.map((language, index, arr) => {
						const isLast = index === arr.length - 1;

						const LanguageElement = (
							<div key={index}>
								<TextField.Root
									placeholder="language name"
									type="text"
									name={`languages[${index}].name`}
									aria-label="language name"
									value={language.name}
									onChange={(event) => {
										const languages = [
											...project.languages,
										];
										languages[index].name =
											event.target.value;
										setProject({
											...project,
											languages,
										});
									}}
								/>
							</div>
						);

						const AddNewLanguageElement = (
							<div>+ add new language</div>
						);

						return isLast ? (
							<>
								{LanguageElement}
								{AddNewLanguageElement}
							</>
						) : (
							LanguageElement
						);
					})}
				</Flex>
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Stats */}
				{props.project.stats.map((stat, index, arr) => {
					const isLast = index === arr.length - 1;

					const StatElement = (
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
					);

					const AddNewStatElement = <div>+ add new stat</div>;

					return isLast ? (
						<>
							{StatElement}
							{AddNewStatElement}
						</>
					) : (
						StatElement
					);
				})}
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Technologies */}
				{props.project.technologies.map((technology, index, arr) => {
					const isLast = index === arr.length - 1;

					const TechnologyElement = (
						<div key={index}>
							<label>Technology name:</label>
							<TextField.Root
								placeholder="technology name"
								type="text"
								name={`technologies[${index}].name`}
								aria-label="technology name"
								value={technology.name}
								onChange={(event) => {
									const technologies = [
										...project.technologies,
									];
									technologies[index].name =
										event.target.value;
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
									const technologies = [
										...project.technologies,
									];
									technologies[index].logoSrc =
										event.target.value;
									setProject({
										...project,
										technologies,
									});
								}}
							/>
						</div>
					);

					const AddNewTechnologyElement = (
						<div>+ add new technology</div>
					);

					return isLast ? (
						<>
							{TechnologyElement}
							{AddNewTechnologyElement}
						</>
					) : (
						TechnologyElement
					);
				})}
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Links */}
				{props.project.links.map((link, index, arr) => {
					const isLast = index === arr.length - 1;

					const LinkElement = (
						<div key={index}>
							<label>Link name:</label>
							<TextField.Root
								placeholder="link name"
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
							<label>Link href:</label>
							<TextField.Root
								placeholder="link href"
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
					);

					const AddNewLinkElement = <div>+ add new link</div>;

					return isLast ? (
						<>
							{LinkElement}
							{AddNewLinkElement}
						</>
					) : (
						LinkElement
					);
				})}
				<Separator orientation="horizontal" size="4" color="blue" />

				{/* Submit Form */}
				<Flex justify="center">
					<Button
						type="submit"
						aria-label="submit"
						className="w-16 rounded bg-blue-400 text-black hover:bg-blue-300 hover:cursor-pointer"
					>
						Submit
					</Button>
				</Flex>
			</Flex>
		</Form>
	);
}
