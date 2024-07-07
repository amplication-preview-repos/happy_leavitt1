import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  authorUser?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  contentBlogPost?: StringNullableFilter;
  id?: StringFilter;
  publishedDate?: DateTimeNullableFilter;
  publishedDateBlogPost?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  titleBlogPost?: StringNullableFilter;
};
