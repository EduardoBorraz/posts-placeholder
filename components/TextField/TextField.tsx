import { TextField as TextFiledMui } from "@mui/material";
import TextFieldStyle from "./TextField.module.css";

interface Props {
  label: string;
  variant?: "standard" | "outlined" | "filled";
  sx?: object;
}

export default function TextField({
  label = "",
  variant = "outlined",
  sx,
}: Props) {
  return (
    <TextFiledMui
      className={TextFieldStyle.textfieled}
      label={label}
      variant={variant}
      sx={sx}
    />
  );
}
