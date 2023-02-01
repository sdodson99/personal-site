import { z, defineCollection } from 'astro:content';
import { DateTime } from 'luxon';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z
      .string()
      .transform((value) =>
        DateTime.fromFormat(value, 'yyyy-LL-dd').toJSDate()
      ),
  }),
});

export const collections = {
  blog: blogCollection,
};
