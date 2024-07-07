import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  blogPostId?: SortOrder;
  createdAt?: SortOrder;
  dislikes?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
