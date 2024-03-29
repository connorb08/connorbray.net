type Project = {
	id: string;
	name: string;
	description: string;
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
