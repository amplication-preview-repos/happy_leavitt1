import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorComment" source="authorComment" />
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="blogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
        <TextInput label="blogPostComment" source="blogPostComment" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="contentComment" multiline source="contentComment" />
        <DateTimeInput label="createdAtComment" source="createdAtComment" />
      </SimpleForm>
    </Edit>
  );
};
