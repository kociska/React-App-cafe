import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function ChocoStripe() {
  const theme = useTheme();
  return (
    <Box sx={{mx: "auto"}}>
      {/* choco stripe */}
      <Box sx={{ width: "100%", my: 0, height: 100, bgcolor: theme.palette.primary.choco  }}/>

    </Box>
  );
}

export default ChocoStripe;
