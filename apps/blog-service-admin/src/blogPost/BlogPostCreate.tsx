import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorUser" source="authorUser" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <TextInput label="contentBlogPost" multiline source="contentBlogPost" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <DateTimeInput
          label="publishedDateBlogPost"
          source="publishedDateBlogPost"
        />
        <TextInput label="title" source="title" />
        <TextInput label="titleBlogPost" source="titleBlogPost" />
      </SimpleForm>
    </Create>
  );
};
