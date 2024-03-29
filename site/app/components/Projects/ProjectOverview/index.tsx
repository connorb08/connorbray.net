import { PropsWithChildren } from 'react';
import style from './style.module.css';
import { exampleData } from './data';

export default function ProjectOverview(props: PropsWithChildren<Project>) {
	return (
		<div className={style.Container}>
			<Info>
				<Stats />
				<div className="mb-10" />
				<Technologies />
			</Info>
		</div>
	);
}

function Technologies() {
	return (
		<div className={style.Technologies}>
			<div className={style.TechnologiesContainer}>
				<div className={style.Grid}>
					{exampleData.map((item, index) => (
						<div key={index} className="bg-gray-400/5 p-6 sm:p-10">
							<img
								className="max-h-12 w-full object-contain"
								src={item.logoSrc}
								alt={item.name}
								width={158}
								height={48}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const stats = [
	{ name: 'Lines of code', value: '4,398' },
	{ name: 'Number of commits', value: '51' },
	{ name: 'Average deploy time', value: '3.65', unit: 'mins' },
	{ name: 'Number of servers', value: '3' },
];

function Stats() {
	return (
		<div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat) => (
				<div
					key={stat.name}
					className="bg-gray-400/5 px-4 py-6 sm:px-6 lg:px-8 sm:rounded-2xl"
				>
					<p className="text-sm font-medium leading-6 text-black">
						{stat.name}
					</p>
					<p className="mt-2 flex items-baseline gap-x-2">
						<span className="text-4xl font-semibold tracking-tight text-black">
							{stat.value}
						</span>
						{stat.unit ? (
							<span className="text-sm text-black">
								{stat.unit}
							</span>
						) : null}
					</p>
				</div>
			))}
		</div>
	);
}

function Info(props: PropsWithChildren) {
	return (
		<div className="overflow-hidden bg-white shadow sm:rounded-lg">
			<div className="px-4 py-6 sm:px-6">
				<h3 className="text-base font-semibold leading-7 text-gray-900">
					connorbray.net
				</h3>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
					Suite of microservices including personal website.
				</p>
			</div>
			<div className="border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-900">
							About
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							Fugiat ipsum ipsum deserunt culpa aute sint do
							nostrud anim incididunt cillum culpa consequat.
							Excepteur qui ipsum aliquip consequat sint. Sit id
							mollit nulla mollit nostrud in ea officia proident.
							Irure nostrud pariatur mollit ad adipisicing
							reprehenderit deserunt qui eu.
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-900">
							Languages
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							TypeScript, Terraform, Go
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-900">
							Links
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							[Page]
							<br />
							[GitHub]
						</dd>
					</div>
					<div className="p-6">
						<dt className="text-md font-medium text-gray-900 text-center">
							Stats
						</dt>
					</div>
					<Stats />
					<div className="p-6">
						<dt className="text-md font-medium text-gray-900 text-center">
							Technologies
						</dt>
					</div>
					<Technologies />
				</dl>
			</div>
			{/* {props.children} */}
		</div>
	);
}
