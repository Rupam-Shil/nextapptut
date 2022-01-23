import React from 'react';
import Link from 'next/link';

export default function Nav() {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<Link href="/">
						<a className="navbar-brand mb-0 h1">Navbar</a>
					</Link>
				</div>
			</nav>
		</div>
	);
}
