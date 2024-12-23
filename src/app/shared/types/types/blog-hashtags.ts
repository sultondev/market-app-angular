

export const TypedBlogHashTags = {
  1: 'fashion',
  2: 'travel',
  3: 'technology',
  // ... more tags
} as const;

export type BlogHashTagId = keyof typeof TypedBlogHashTags;       // type is 1 | 2 | 3 ...
export type BlogHashTagName = typeof TypedBlogHashTags[BlogHashTagId]; // type is 'fashion' | 'travel' | 'technology'

