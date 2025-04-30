import React, {useState} from "react";
import DropdownMenu from "./DropdownMenu";
import cupcakesList from "../CupcakesList";
import MuffinList from "../MuffinList";
import VeganList from "../VeganList";
import CupcakesGallery from "../ProductGalleries/CupcakeGallery";

function OurMenu() {


const allProducts = [
    ...cupcakesList,
    ...MuffinList,
    ...VeganList
  ];

  return (
    <div className="menu-page">
      
      <DropdownMenu />
      <CupcakesGallery items={allProducts} title="All Products" />

    </div>
    );
}

export default OurMenu;
