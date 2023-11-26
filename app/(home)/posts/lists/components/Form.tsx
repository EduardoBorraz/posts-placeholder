"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import TemporaryDrawer from "@/components/Drawer/Drawer";

import { Posts } from "../models/posts.models";
import { createPost } from "../services/posts.services";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

interface Props {
  state: Record<"right", boolean>;
  toggleDrawer: (anchor: "right", open: boolean) => () => void;
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}

export default function Form({ state, toggleDrawer, setPosts }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<Posts>();
  const { user } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const titleValue = watch("title");
  const bodyValue = watch("body");
  const onSubmit: SubmitHandler<Posts> = async (data) => {
    if (user && user.id) {
      setLoading(true);
      const res = await createPost(user.id, data.title, data.body);
      if (res.success) {
        setLoading(false);
        reset();
        toggleDrawer("right", false)();
        setPosts((prev) => [...prev, res.data]);
      }
    }
  };

  const onCancel = () => {
    reset();
    toggleDrawer("right", false)();
  };

  return (
    <TemporaryDrawer state={state} toggleDrawer={toggleDrawer}>
      <Box component={"form"} padding={3} width={450}>
        <Typography variant="h6" marginBottom={4}>
          Add Post
        </Typography>
        <TextField
          label="Title"
          {...register("title", {
            required: true,
          })}
          onChange={(e) => setValue("title", e.target.value)}
          error={errors.title && true}
          helperText={errors.title && "Title is required"}
          sx={{ marginBottom: 3 }}
          autoFocus
        />
        <TextField
          label="Body"
          {...register("body", {
            required: true,
          })}
          onChange={(e) => setValue("body", e.target.value)}
          error={errors.body && true}
          helperText={errors.body && "Body is required"}
          multiline
          maxRows={4}
          sx={{ marginBottom: 3 }}
        />
        <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
          <Button variant="outlined" size="small" onClick={onCancel}>
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            size="small"
            loading={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </LoadingButton>
        </Stack>

        <Typography variant="subtitle2">Preview</Typography>
        <Divider sx={{ marginBottom: 3 }} />

        <Card elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
          <CardContent>
            <Typography variant="subtitle1" marginBottom={2} fontWeight={600}>
              {titleValue ? titleValue : "Title"}
            </Typography>
            <Typography variant="body2" marginBottom={2}>
              {bodyValue ? bodyValue : "Body"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </TemporaryDrawer>
  );
}
