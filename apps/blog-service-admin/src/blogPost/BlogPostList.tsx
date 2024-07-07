import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BlogPostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BlogPosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
