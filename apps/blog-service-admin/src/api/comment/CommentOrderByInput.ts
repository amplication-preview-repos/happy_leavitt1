import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  authorComment?: SortOrder;
  blogPostId?: SortOrder;
  blogPostComment?: SortOrder;
  content?: SortOrder;
  contentComment?: SortOrder;
  createdAt?: SortOrder;
  createdAtComment?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
