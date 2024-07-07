import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AnalyticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalyticsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="blogPostId" source="blogPostId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dislikes" source="dislikes" />
        <TextField label="ID" source="id" />
        <TextField label="likes" source="likes" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="views" source="views" />
      </Datagrid>
    </List>
  );
};
