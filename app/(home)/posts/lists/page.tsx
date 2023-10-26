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
import { useDrawer } from "@/hooks/useDrawer";
import TemporaryDrawer from "@/components/Drawer/Drawer";
import Form from "./components/Form";

export default function Lists() {
  const { state, toggleDrawer } = useDrawer({ right: true });
  const [posts, setPosts] = useState<Posts[]>([]);
  const columns = [
    { id: "id", label: "Id" },
    { id: "username", label: "User" },
    { id: "title", label: "Title" },
    { id: "action", label: "Action" },
  ];
  const { user } = useUser();

  useEffect(() => {
    const fetchPosts = async () => {
      if (user) {
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
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  return (
    <Card elevation={0}>
      <CardContent>
        <CardHeader
          title={
            <Typography variant="h6" fontWeight={600}>
              Posts
            </Typography>
          }
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
              onClick={toggleDrawer("right", true)}
            >
              New Post
            </Button>
          </Stack>
        </Box>
        <Table data={posts} columns={columns} />
        <Form state={state} toggleDrawer={toggleDrawer} />
      </CardContent>
    </Card>
  );
}
