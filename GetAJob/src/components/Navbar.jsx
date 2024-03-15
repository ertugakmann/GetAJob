import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    background: "rgb(127,34,195)",
    background:
      "radial-gradient(circle, rgba(127,34,195,1) 23%, rgba(74,45,253,1) 100%)",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#eee",
    padding: "0 10px",
    borderRadius: "7px",
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));

  const StyledLogoText = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat",
    fontOpticalSizing: "auto",
    fontWeight: "489",
    fontStyle: "bold",
  }));
  return (
    <AppBar position="fixed">
      <StyledToolBar>
        <StyledLogoText
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Get A Job
        </StyledLogoText>
        <MenuIcon
          onClick={(e) => setOpen(true)}
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase sx={{ width: "100%" }} placeholder="Search..." />
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
              display: { xs: "none", sm: "block" },
            }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography variant="span">Ertug</Typography>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        onClick={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
