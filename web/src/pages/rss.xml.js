import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import fetchApi from '../lib/strapi';

export async function GET(context) {
  const articles = await fetchApi({
    endpoint: 'articles',
    wrappedByKey: 'data',
  });
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: articles.map((article) => ({
      ...article.attributes,
      title: article.attributes.title || '',
      description: article.attributes.description || '',
      pubDate: new Date(article.attributes.publishedAt),
      link: `/blog/${article.attributes.slug}/`,
    })),
  });
}
