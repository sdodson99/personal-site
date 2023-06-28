import { z, defineCollection, reference } from 'astro:content';
import { DateTime } from 'luxon';

const tagCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    color: z.string(),
    backgroundColor: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(reference('tag')),
    publishDate: z
      .string()
      .transform((value) =>
        DateTime.fromFormat(value, 'yyyy-LL-dd').toJSDate()
      ),
  }),
});

export const collections = {
  blog: blogCollection,
  tag: tagCollection,
};
