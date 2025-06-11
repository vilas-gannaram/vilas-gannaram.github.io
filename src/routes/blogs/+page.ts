import { getAllPosts } from '$lib/services/blog-service';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = await getAllPosts();
	return { posts };
};
