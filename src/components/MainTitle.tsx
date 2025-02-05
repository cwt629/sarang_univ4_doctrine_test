import { Box, Typography } from "@mui/material";

const MainTitle = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "bolder" }}
      >
        제자훈련 교리시험
      </Typography>
      <Typography sx={{ textAlign: "right", fontSize: "0.8rem" }}>
        Powered by HAWRO
      </Typography>
    </Box>
  );
};

export default MainTitle;
