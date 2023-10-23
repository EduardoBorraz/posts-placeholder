"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

import Table from "@/components/Table/Table";
import { Card, CardContent, Icon, IconButton } from "@mui/material";
import { getPosts } from "./services/posts.services";
import { Posts } from "./models/posts.models";

export default function Lists() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const columns = [
    { id: "id", label: "Id" },
    { id: "username", label: "User" },
    { id: "title", label: "Title" },
    { id: "action", label: "Actions" },
  ];
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchGetPosts = async () => {
        const posts = await getPosts(user.id);
        setPosts(
          posts.map((post) => ({
            ...post,
            username: user.name,
            action: (
              <IconButton size="small">
                <Icon>edit</Icon>
              </IconButton>
            ),
          }))
        );
      };

      fetchGetPosts();
    }
  }, []);

  return (
    <Card elevation={0}>
      <CardContent>
        <Table data={posts} columns={columns} />
      </CardContent>
    </Card>
  );
}
