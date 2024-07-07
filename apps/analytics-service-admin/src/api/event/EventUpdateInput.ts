import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  payload?: InputJsonValue;
  timestampEvent?: Date | null;
  typeField?: string | null;
};
