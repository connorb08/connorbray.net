import type { PropsWithChildren } from 'react';
import type { EducationProps } from './types';

export default function Education(props: PropsWithChildren<EducationProps>) {
	return (
		<div className="mb-5 item-section">
			<div
				className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
				style={{
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundImage: `url("https://connorbray.net/cdn-cgi/image/format=auto/${props.icon_url}")`,
				}}
			/>

			<div className="w-full space-y-5">
				<div className="item-header items-end">
					<div className="space-y-1.5">
						<div className="font-medium">{props.degree}</div>
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
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>
								<span>{props.school}</span>
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
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>{props.location}</span>
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
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span>
								{props.start_date} &ndash; {props.end_date}
							</span>
						</div>
					</div>
				</div>
				<p className="text-gray-600">{props.description}</p>
			</div>
		</div>
	);
}
