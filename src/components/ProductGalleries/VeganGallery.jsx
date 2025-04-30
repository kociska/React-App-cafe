import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme, useMediaQuery } from "@mui/material"; //because not responsive without, yet



export default function VeganGallery ({items, title = "Vegan"}) { 
    const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const columns = isXs ? 2 : 4; //2 on xs, 4 on bigger
  
  
  return (
    <div class="galleryProducts">
    <ImageList sx={{ width: "100%", maxWidth: 1200, height: "auto" }} cols={columns}>
      <ImageListItem key="Subheader" cols={columns}>
        <ListSubheader component="div" sx={{
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000000",
    background: "transparent",
    textAlign: "center",
    letterSpacing: "2px",
    py: 2 // paddingY
  }} >{title}</ListSubheader>
      </ImageListItem>
      {Array.isArray(items) && items.map((item) => (
        <ImageListItem key={item.img}>
          <img
            
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

    </div>

  );
}

