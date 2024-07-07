import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  author: string | null;
  authorComment: string | null;
  blogPost?: BlogPost | null;
  blogPostComment: string | null;
  content: string | null;
  contentComment: string | null;
  createdAt: Date;
  createdAtComment: Date | null;
  id: string;
  updatedAt: Date;
};
