import { Comment } from "../comment/Comment";

export type BlogPost = {
  author: string | null;
  authorUser: string | null;
  comments?: Array<Comment>;
  content: string | null;
  contentBlogPost: string | null;
  createdAt: Date;
  id: string;
  publishedDate: Date | null;
  publishedDateBlogPost: Date | null;
  title: string | null;
  titleBlogPost: string | null;
  updatedAt: Date;
};
