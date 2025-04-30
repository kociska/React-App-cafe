import React from "react";

import {AppBar, Typography} from "@mui/material";
import {Toolbar, Tabs, Tab, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import DrawerComp from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { NoEncryption } from "@mui/icons-material";




function Nav() {

  const theme = useTheme();
  const isMatch = useMediaQuery (theme.breakpoints.down('md')); //true when md and lower
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static">
    <Toolbar>
    <Link
        component={RouterLink}
        to="/"
        underline="none"
        color="inherit"
        sx={{cursor:"pointer", "&:hover": {textDecoration: "none", color: "inherit",}, "&:active": {color:"inherit"}, "&:visited": {color: "inherit",}}}>
      <img src={logo} width="120rem" alt="Corner Cafe Logo" />
      </Link>

{/* Conditional (ternary) operator like if condition ? (do this):(do this) */}      
    { 
    isMatch ? (  
      <DrawerComp />

    ):(

    <>
      <Tabs>
        <NavLink to="/"> <Tab label ="Home" sx={{color: theme.palette.tabText.main, fontWeight: "bold", fontSize: isActive("/") ? "1.4rem" : "1.2rem", }} /> </NavLink>
        <NavLink to="/ourmenu"> <Tab label="Our Menu" sx={{color: theme.palette.tabText.main, fontWeight: "bold", fontSize: isActive("/ourmenu") ? "1.4rem" : "1.2rem", }} /></NavLink>
        <NavLink to="/team"><Tab label="Team"  sx={{color: theme.palette.tabText.main, fontWeight: "bold", fontSize: isActive("/team") ? "1.4rem" : "1.2rem", }}/> </NavLink>
      </Tabs>

      <Typography variant="h3"   sx={{marginLeft: "auto", fontWeight: "bold", ...theme.typography.logo, }}>
        <Link
        component={RouterLink}
        to="/"
        underline="none"
        color="inherit"
        sx={{cursor:"pointer", "&:hover": {textDecoration: "none", color: "inherit",}, "&:active": {color:"inherit"}, "&:visited": {color: "inherit",}}}> Corner Cafe </Link> 
      </Typography>
      </>
    )
}
    </Toolbar>
     
    
    </AppBar>
  );
}

export default Nav;
