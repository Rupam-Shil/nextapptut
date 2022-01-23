import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from '../../components/Nav/Nav';

export default function Cat() {
	const [cat, setCat] = useState(null);
	const router = useRouter();
	const fetchCat = async () => {
		const { id } = router.query;
		const response = await fetch(`/api/cats/${id}`);
		const data = await response.json();
		setCat(data.data[0]);
	};

	useEffect(() => {
		fetchCat();
	}, []);

	return (
		<div>
			<Nav />
			<Link href="/cats">Go Back</Link>
			{cat && (
				<div className="container mt-5 flex">
					<img src={cat.image?.url} alt={cat.image?.alt} />
					<div className="mx-5">
						<h1>{cat.name}</h1>
						<p>{cat.description}</p>
					</div>
				</div>
			)}
		</div>
	);
}
