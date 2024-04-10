interface Employment {
	id: string;
	company: string;
	position: string;
	description: string;
	location: string;
	sort: number;
}

interface Education {
	_id: string;
	school: string;
	degree: string;
	description: string;
	start_date: string;
	end_date: string;
	location: string;
	icon_url: string;
}

interface Project {
	_id?: string;
	name: string;
	description: string;
	about: string;
	languages: {
		name: string;
	}[];
	stats: {
		name: string;
		value: string;
		unit?: string;
	}[];
	technologies: {
		name: string;
		logoSrc: string;
	}[];
	links: Link[];
	hiddden?: boolean;
}

type Link = {
	name: string;
	href: string;
};
