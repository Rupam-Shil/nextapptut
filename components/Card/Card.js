import React from 'react';
import styles from './Card.module.scss';

export default function Card({ name, phone, email, img, id }) {
	return (
		<div className={styles.card}>
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
