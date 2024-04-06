interface Employment {
	id: string;
	company: string;
	position: string;
	description: string;
	location: string;
	sort: number;
}

type Project = {
	id: string;
	name: string;
	description: string;
	about: string;
	languages: {
		name: string;
		logoSrc: string;
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
};
