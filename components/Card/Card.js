import React from 'react';
import styles from './Card.module.scss';
import { useRouter } from 'next/router';
export default function Card({ name, phone, email, img, id }) {
	const router = useRouter();
	return (
		<div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
			<div className={styles['card-header']}>
				<img src={img.url} alt={img.alt} className={styles['card-img']} />
			</div>
			<div>
				<h3>{name}</h3>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}
