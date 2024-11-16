type Project = {
	_id?: string;
	name: string;
	description: string;
	about: string;
	languages: {
		name: string;
		logoSrc: string | null | undefined;
	}[];
	stats: {
		name: string;
		value: string;
		unit: string | null | undefined;
	}[];
	technologies: {
		name: string;
		logoSrc: string;
	}[];
	links: Link[];
};
