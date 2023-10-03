import * as Collapsible from "@radix-ui/react-collapsible";
import {
    ChevronDownIcon,
    ChevronRightIcon,
    FileIcon,
    FileTextIcon,
    PersonIcon,
} from "@radix-ui/react-icons";
import { FolderIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import style from "./style.module.css";
import { Link, useLocation } from "@remix-run/react";

const navigation = [
    { name: "Home", href: "/home", icon: HomeIcon, current: true },
    { name: "About Me", href: "/about", icon: PersonIcon, current: false },
    {
        name: "Pages",
        icon: FileIcon,
        current: false,
        children: [
            { name: "Photography", href: "/gallery" },
            { name: "This Site", href: "/site" },
        ],
    },
    {
        name: "Projects",
        icon: FolderIcon,
        current: false,
        children: [
            // { name: "Wonder App", href: "#" },
            // { name: "Photo Manager", href: "#" },
            // { name: "connorbray.net", href: "#" },
        ],
    },
    { name: "Resume", href: "#", icon: FileTextIcon, current: false },
];

export default function SideNav() {
    const [dropdownOpen, setDropdownOpen] = useState(
        Array(navigation.length).fill(false)
    );
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <Collapsible.Root
            open={sidebarOpen}
            onOpenChange={setSidebarOpen}
            className={style.SidebarRoot}
        >
            <div
                className={
                    "flex w-full " +
                    (sidebarOpen ? "justify-end mr-10" : "justify-center")
                }
            >
                <Collapsible.Trigger asChild>
                    <button className={style.SidebarToggle}>
                        <ChevronRightIcon
                            className={
                                style.Icon + (sidebarOpen ? " rotate-180" : "")
                            }
                        />
                    </button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content asChild>
                <div className={style.Sidebar}>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item, index) => (
                                        <li key={item.name}>
                                            {!item.children ? (
                                                <Link
                                                    to={item.href}
                                                    className={
                                                        (item.href ===
                                                        location.pathname
                                                            ? style.Selected
                                                            : "") +
                                                        " " +
                                                        style.NavItem
                                                    }
                                                >
                                                    <item.icon
                                                        className="h-6 w-6 shrink-0 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <>
                                                    <Collapsible.Root
                                                        className="CollapsibleRoot"
                                                        open={
                                                            dropdownOpen[index]
                                                        }
                                                        onOpenChange={() => {
                                                            const arrCpy = [
                                                                ...dropdownOpen,
                                                            ];
                                                            arrCpy[index] =
                                                                !arrCpy[index];
                                                            setDropdownOpen(
                                                                arrCpy
                                                            );
                                                        }}
                                                    >
                                                        <Collapsible.Trigger
                                                            className={
                                                                (item.href ===
                                                                location.pathname
                                                                    ? style.Selected
                                                                    : "") +
                                                                " " +
                                                                style.NavItem
                                                            }
                                                        >
                                                            <item.icon
                                                                className="h-6 w-6 shrink-0 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            {item.name}

                                                            <ChevronDownIcon
                                                                className={
                                                                    "ml-auto h-5 w-5 shrink-0" +
                                                                    (dropdownOpen[
                                                                        index
                                                                    ]
                                                                        ? " rotate-180"
                                                                        : "")
                                                                }
                                                                aria-hidden="true"
                                                            />
                                                        </Collapsible.Trigger>

                                                        <Collapsible.Content
                                                            asChild
                                                        >
                                                            <ul className="mt-1 px-2">
                                                                {item.children.map(
                                                                    (
                                                                        subItem
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                subItem.name
                                                                            }
                                                                        >
                                                                            <Link
                                                                                to={
                                                                                    subItem.href
                                                                                }
                                                                                className={
                                                                                    (item.current
                                                                                        ? style.Selected
                                                                                        : "") +
                                                                                    " " +
                                                                                    style.NavItem
                                                                                }
                                                                            >
                                                                                {
                                                                                    subItem.name
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </Collapsible.Content>
                                                    </Collapsible.Root>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
