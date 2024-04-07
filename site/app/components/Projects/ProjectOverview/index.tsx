import type { PropsWithChildren } from 'react';
import style from './style.module.css';
import { Link } from '@remix-run/react';

export default function ProjectOverview(props: PropsWithChildren<Project>) {
	return (
		<div className={style.Container}>
			<Info {...props}>
				<Stats stats={props.stats} />
				<div className="mb-10" />
				<Technologies technologies={props.technologies} />
			</Info>
		</div>
	);
}

function Technologies(
	props: PropsWithChildren<{ technologies: Project['technologies'] }>
) {
	return (
		<div className={style.Technologies}>
			<div className={style.TechnologiesContainer}>
				<div className={style.Grid}>
					{props.technologies.map((item, index) => (
						<div key={index} className="p-6 sm:p-10">
							<img
								className={style.TechnologiesLogo}
								src={item.logoSrc}
								alt={item.name}
								width={158}
								height={48}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function Stats(props: PropsWithChildren<{ stats: Project['stats'] }>) {
	return (
		<div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
			{props.stats.map((stat) => (
				<div
					key={stat.name}
					className="px-4 py-6 sm:px-6 lg:px-8 sm:rounded-2xl"
				>
					<p className="text-sm font-medium leading-6">{stat.name}</p>
					<p className="mt-2 flex items-baseline gap-x-2">
						<span className="text-4xl font-semibold tracking-tight">
							{stat.value}
						</span>
						{stat.unit ? (
							<span className="text-sm">{stat.unit}</span>
						) : null}
					</p>
				</div>
			))}
		</div>
	);
}

function Info(props: PropsWithChildren<Project>) {
	return (
		<div className="overflow-hidden shadow sm:rounded-lg">
			<div className="px-4 py-6 sm:px-6">
				<h3 className="text-base font-semibold leading-7">
					{props.name}
				</h3>
				<p className="mt-1 max-w-2xl text-sm leading-6">
					{props.description}
				</p>
			</div>
			<div className="border-t border-primary-6">
				<dl className="divide-y divide-primary-6">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium">About</dt>
						<dd className="mt-1 text-md leading-6 sm:col-span-2 sm:mt-0">
							{props.about}
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium">Languages</dt>
						<dd className="mt-1 text-md leading-6 sm:col-span-2 sm:mt-0">
							{props.languages.map((language, index, arr) => (
								<span key={index}>
									{index !== arr.length - 1
										? `${language.name}, `
										: language.name}
								</span>
							))}
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium">Links</dt>
						<dd className="mt-1 text- leading-6 sm:col-span-2 sm:mt-0">
							{props.links.map((link, index, arr) => {
								return index != arr.length - 1 ? (
									<>
										<Link
											to={link.href || '#'}
											className={style.ProjectLink}
										>
											{link.name}
										</Link>
										<br />
									</>
								) : (
									<Link
										to={link.href || '#'}
										className={style.ProjectLink}
									>
										{link.name}
									</Link>
								);
							})}
						</dd>
					</div>
					<Stats stats={props.stats} />
					<Technologies technologies={props.technologies} />
				</dl>
			</div>
		</div>
	);
}
