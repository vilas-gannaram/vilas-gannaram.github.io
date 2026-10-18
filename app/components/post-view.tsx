import type { ComponentType } from 'react';
import { formatDate, type IPostMetadata } from '@/app/lib/posts';

export default function PostView({
	Content,
	metadata,
	readingTime,
}: IPostViewProps) {
	const badges = [metadata.difficulty, ...(metadata.tags ?? [])].filter(
		(badge): badge is string => Boolean(badge),
	);

	return (
		<section>
			<h1 className='mt-0'>{metadata.title}</h1>
			<p
				className={`text-muted-foreground text-sm font-mono ${
					badges.length > 0 ? 'mb-2' : 'mb-6'
				}`}
			>
				{formatDate(metadata.publishedAt)}
				{metadata.updatedAt && ` · Updated ${formatDate(metadata.updatedAt)}`}
				{` · ${readingTime} min read`}
			</p>
			{badges.length > 0 && (
				<div className='flex flex-wrap gap-2 mb-6'>
					{badges.map((badge) => (
						<span
							key={badge}
							className='text-xs font-mono text-muted-foreground border border-border rounded-full px-2 py-0.5 inline-flex items-center justify-center text-center leading-tight'
						>
							{badge}
						</span>
					))}
				</div>
			)}
			<Content />
		</section>
	);
}

interface IPostViewProps {
	Content: ComponentType;
	metadata: IPostMetadata;
	readingTime: number;
}
