import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  payload?: JsonFilter;
  timestampEvent?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
