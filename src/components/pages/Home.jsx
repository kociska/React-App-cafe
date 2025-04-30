import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import cafeImg from "../../assets/cafeInside.png";
import { useTheme } from "@mui/material/styles";
import Paper from '@mui/material/Paper';

function Home() {
  const theme = useTheme();
  return (
    <Box sx={{mx: "auto"}}>
      
      {/* Main hero photo */}
      <Box component="img" src={cafeImg} alt=" Cafe inner image" sx={{width: "100%", my: 0, height: "auto", objectFit: "cover"}} />
      {/* stone stripe Contact details*/} 
      <Box sx={{width: "100%", my: 0, height: "auto", bgcolor: theme.palette.primary.stone }}>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} sx={{ mt: 0 }}>
          <Paper elevation={ 20 } sx={{ p: 3, bgcolor: theme.palette.primary.stone}}>
            <Typography variant="h5" sx={{fontWeight: 700, mb:1}}>Cafe Corner</Typography>
            <Typography variant="body1" >Cornelia Place 123, 
              EH1 2KL Edinburgh
            </Typography>
            <Typography variant="body1" sx={{mt: 1}}>Phone: 0789 32 32 32 </Typography>
            <Typography variant="body1" sx={{mt: 1}}>Email: contact@cafecorner.co.uk</Typography>
            <Typography variant="body1" sx={{mt: 1}}>Open everyday 9am - 19pm</Typography>
          </Paper>
        </Stack>
      </Box>

    </Box>
  );
}

export default Home;
