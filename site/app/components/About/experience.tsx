import { PropsWithChildren } from 'react';
import type { AboutProps, JobProps } from './types';

const Resume = ({ jobs }: { jobs: AboutProps['jobs'] }) => {
	const bottomBorder = <div className="border-b border-gray-8 mb-5" />;
	const len = jobs.length;

	return (
		<>
			<div className="p-7 block-section">
				<h2 className="block-title">Education</h2>
				<Education description="" />
			</div>
			<div className="p-7 block-section">
				<h2 className="block-title">Experience</h2>

				{jobs.map((job, index) => {
					return (
						<>
							<Job {...job} key={index} />
							{index !== len - 1 ? bottomBorder : ''}
						</>
					);
				})}
			</div>
		</>
	);
};

const Job = (props: JobProps) => {
	return (
		<div className="mb-5 item-section">
			<div
				className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
				// style={{
				//     objectPosition: 'center top',
				//     objectFit: 'cover',
				//     width: '80px',
				//     height: '80px',
				// }}
				style={{
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundImage: `url('${props.imgUrl}')`,
				}}
			/>

			<div className="w-full space-y-5">
				<div className="item-header">
					<div className="space-y-1.5">
						<div className="font-medium">{props.title}</div>
						<div className="flex space-x-5">
							<div className="item-header-info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span>{props.company}</span>
							</div>
							<div className="item-header-info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>{props.location}</span>
							</div>
						</div>
					</div>
					<div className="space-y-2 sm:text-right">
						<div className="job-item-badge">{props.type}</div>
						<div className="item-header-info">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span>
								{props.start} &ndash; {props.end}
							</span>
						</div>
					</div>
				</div>
				<p className="text-gray-600">{props.description}</p>
			</div>
		</div>
	);
};

const Education = (
	props: PropsWithChildren<{ description: string | undefined }>
) => {
	return (
		<div className="mb-5 item-section">
			<div
				className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
				style={{
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundImage:
						"url('https://www.logolynx.com/images/logolynx/db/dbf96dc3f17a2f0779337d009e338424.png')",
				}}
			/>

			<div className="w-full space-y-5">
				<div className="item-header items-end">
					<div className="space-y-1.5">
						<div className="font-medium">B.S. Computer Science</div>
						<div className="flex space-x-5">
							<div className="item-header-info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>
								<span>University of Maine</span>
							</div>
							<div className="item-header-info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>Orono, ME</span>
							</div>
						</div>
					</div>
					<div className="space-y-1.5 sm:text-right">
						<div className="item-header-info">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span>August 2019 &ndash; May 2023</span>
						</div>
					</div>
				</div>
				{/* <p className="text-gray-600">{props.description}</p> */}
			</div>
		</div>
	);
};

export default Resume;
