import React from "react";

import {AppBar} from "@mui/material";
import {Box, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Footer (){
    return (
        <Box component="footer" sx={{bgcolor: "footer.main", color: "footer.contrastText", py: 0, px: 2, mt: 0, }} > {/*from theme*/}
         <Stack direction={{ xs: "column", sm:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1} >
                <LocalCafeIcon />
                <Typography variant="h6" sx={{fontWeight: "bold"}}>Corner Cafe</Typography>
            </Stack>
            <Typography variant="body2">© {new Date().getFullYear()} Corner Cafe. All rights reserved.</Typography> {/* always actual year in footer with javascript function*/}
            <Stack direction="row" spacing={1}>
                <IconButton href="https://facebook.com" target="_blank" rel="noopener" sx={{ color:"footer.contrastText"}}> <FacebookIcon /></IconButton>
                <IconButton href="https://instagram.com" target="_blank" rel="noopener" sx={{ color:"footer.contrastText"}}><InstagramIcon /></IconButton>
            </Stack>

         </Stack>
        </Box>
    );
}

export default Footer;