import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="blogPostId" source="blogPostId" />
        <NumberInput step={1} label="dislikes" source="dislikes" />
        <NumberInput step={1} label="likes" source="likes" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Create>
  );
};
