import { Box, Button, Card, Typography, TextField } from "@mui/material";

import Image from "next/image";

import notes_ico from "../../../public/notes_icon.svg";
import HomeStyles from "../../../app/(home)/page.module.css";

export default function Login() {
  return (
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

          <TextField label="Email" sx={{ mb: 2 }} />
          <TextField label="Password" sx={{ mb: 4 }} />

          <Button variant="contained" sx={{ width: "100%" }}>
            Sig In
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
