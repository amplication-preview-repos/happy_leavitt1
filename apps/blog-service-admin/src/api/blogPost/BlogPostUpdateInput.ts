import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: string | null;
  authorUser?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  contentBlogPost?: string | null;
  publishedDate?: Date | null;
  publishedDateBlogPost?: Date | null;
  title?: string | null;
  titleBlogPost?: string | null;
};
