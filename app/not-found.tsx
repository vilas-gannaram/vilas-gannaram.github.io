import Link from 'next/link';

export default function NotFound() {
	return (
		<section>
			<h1>404 - Page Not Found</h1>
			<p>
				Oops! The page you are looking for does not exist.{' '}
				<Link href='/' className='underline underline-offset-2'>
					Go back home
				</Link>
				.
			</p>
		</section>
	);
}
