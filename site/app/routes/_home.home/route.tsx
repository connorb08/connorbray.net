import style from './style.module.css';

export default function HomePage() {
	return (
		<div className={style.Page}>
			<div className={style.Wrapper}>
				<div className={style.LeftAndMain}>
					<div className={style.Left}>Links</div>
					<div className={style.Main}>Main</div>
				</div>
				<div className={style.Right}>Right</div>
			</div>
		</div>
	);
}
