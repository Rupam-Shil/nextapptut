import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Nav from '../components/Nav/Nav';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';

export default function Home() {
	return (
		<>
			<main>
				<Nav />
				<Jumbotron heading="Cats World" />
			</main>
		</>
	);
}
