import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="blogPostId" source="blogPostId" />
        <NumberInput step={1} label="dislikes" source="dislikes" />
        <NumberInput step={1} label="likes" source="likes" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Edit>
  );
};
