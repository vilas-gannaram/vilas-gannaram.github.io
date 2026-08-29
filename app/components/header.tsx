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
		<aside className='not-typeset sticky top-0 z-20 mb-16 tracking-tight bg-background/80 backdrop-blur-sm supports-backdrop-filter:bg-background/60'>
			<nav
				className='flex flex-row items-center justify-between relative py-3 fade md:overflow-auto scroll-pr-6 md:relative'
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
								className={`transition-all hover:text-foreground flex align-middle relative py-1 border-b-2 ${
									isActive
										? 'text-foreground border-foreground'
										: 'text-muted-foreground border-transparent'
								}`}
							>
								{name}
							</Link>
						);
					})}
				</div>
				<ThemeToggle />
			</nav>
		</aside>
	);
}
