import { Link } from "@remix-run/react";
import SettingCog from "./SettingCog";
import style from "./style.module.css";

export default function Header() {
    return (
        <div className={style.Header}>
            <div className={style.Start}></div>

            <div className={style.Center}>
                <Link to="/home">connorbray.net</Link>
            </div>
            <div className={style.End}>{/* <SettingCog /> */}</div>
        </div>
    );
}
