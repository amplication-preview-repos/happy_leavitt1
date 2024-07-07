import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  timestampEvent?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
