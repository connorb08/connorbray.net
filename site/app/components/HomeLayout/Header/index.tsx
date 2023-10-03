import { Link } from "@remix-run/react";
import style from "./style.module.css";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
    return (
        <div className={style.Header}>
            <div className={style.Start}>
                <nav className="block sm:hidden">
                    <HamburgerMenuIcon />
                </nav>
            </div>

            <div className={style.Center}>
                <Link to="/home">connorbray.net</Link>
            </div>
            <div className={style.End}></div>
        </div>
    );
}
