import styled from "@emotion/styled";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import React from "react";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

function Feed() {
  const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "#E5E7EB",
    padding: "8px",
    width: "80%",
  }));

  return (
    <Box>
      <Box
        sx={{
          height: "91.5vh",
          width: "100%",
          background: "#E5E7EB",
          padding: "0",
          display: "flex",
          justifyContent: "space-between",
          mt: 10,
        }}
      >
        <Box
          sx={{ paddingTop: "100px", paddingLeft: { xs: "20px", sm: "4%" } }}
        >
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
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              marginTop: 3,
              paddingRight: "15px",
            }}
          >
            <TurnedInIcon fontSize="large" sx={{ color: "#4f46e5" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
              }}
              component={"span"}
            >
              Suggested Tags :
              <Typography
                sx={{
                  color: "gray",
                  opacity: "1",
                  wordSpacing: "15px",
                  pl: "15px",
                }}
                component={"span"}
              >
                Software Marketing UI/UX Design
              </Typography>
            </Typography>
          </Box>
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
              borderRadius: { xs: "15px", md: "0px" },
            }}
          >
            <Search
              sx={{
                marginTop: { xs: "20px", sm: "20px", md: "0px" },
                borderRadius: { xs: "10px", md: "0px" },
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
            <br />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              mt: "50px",
            }}
          >
            <TurnedInIcon fontSize="large" sx={{ color: "#4f46e5" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
              }}
              component={"span"}
            >
              Suggested Tags :
              <Typography
                sx={{
                  color: "gray",
                  opacity: "1",
                  wordSpacing: "15px",
                  pl: "15px",
                }}
                component={"span"}
              >
                Software Marketing UI/UX Design
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
            }}
          >
            <Typography
              component={"img"}
              sx={{ height: "230px" }}
              src="https://job-portal-teal.vercel.app/_next/image?url=%2Fintro.png&w=640&q=75"
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "70px",
            display: { xs: "none", xl: "block" },
          }}
        >
          <img src="https://job-portal-teal.vercel.app/_next/image?url=%2Fintro.png&w=640&q=75" />
        </Box>
      </Box>
    </Box>
  );
}

export default Feed;
