'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from './theme-toggle';

const navItems = {
	'/': {
		name: 'home',
	},
	'/blog': {
		name: 'blog',
	},
};

export default function Header() {
	const pathname = usePathname();

	return (
		<aside className='not-typeset mb-16 tracking-tight'>
			<div className='lg:sticky lg:top-20'>
				<nav
					className='flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
					id='nav'
				>
					<div className='flex flex-row space-x-4 lg:space-x-6'>
						{Object.entries(navItems).map(([path, { name }]) => {
							const isActive =
								path === '/' ? pathname === path : pathname.startsWith(path);

							return (
								<Link
									key={path}
									href={path}
									className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 border-b-2 ${
										isActive
											? 'border-foreground'
											: 'border-transparent'
									}`}
								>
									{name}
								</Link>
							);
						})}
					</div>
					<ThemeToggle />
				</nav>
			</div>
		</aside>
	);
}
