import { HomeIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';

export default function Header() {
	return (
		<div className="flex justify-between items-center p-4 bg-black text-white">
			<div className="pl-5">
				<Link to="/">
					<HomeIcon
						height={32}
						width={32}
						className="rounded-full hover:bg-white hover:bg-opacity-50 p-1"
					/>
				</Link>
			</div>
			<div className="flex items-center">
				<h1 className="text-2xl font-bold">Gallery</h1>
			</div>
			<div className="pr-5"></div>
		</div>
	);
}
