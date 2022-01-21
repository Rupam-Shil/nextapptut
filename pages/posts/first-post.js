import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function firstpost() {
	return (
		<>
			<Head>
				<title>First post</title>
			</Head>
			<Link href="/">go back</Link>
			<Image src="/profilepic.jpg" alt="" width={144} height={144} />
			<h1>First Post</h1>
		</>
	);
}
