import styled from "@emotion/styled";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React from "react";

function Feed() {
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#E5E7EB",
    padding: "8px",
    width: "80%",
  }));

  return (
    <Box
      sx={{
        height: "91.5vh",
        width: "100%",
        background: "#E5E7EB",
        padding: "0",
        marginTop: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ paddingTop: "100px", paddingLeft: "70px" }}>
        <Typography
          sx={{
            color: "black",
            fontFamily: "Roboto",
            fontWeight: "900",
            fontStyle: "normal",
            letterSpacing: "1px",
            fontSize: "63px",
          }}
          variant="span"
        >
          To Choose
        </Typography>
        <Typography
          sx={{
            color: "#4F46E5",
            fontFamily: "Roboto",
            fontWeight: "900",
            fontStyle: "normal",
            letterSpacing: "1px",
            fontSize: "63px",
            marginLeft: "20px",
          }}
          variant="span"
        >
          Right Jobs
        </Typography>
        <br />
        <Typography
          sx={{
            color: "gray",
            fontFamily: "Roboto",
            fontWeight: "300",
            fontStyle: "normal",
            letterSpacing: "1px",
            fontSize: "17px",
            opacity: "0.8",
          }}
          variant="span"
        >
          2400 Peoples are daily search in this portal, 100 user added job
          portal!
        </Typography>
        <Box
          sx={{
            height: "74px",
            width: "800px",
            background: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: "40px",
            marginTop: "50px",
          }}
        >
          <Search>
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Search Jobs with Job categories like marketing ..."
            />
          </Search>
          <Button sx={{ marginLeft: "35px" }} variant="contained">
            SEARCH
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Feed;
