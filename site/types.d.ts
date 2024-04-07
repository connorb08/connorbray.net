type Project = {
	id: string | null | undefined;
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
	links: Partial<Link>[];
};

type Link = {
	name: string;
	href: string;
};
