import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="timestampEvent" source="timestampEvent" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
