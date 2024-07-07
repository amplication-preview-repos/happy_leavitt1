import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AnalyticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="blogPostId" source="blogPostId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dislikes" source="dislikes" />
        <TextField label="ID" source="id" />
        <TextField label="likes" source="likes" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="views" source="views" />
      </SimpleShowLayout>
    </Show>
  );
};
