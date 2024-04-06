import { Link } from '@remix-run/react';
import style from './style.module.css';

export default function Hero() {
	return (
		<div className={style.Hero}>
			<div className={style.Content}>
				<div className={style.Start + ' ' + style.Container}>
					<Link to="/about" className={style.Link}>
						portfolio
					</Link>
				</div>
				<div className={style.Middle + ' ' + style.Container}>
					<Link to="/home" className={style.Link}>
						home
					</Link>
				</div>
				<div className={style.End + ' ' + style.Container}>
					<Link to="/gallery" className={style.Link}>
						photo gallery
					</Link>
				</div>
			</div>
		</div>
	);
}
