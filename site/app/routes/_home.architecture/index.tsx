import {
	CircleStackIcon,
	GlobeAltIcon,
	PhotoIcon,
} from '@heroicons/react/24/outline';
import styles from './style.module.css';

// Colors:
import '@radix-ui/colors/teal.css';
import '@radix-ui/colors/mint.css';
import '@radix-ui/colors/tomato.css';
import '@radix-ui/colors/yellow.css';
import '@radix-ui/colors/indigo.css';
import '@radix-ui/colors/cyan.css';

export default function Architecture() {
	return (
		<div className={styles.Root}>
			<div className={styles.Group}>
				<div className="w-full flex justify-center gap-20">
					<div className={styles.Website + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<div className="flex gap-1">
								<GlobeAltIcon height={34} width={34} />
								<h1>Website</h1>
							</div>
							<p>
								Serverless progressive web app built with Remix
								and React.
							</p>
						</div>
					</div>
					<div className={styles.Content + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<div className="flex gap-1">
								<PhotoIcon height={34} width={34} />
								<h1>Content</h1>
							</div>
							<p>
								Serverless, distributed, content manager to
								deliver low-latiency content around the world.
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center gap-20">
					<div className={styles.Database + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<div className="flex gap-1">
								<CircleStackIcon height={34} width={34} />
								<h1>Database</h1>
							</div>

							<p>NoSQL database to store site data.</p>
						</div>
					</div>
					<div className={styles.Network + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<h1>connorbray.net</h1>
							<p>Network of services connected together.</p>
						</div>
					</div>
					<div className={styles.API + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<h1>API</h1>
							<p>
								Serverless API written in TypeScript and served
								on the edge.
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center gap-20">
					<div className={styles.Admin + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<h1>Admin</h1>
							<p>Zero trust web app to manage site content.</p>
						</div>
					</div>
					<div className={styles.Terraform + ' ' + styles.Circle}>
						<div className={styles.Container}>
							<h1>Terraform</h1>
							<p>
								Terraform configuration to manage cloud
								resources.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
