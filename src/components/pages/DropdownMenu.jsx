import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CupcakesGallery from "../ProductGalleries/CupcakeGallery";
import cupcakesList from "../CupcakesList";
import MuffinGallery from "../ProductGalleries/MuffinGallery";
import MuffinList from "../MuffinList";
import VeganGallery from "../ProductGalleries/VeganGallery";
import VeganList from "../VeganList";




function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [selectedMenu, setSelectedMenu] = useState(null); //state to track will store what was clicked:

  
  return (
    <div className="dropdownButton">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
            >
        The sorting cake for coffee machine
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{ style: {width: "50%"},}}
      >
        <MenuItem onClick={() => { setSelectedMenu("Muffins"); handleClose(); }} sx={{ justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", borderBottom: "1px solid #592C22"}}>Muffins</MenuItem>
        <MenuItem onClick={() => { setSelectedMenu("Cupcakes"); handleClose(); }} sx={{ justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem",borderBottom: "1px solid #592C22"}}>Cupcakes</MenuItem>
        <MenuItem onClick={() => { setSelectedMenu("Vegan"); handleClose(); }} sx={{ justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem",}}>Vegan</MenuItem>
      </Menu>

      {/* conditional gallery rendering */}
      {selectedMenu === "Muffins" && (
        <MuffinGallery items={MuffinList} title="Muffins" />
      )}

{selectedMenu === "Cupcakes" && (
        <CupcakesGallery items={cupcakesList} title="Cupcakes" />
      )}

{selectedMenu === "Vegan" && (
        <VeganGallery items={VeganList} title="Vegan" />
      )}

    </div>
  );
}

export default DropdownMenu;