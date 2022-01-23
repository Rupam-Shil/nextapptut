import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';

export default function Index() {
	const [cats, setCats] = useState([]);
	const fetchCats = async () => {
		const response = await fetch('/api/cats');
		const data = await response.json();
		setCats(data.cats);
	};

	useEffect(() => {
		fetchCats();
	}, []);

	return (
		<>
			<Nav />
			<div className="container mt-5">
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
					{cats.map((cat) => {
						return (
							<Card
								key={cat.id}
								id={cat.id}
								name={cat.name}
								email={cat.email}
								phone={cat.phone}
								img={cat.image}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
