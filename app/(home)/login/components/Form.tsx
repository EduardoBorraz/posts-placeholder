"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Box, Button, Card, Typography, TextField } from "@mui/material";
import Image from "next/image";

import { Login } from "../models/login.model";
import Snackbar from "@/components/Snackbar/Snackbar";

import notes_ico from "../../../../public/notes_icon.svg";
import HomeStyles from "../../../../app/(home)/page.module.css";
import { getLogin } from "../services/login.services";
import { setStorage } from "../../../../utils/storage";

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const [message, setMessage] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Login> = async (data) => {
    const response = await getLogin(data.email);
    if (response.length === 0) {
      setMessage("User not found");
      setShowSnackbar(true);
      return;
    }

    router.push("/posts/lists");
    setStorage("user", { ...response[0], authenticated: true });
  };

  return (
    <>
      <Snackbar open={showSnackbar} message={message} />
      <Box className={HomeStyles.containerFlex}>
        <Card elevation={0} sx={{ minWidth: "475px" }}>
          <Box className={HomeStyles.cardContent}>
            <Image
              src={notes_ico}
              width={100}
              height={100}
              alt="noteplace"
              priority
            />
            <Typography
              variant="h6"
              marginBottom={4}
              color={"primary"}
              fontWeight={600}
            >
              Hi, Welcome
            </Typography>
            <Typography variant="body2" marginBottom={4}>
              Enter your credentials to continue.
            </Typography>

            <TextField
              label="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email && true}
              helperText={errors.email?.message && errors.email?.message}
              sx={{ mb: 4 }}
            />

            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handleSubmit(onSubmit)}
            >
              Sig In
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}
