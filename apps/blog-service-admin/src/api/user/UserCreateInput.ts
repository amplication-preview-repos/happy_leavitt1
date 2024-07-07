import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  emailUser?: string | null;
  firstName?: string | null;
  firstNameUser?: string | null;
  lastName?: string | null;
  lastNameUser?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  usernameUser?: string | null;
};
