import { useState } from 'react';
import type { AboutProps } from './types';
import Information from './information';
import Leadership from './leadership';
import Portfolio from './portfolio';
import Experience from './experience';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import './style.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EmploymentStatus = ({
	employmentStatus,
}: {
	employmentStatus: AboutProps['employmentStatus'];
}) => {
	let textColor: string;
	let bgColor: string;
	let text: string;

	if (employmentStatus === 1) {
		text = 'Employed';
		bgColor = 'bg-green-100';
		textColor = 'text-green-600';
	} else if (employmentStatus === 0) {
		text = 'Freelance';
		bgColor = 'bg-gray-100';
		textColor = 'text-neutral-600';
	} else {
		text = 'Unemployed 😞';
		bgColor = 'bg-red-100';
		textColor = 'text-red-600';
	}

	return (
		<span className={`status-badge ${textColor} ${bgColor}`}>{text}</span>
	);
};

export const About = (props: AboutProps) => {
	const [tab, setTab] = useState<number>(1);
	const tab1 = () => setTab(1);
	const tab2 = () => setTab(2);
	const tab3 = () => setTab(3);
	const tab4 = () => setTab(4);

	return (
		<div className="antialiased w-full min-h-screen pt-10">
			<div className="main-container">
				<div className="grid gap-5 lg:grid-cols-3">
					<div
						className="space-y-5 flex flex-col"
						style={{ maxWidth: 'calc(100vw - 32px)' }}
					>
						{/* <!-- Start Left Side --> */}

						<div className="shadow rounded-xl overflow-hidden">
							{/* <!-- Start User Block --> */}
							<div
								className="h-32 bg-cover bg-center"
								style={{
									backgroundImage:
										"url('https://content.connorbray.net/images/um_mall.jpeg')",
								}}
							></div>
							<div className="pt-14 p-7 bg-gray-3 relative">
								{/* <EmploymentStatus
                                    employmentStatus={props.employmentStatus}
                                /> */}
								<span>
									<picture>
										{/* <source
                                            srcSet={CONTENT.headshot1.avif}
                                            type="image/avif"
                                        />
                                        <source
                                            srcSet={CONTENT.headshot1.webp}
                                            type="image/webp"
                                        /> */}
										<img
											style={{
												objectPosition: 'center top',
												objectFit: 'cover',
												width: '90px',
												height: '90px',
											}}
											className="user-photo"
											decoding="async"
											loading="lazy"
											src="https://content.connorbray.net/images/headshot.jpeg"
											alt="Avatar"
										/>
									</picture>
									{/* <img
                                        src={CONTENT.headshot2}
                                        alt="Avatar"
                                        style={{
                                            objectPosition: 'center top',
                                            objectFit: 'cover',
                                            width: '90px',
                                            height: '90px',
                                        }}
                                        className="user-photo"
                                    /> */}
								</span>
								<div className="text-lg font-semibold mb-1.5">
									Connor Bray
								</div>
								<div className="text-sm text-gray-11 mb-7">
									Software Engineer
								</div>
								<a
									href="https://content.connorbray.net/resume.pdf"
									target="_blank"
									rel="noreferrer noopener"
								>
									<div className="flex group">
										<button className="download-btn">
											Download CV
										</button>
										<button className="download-btn-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.8"
													d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
												/>
											</svg>
										</button>
									</div>
								</a>
							</div>
						</div>
						{/* <!-- End User Block --> */}

						<Information />

						{/* <!-- Start Skills Block --> */}
						<div className="p-7 block-section flow-root">
							<h2 className="block-title">Skills</h2>
							<div className="-m-2 flex flex-wrap">
								<span className="skill-tag">JavaScript</span>
								<span className="skill-tag">React</span>
								<span className="skill-tag">
									Web Development
								</span>
								<span className="skill-tag">Python</span>
								<span className="skill-tag">HTML/CSS</span>
								<span className="skill-tag">C</span>
							</div>
						</div>
						{/* <!-- End Skills Block --> */}
					</div>
					{/* <!-- End Left Side --> */}

					{/* <!-- Start Right Side --> */}
					<div
						className="space-y-5 lg:col-span-2 flex flex-col"
						style={{ maxWidth: 'calc(100vw - 32px)' }}
					>
						{/* <div className="space-y-5 2"> */}
						{/* <!-- Start About Me Block --> */}
						<div className="p-7 pb-0 block-section">
							<h2 className="block-title">About me</h2>
							<p className="text-gray-11 mb-5">
								I am a Software Engineer who has worked on a
								variety of projects. From small personal ones to
								large enterprise applications, I have over 8
								years of total programming experience. I'm
								proficient in a variety of programming
								languages, including JavaScript, Python, and C.
								I'm always looking for new ways to improve the
								way things work, and I'm not afraid to take
								risks. I enjoy working with others to achieve
								common goals.
							</p>

							<div className="flex flex-col space-y-4">
								<a
									href="#0"
									className="mail-link social-link-hover"
								>
									<i className="bx bx-at text-xl"></i>
									<span>@ connor@connorbray.net</span>
								</a>

								<ul className="flex space-x-4 ml-1">
									<li>
										<a
											href="https://github.com/connorb08"
											target="_blank"
											rel="nooopener noreferrer"
											className="social-link-hover"
										>
											<GitHubLogoIcon
												height={24}
												width={24}
											/>
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/in/connor-bray/"
											target="_blank"
											rel="nooopener noreferrer"
											className="social-link-hover"
										>
											<LinkedInLogoIcon
												height={24}
												width={24}
											/>
										</a>
									</li>
								</ul>
							</div>

							<div className="border-t border-gray-8 my-5"></div>

							<ul className="flex space-x-3 md:space-x-8 font-medium overflow-hidden">
								<li>
									<button
										onClick={tab1}
										className={`${
											tab === 1
												? 'menu-link-active'
												: 'menu-link'
										} menu-link-hover`}
									>
										Resume
									</button>
								</li>
								<li>
									<button
										onClick={tab2}
										className={`${
											tab === 2
												? 'menu-link-active'
												: 'menu-link'
										} menu-link-hover`}
									>
										Portfolio
									</button>
								</li>
								<li>
									<button
										onClick={tab3}
										className={`${
											tab === 3
												? 'menu-link-active'
												: 'menu-link'
										} menu-link-hover`}
									>
										Leadership
									</button>
								</li>
								<li>
									<button
										onClick={tab4}
										className={`${
											tab === 4
												? 'menu-link-active'
												: 'menu-link'
										} menu-link-hover`}
									>
										Contact
									</button>
								</li>
							</ul>
						</div>
						{/* <!-- End About Me Block --> */}

						{tab === 1 ? (
							<Experience jobs={props.jobs} />
						) : tab === 2 ? (
							<Portfolio projects={props.projects} />
						) : tab === 3 ? (
							<Leadership roles={props.leadership} />
						) : null}
					</div>
					{/* <!-- End Right Side --> */}
				</div>
			</div>
		</div>
	);
};

export default About;
