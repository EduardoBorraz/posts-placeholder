import { Snackbar as SnackbarMui, Alert } from "@mui/material";

interface Props {
  message: string;
  open: boolean;
}

export default function Snackbar({ message, open }: Props) {
  return (
    <SnackbarMui
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      message={message}
      security="warning"
      autoHideDuration={6000}
    >
      <Alert severity="warning" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </SnackbarMui>
  );
}
