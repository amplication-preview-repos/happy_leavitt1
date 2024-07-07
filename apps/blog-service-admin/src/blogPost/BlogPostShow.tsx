import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOGPOST_TITLE_FIELD } from "./BlogPostTitle";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="authorUser" source="authorUser" />
        <TextField label="content" source="content" />
        <TextField label="contentBlogPost" source="contentBlogPost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="publishedDate" source="publishedDate" />
        <TextField
          label="publishedDateBlogPost"
          source="publishedDateBlogPost"
        />
        <TextField label="title" source="title" />
        <TextField label="titleBlogPost" source="titleBlogPost" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="blogPostId"
          label="Comments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
