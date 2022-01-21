import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div>check</div>
			<h1>
				Read my <Link href="/posts/first-post">first blog</Link>
			</h1>
		</>
	);
}
