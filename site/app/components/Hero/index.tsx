import { Link } from "@remix-run/react";
import style from "./style.module.css";

export default function Hero() {
    return (
        <div className={style.Hero}>
            <div className={style.Content}>
                <div className={style.Start}>connorbray.net</div>
                <div className={style.Middle}>
                    <Link to="/home" className={style.Button}>
                        Get Started
                    </Link>
                </div>
                <div className={style.End}></div>
            </div>
        </div>
    );
}
