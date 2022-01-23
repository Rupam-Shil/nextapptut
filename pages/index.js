import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Nav from '../components/Nav/Nav';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import DefaultLayout from '../layouts/Default';

export default function Home() {
	return (
		<>
			<main>
				<DefaultLayout>
					<Jumbotron heading="Cats World" />
				</DefaultLayout>
			</main>
		</>
	);
}
