import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emailUser?: StringNullableFilter;
  firstName?: StringNullableFilter;
  firstNameUser?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lastNameUser?: StringNullableFilter;
  username?: StringFilter;
  usernameUser?: StringNullableFilter;
};
