import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function PinkStripe() {
  const theme = useTheme();
  return (
    <Box sx={{mx: "auto"}}>
      {/* pink stripe */}
      <Box sx={{ width: "100%", my: 0, height: 50, bgcolor: theme.palette.primary.blushPink  }}/>
      
    </Box>
  );
}

export default PinkStripe;
