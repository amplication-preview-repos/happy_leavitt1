import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emailUser: string | null;
  firstName: string | null;
  firstNameUser: string | null;
  id: string;
  lastName: string | null;
  lastNameUser: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  usernameUser: string | null;
};
