import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  authorComment?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
  blogPostComment?: StringNullableFilter;
  content?: StringNullableFilter;
  contentComment?: StringNullableFilter;
  createdAtComment?: DateTimeNullableFilter;
  id?: StringFilter;
};
