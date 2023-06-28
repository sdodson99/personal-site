import { CollectionEntry, getCollection } from 'astro:content';

type Tag = CollectionEntry<'tag'>['data'];

export async function getAllBlogPosts() {
  const blogPostsDirectoryPrefix = getBlogPostsDirectoryPrefix();

  const blogPostEntries = await getCollection('blog', ({ id }) =>
    id.startsWith(blogPostsDirectoryPrefix)
  );

  const tagsMap = await getTagsMap();

  return blogPostEntries.map((blog) => ({
    ...blog,
    data: {
      ...blog.data,
      tags: blog.data.tags.reduce<Tag[]>((result, { id }) => {
        const tag = tagsMap.get(id);

        if (tag) {
          result.push(tag);
        }

        return result;
      }, []),
    },
  }));
}

async function getTagsMap() {
  const tagEntries = await getCollection('tag');

  return tagEntries.reduce((map, tagEntry) => {
    map.set(tagEntry.id, tagEntry.data);

    return map;
  }, new Map<string, Tag>());
}

function getBlogPostsDirectoryPrefix() {
  const mock = import.meta.env.BLOG_CONTENT_MOCK;

  if (mock) {
    return `mock/${mock}/`;
  }

  return 'live/';
}
