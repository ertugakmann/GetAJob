import styled from "@emotion/styled";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React from "react";

function Feed() {
  const Search = styled(Box)(({ theme }) => ({
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
      <Box sx={{ paddingTop: "100px", paddingLeft: { xs: "20px", sm: "4%" } }}>
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
            height: { xs: "130px", md: "74px" },
            width: {
              xs: "400px",
              sm: "80%",
              md: "700px",
              lg: "750px",
              xl: "800px",
            },
            background: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            paddingLeft: { xs: "0px", md: "4%" },
            marginTop: "50px",
            display: "flex",
          }}
        >
          <Search
            sx={{
              marginTop: { xs: "20px", sm: "20px", md: "0px" },
            }}
          >
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Search Jobs with Job categories like marketing ..."
            />
          </Search>
          <Button
            sx={{
              marginLeft: { md: "20px", sm: "20px", lg: "30px" },
              marginTop: { xs: "20px", sm: "20px", md: "0px" },
            }}
            variant="contained"
          >
            SEARCH
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Feed;
