'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: IErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section>
			<h1>Something went wrong</h1>
			<p>
				An unexpected error occurred.{' '}
				<button
					type='button'
					onClick={reset}
					className='underline underline-offset-2'
				>
					Try again
				</button>{' '}
				or{' '}
				<Link href='/' className='underline underline-offset-2'>
					go back home
				</Link>
				.
			</p>
		</section>
	);
}

interface IErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}
