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
}

type Link = {
	name: string;
	href: string;
};
