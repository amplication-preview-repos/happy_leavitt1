import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="timestampEvent" source="timestampEvent" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
