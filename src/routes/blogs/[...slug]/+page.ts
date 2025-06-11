import { getPostBySlug } from '$lib/services/blog-service';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  // [...slug] will give you params.slug as array (or string in some cases)
  const slugArray = params.slug;
  const slug = Array.isArray(slugArray) ? slugArray.join('/') : slugArray;

  const post = await getPostBySlug(slug);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return { post };
};
