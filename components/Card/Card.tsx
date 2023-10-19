import { Card as CardMui } from "@mui/material";
import CardStyle from "./Card.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <CardMui className={CardStyle.card} elevation={0}>
      {children}
    </CardMui>
  );
}
