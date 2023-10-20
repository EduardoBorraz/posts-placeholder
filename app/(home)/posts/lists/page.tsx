import Table from "@/components/Table/Table";
import { Card, CardContent } from "@mui/material";
import { getPosts } from "./services/posts.services";

const fetchGetPosts = async () => await getPosts();

export default async function Lists() {
  const columns = ["userId", "id", "title"];
  const posts = await fetchGetPosts();

  return (
    <Card elevation={0}>
      <CardContent>
        <Table data={posts} columns={columns} />
      </CardContent>
    </Card>
  );
}
