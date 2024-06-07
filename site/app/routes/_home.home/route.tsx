import type { MetaFunction } from '@remix-run/react';
import { Link } from '@remix-run/react';
import style from './style.module.scss';

export const meta: MetaFunction = () => {
	return [
		{ title: 'connorbray.net' },
		{
			name: 'description',
			content: 'Homepage for Connor Bray',
		},
	];
};

export default function HomePage() {
	return (
		<div className={style.Page}>
			<div className={style.Wrapper}>
				<div className={style.LeftAndMain}>
					<Link to="/projects" className={style.Left}>
						<div className="w-full h-full flex">
							<p>Projects</p>
						</div>
					</Link>
					<div className={style.Main}>
						<div className="flex justify-center">
							<img
								src="https://connorbray.net/cdn-cgi/image/format=auto,quality=75,w=500,h=500/https://content.connorbray.net/images/umsg_headshot.jpeg"
								alt="Connor Bray"
								className="rounded-full w-60 h-60"
							/>
						</div>
						<div className="flex flex-col items-center">
							<h2 className="text-xl font-bold">Connor Bray</h2>
							<p className="text-lg">Software Engineer</p>
							<p className="text-md py-2 w-3/4">
								I am a Software Engineer driven by a desire to
								make a difference through innovative solutions.
								I am constantly striving for improvement and
								thrive on taking up new challenges. I am
								passionate about leveraging technology to solve
								real-world problems, I am eager to connect with
								like-minded people and make meaningful change.
							</p>
							<Link to="/about" className="mt-2">
								<button className="mt-2 bg-primary text-white px-2 py-1 rounded hover:bg-primary-10">
									More About Me
								</button>
							</Link>
						</div>
						<div></div>
					</div>
				</div>
				<div className={style.Right}>
					<div className="h-full flex flex-col">
						<h1 className="pb-6">Links</h1>
						<ul className={style.LinkList}>
							<li>
								<Link to="/site">About this site</Link>
							</li>
							<li>
								<Link to="/architecture">Architecture</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/gallery">Photography</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
