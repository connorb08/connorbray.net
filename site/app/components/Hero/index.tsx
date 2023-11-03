import { Link } from "@remix-run/react";
import style from "./style.module.css";

export default function Hero() {
    return (
        <div className={style.Hero}>
            <div className={style.Content}>
                <div className={style.Start}><Link to="/about">portfolio</Link></div>
                <div className={style.Middle}><Link to="/home">home</Link></div>
                <div className={style.End}><Link to="/gallery">photo gallery</Link></div>
            </div>
        </div>
    );
}
