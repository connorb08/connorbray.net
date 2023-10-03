export interface ProjectInfo {
    summaryHeader: string;
    summaryBullets: string[];
    name: string;
    language: string;
    loc: number;
    testResults?: number[];
    link?: string;
    github_link?: string;
    npm_link?: string;
}

export interface JobProps {
    title: string;
    company: string;
    start: string;
    end: string;
    location: string;
    type: string;
    description: string;
    imgUrl: string;
}

export interface ProjectProps {
    name: string;
    type: string;
    url: string;
    urlText: string;
    description: string;
    img: string;
}

export interface LeadershipRoleProps {
    name: string;
    position: string;
}

export interface AboutProps {
    employmentStatus: number;
    jobs: JobProps[];
    projects: ProjectProps[];
    leadership: LeadershipRoleProps[];
}

export interface SpeedData {
    loadTime: number;
    pageSize: number;
    TTFB: number;
    TBT: number;
    CLS: number;
    LCP: number;
}
