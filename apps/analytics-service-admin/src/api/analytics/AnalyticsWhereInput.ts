import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AnalyticsWhereInput = {
  blogPostId?: StringNullableFilter;
  dislikes?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  views?: IntNullableFilter;
};
