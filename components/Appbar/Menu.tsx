"use client";
import { useRouter } from "next/navigation";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { removeStorage } from "@/utils/storage";

interface Props {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export default function MenuInfo({ anchorEl, handleClose }: Props) {
  const router = useRouter();

  const handleProfile = () => {};

  const handleLogout = () => {
    removeStorage("user");
    router.push("/login");
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );
}
