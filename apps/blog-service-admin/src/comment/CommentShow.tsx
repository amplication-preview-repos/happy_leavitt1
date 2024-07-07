import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BLOGPOST_TITLE_FIELD } from "../blogPost/BlogPostTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="authorComment" source="authorComment" />
        <ReferenceField
          label="blogPost"
          source="blogpost.id"
          reference="BlogPost"
        >
          <TextField source={BLOGPOST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="blogPostComment" source="blogPostComment" />
        <TextField label="content" source="content" />
        <TextField label="contentComment" source="contentComment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdAtComment" source="createdAtComment" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
