import Table from "@/components/Table/Table";
import { Card, CardContent, Icon, IconButton } from "@mui/material";
import { getPosts } from "./services/posts.services";

const fetchGetPosts = async () => await getPosts();

export default async function Lists() {
  const columns = [
    { id: "id", label: "Id" },
    { id: "userId", label: "User" },
    { id: "title", label: "Title" },
    { id: "action", label: "Actions" },
  ];
  const posts = (await fetchGetPosts()).map((post) => ({
    ...post,
    action: (
      <IconButton size="small">
        <Icon>edit</Icon>
      </IconButton>
    ),
  }));

  return (
    <Card elevation={0}>
      <CardContent>
        <Table data={posts} columns={columns} />
      </CardContent>
    </Card>
  );
}
