import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  authorComment?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  blogPostComment?: string | null;
  content?: string | null;
  contentComment?: string | null;
  createdAtComment?: Date | null;
};
