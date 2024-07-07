import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  author?: string | null;
  authorUser?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  content?: string | null;
  contentBlogPost?: string | null;
  publishedDate?: Date | null;
  publishedDateBlogPost?: Date | null;
  title?: string | null;
  titleBlogPost?: string | null;
};
