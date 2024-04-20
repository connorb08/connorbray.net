import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { json } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { FaGithub } from 'react-icons/fa';

export async function loader() {
	try {
		const response = await fetch('https://api.connorbray.net/api/projects');
		const projects = (await response.json()) as Project[];
		return json({ projects, error: null });
	} catch (error) {
		console.error(error);
		return { projects: [], error: 'Failed to load projects.' } as {
			projects: Project[];
			error: string;
		};
	}
}

export default function Projects() {
	const { projects, error } = useLoaderData<typeof loader>();
	if (error) {
		return <div>{error}</div>;
	}
	return (
		<div className="h-full flex flex-col justify-center content-center">
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{/* lg:grid-cols-3">*/}
					{projects.map((project) => (
						<li
							key={project._id}
							className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
						>
							<div className="flex w-full items-center justify-between space-x-6 p-6">
								<div className="flex-1 truncate">
									<div className="flex items-center space-x-3">
										<h3 className="truncate text-sm font-medium text-gray-900">
											{project.name}
										</h3>
										<span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
											{project.languages[0].name}
										</span>
									</div>
									<p className="mt-1 truncate text-sm text-gray-500">
										{project.description}
									</p>
								</div>
								{/* <img
									className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
									src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
									alt=""
								/> */}
							</div>
							<div>
								<div className="-mt-px flex divide-x divide-gray-200">
									<div className="flex w-0 flex-1">
										<Link
											to={`/project/${project._id}`}
											className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
										>
											<InformationCircleIcon
												className="h-5 w-5"
												aria-hidden="true"
											/>
											About
										</Link>
									</div>
									<div className="-ml-px flex w-0 flex-1">
										<Link
											to={`${
												project.links.find(
													(link) =>
														link.name.toLowerCase() ===
														'github'
												)?.href || '#'
											}`}
											className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
										>
											<FaGithub
												className="h-5 w-5"
												aria-hidden="true"
											/>
											GitHub
										</Link>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';

// const people = [
// 	{
// 		name: 'Jane Cooper',
// 		title: 'Regional Paradigm Technician',
// 		role: 'Admin',
// 		email: 'janecooper@example.com',
// 		telephone: '+1-202-555-0170',
// 		imageUrl:
// 			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
// 	},
// 	// More people...
// ];

// export default function Example() {
// 	return (

// 	);
// }
