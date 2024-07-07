import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  id: string;
  payload: JsonValue;
  timestampEvent: Date | null;
  typeField: string | null;
  updatedAt: Date;
};
