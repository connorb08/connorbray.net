import About from '~/components/About';
import type {
	AboutProps,
	JobProps,
	LeadershipRoleProps,
	ProjectProps,
} from '~/components/About/types';

const jobs: JobProps[] = [
	{
		title: 'Software Engineer',
		company: 'Tyler Technologies',
		type: 'Full Time',
		location: 'Yarmouth, ME',
		start: 'July 2023',
		end: 'September 2023',
		description: 'Software Deployment Automation',
		imgUrl: 'https://content.connorbray.net/images/tyler.png',
	},
	{
		title: 'President & CEO',
		company: 'UMSG Inc.',
		type: 'Nonprofit',
		location: 'Orono, ME',
		start: 'Feb 2022',
		end: 'May 2023',
		description:
			'Highest ranking executive of a 501(c)(3) non-profit with yearly budget of over $1,000,000. Collaborated with President, Chancellor, Dean of Students, Board of Trustees, and Provost to develop campus goals.',
		imgUrl: 'https://content.connorbray.net/images/umsg.avif',
	},
	{
		title: 'Software Development Intern',
		company: 'Tyler Technologies',
		type: 'Intern',
		location: 'Yarmouth, ME',
		start: 'May 2022',
		end: 'May 2023',
		description:
			'Developed large scale enterprise resource planning application using scrum.',
		imgUrl: 'https://content.connorbray.net/images/tyler.png',
	},
	{
		title: 'Vice President & Board Chair',
		company: 'UMSG Inc.',
		type: 'Nonprofit',
		location: 'Orono, ME',
		start: 'May 2022',
		end: 'Feb 2023',
		description:
			'Chaired the board of directors’ meetings with 40+ board members according to Robert’s Rules of Order.',
		imgUrl: 'https://content.connorbray.net/images/umsg.avif',
	},
	{
		title: 'Interim Vice President for Financial Affiars',
		company: 'UMSG Inc.',
		type: 'Nonprofit',
		location: 'Orono, ME',
		start: 'Sep 2022',
		end: 'Oct 2022',
		description: '',
		imgUrl: 'https://content.connorbray.net/images/umsg.avif',
	},
	{
		title: 'Information Technology Intern',
		company: 'Tyler Technologies',
		type: 'Intern',
		location: 'Yarmouth, ME',
		start: 'May 2021',
		end: 'May 2022',
		description: 'Technical support for multi-server client setups.',
		imgUrl: 'https://content.connorbray.net/images/tyler.png',
	},
	{
		title: 'Kitchen Staff',
		company: 'Cumberland Foodstop',
		type: 'Seasonal',
		location: 'Cumberland, ME',
		start: 'Feb 2019',
		end: 'May 2021',
		description: '',
		imgUrl: 'https://content.connorbray.net/images/fstop.png',
	},
];

const leadership: LeadershipRoleProps[] = [
	{
		name: 'University of Maine Student Government Inc.',
		position: 'Board Member',
	},
	{
		name: 'University of Maine Alumni Association',
		position: 'Board Member',
	},
];

const projects: ProjectProps[] = [
	{
		name: 'connorbray.net',
		type: 'Web Application',
		url: 'https://connorbray.net',
		urlText: 'connorbray.net',
		description: '',
		img: '',
	},
];

const aboutProps: AboutProps = {
	jobs,
	employmentStatus: 1,
	leadership,
	projects,
};

export default function () {
	return (
		<div className="w-full bg-primary-1">
			<About {...aboutProps} />
		</div>
	);
}
