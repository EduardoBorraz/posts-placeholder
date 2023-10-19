import { Box, Button, Card, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import notes_ico from "../../public/notes_icon.svg";
import HomeStyles from "../../app/(home)/page.module.css";

export default function Home() {
  return (
    <Box className={HomeStyles.containerFlex}>
      <Card elevation={0}>
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
            ¡Welcome to PlacePost!
          </Typography>
          <Typography variant="caption" marginBottom={4}>
            Please click on the button if you want to log in.
          </Typography>
          <Button variant="contained" sx={{ width: "100%" }}>
            <Link href="/login">Login</Link>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
