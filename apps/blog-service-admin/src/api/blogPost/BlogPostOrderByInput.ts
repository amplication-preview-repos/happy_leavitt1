import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  authorUser?: SortOrder;
  content?: SortOrder;
  contentBlogPost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedDate?: SortOrder;
  publishedDateBlogPost?: SortOrder;
  title?: SortOrder;
  titleBlogPost?: SortOrder;
  updatedAt?: SortOrder;
};
