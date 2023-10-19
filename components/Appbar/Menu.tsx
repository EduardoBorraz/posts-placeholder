import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

interface Props {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleProfile: () => void;
  handleLogout: () => void;
}

export default function MenuInfo({
  anchorEl,
  handleClose,
  handleProfile,
  handleLogout,
}: Props) {
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
