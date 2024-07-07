import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="emailUser" source="emailUser" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="firstNameUser" source="firstNameUser" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="lastNameUser" source="lastNameUser" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <TextInput label="usernameUser" source="usernameUser" />
      </SimpleForm>
    </Create>
  );
};
