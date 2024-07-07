import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  payload?: InputJsonValue;
  timestampEvent?: Date | null;
  typeField?: string | null;
};
