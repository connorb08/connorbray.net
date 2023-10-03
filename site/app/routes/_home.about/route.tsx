import About from "~/components/About";
import type {
    AboutProps,
    JobProps,
    LeadershipRoleProps,
    ProjectProps,
} from "~/components/About/types";

const jobs: JobProps[] = [
    {
        title: "Software Engineer",
        company: "Tyler Technologies",
        type: "Full Time",
        location: "Yarmouth, ME",
        start: "July 2023",
        end: "Present",
        description: "",
        imgUrl: "https://content.connorbray.net/tylertech.avif",
    },
    {
        title: "President & CEO",
        company: "UMSG Inc.",
        type: "Nonprofit",
        location: "Orono, ME",
        start: "Feb 2022",
        end: "May 2023",
        description: "",
        imgUrl: "https://content.connorbray.net/umsg.avif",
    },
    {
        title: "Software Development Intern",
        company: "Tyler Technologies",
        type: "Intern",
        location: "Yarmouth, ME",
        start: "May 2022",
        end: "May 2023",
        description: "",
        imgUrl: "https://content.connorbray.net/tylertech.avif",
    },
    {
        title: "Vice President & Board Chair",
        company: "UMSG Inc.",
        type: "Nonprofit",
        location: "Orono, ME",
        start: "May 2022",
        end: "Feb 2023",
        description: "",
        imgUrl: "https://content.connorbray.net/umsg.avif",
    },
    {
        title: "Interim Vice President for Financial Affiars",
        company: "UMSG Inc.",
        type: "Nonprofit",
        location: "Orono, ME",
        start: "Sep 2022",
        end: "Oct 2022",
        description: "",
        imgUrl: "https://content.connorbray.net/umsg.avif",
    },
    {
        title: "Information Technology Intern",
        company: "Tyler Technologies",
        type: "Intern",
        location: "Yarmouth, ME",
        start: "May 2021",
        end: "May 2022",
        description: "",
        imgUrl: "https://content.connorbray.net/tylertech.avif",
    },
    {
        title: "Kitchen Staff",
        company: "Cumberland Foodstop",
        type: "Seasonal",
        location: "Cumberland, ME",
        start: "Feb 2019",
        end: "May 2021",
        description: "",
        imgUrl: "https://www.cnylions.org/sites/cnylions.org/files/styles/large/public/sites/cnylions.org/images/foodstop.png?itok=vbGwC0SV",
    },
];

const leadership: LeadershipRoleProps[] = [
    {
        name: "University of Maine Student Government Inc.",
        position: "Board Member",
    },
    {
        name: "University of Maine Alumni Association",
        position: "Board Member",
    },
];

const projects: ProjectProps[] = [
    {
        name: "connorbray.net",
        type: "Web Application",
        url: "https://connorbray.net",
        urlText: "connorbray.net",
        description: "",
        img: "",
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
