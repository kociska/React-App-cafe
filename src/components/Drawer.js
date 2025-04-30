import React from "react";
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from "react";
import {NavLink } from 'react-router-dom';


export default function DrawerComp () {

    const [openDrawer, setOpenDrawer]  = useState(false)

    return (
        <div>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton component={NavLink} to="/" onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                        
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/menu" onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <RestaurantMenuIcon />
                        </ListItemIcon>
                        <ListItemText primary="Menu"/>
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/team" onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Team"/>
                    </ListItemButton>

                </List>
            </Drawer>
            <IconButton sx={{color: '#ffffff'}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ fontSize: 40 }} />

            </IconButton>
        </div>
    )
}