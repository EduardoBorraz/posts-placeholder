"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

import Table from "@/components/Table/Table";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Icon,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { getPosts } from "./services/posts.services";
import { Posts } from "./models/posts.models";

export default function Lists() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const columns = [
    { id: "id", label: "Id" },
    { id: "username", label: "User" },
    { id: "title", label: "Title" },
    { id: "action", label: "Action" },
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
        <CardHeader
          title={
            <Typography variant="h6" fontWeight={600}>
              Posts
            </Typography>
          }
          /*  action={
            <Button
              startIcon={<Icon>add</Icon>}
              variant="contained"
              size="small"
            >
              New Post
            </Button>
          } */
        />
        <Divider sx={{ mb: 2 }} />
        <Box marginBottom={4}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <TextField
              size="small"
              sx={{ width: "15%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              size="small"
              startIcon={<Icon>add</Icon>}
            >
              New Post
            </Button>
          </Stack>
        </Box>
        <Table data={posts} columns={columns} />
      </CardContent>
    </Card>
  );
}
