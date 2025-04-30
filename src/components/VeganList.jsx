import React from "react";
import VapplePeach from "../assets/products/vegan/apple_peach.jpg";
import VblueberryVanilla from "../assets/products/vegan/blueberry_vanilla.jpg";
import Vcarrot from "../assets/products/vegan/carrot.jpg";
import VclassicVanilla from "../assets/products/vegan/classic_vanilla.jpg";
import Vcoconut from "../assets/products/vegan/coconut.jpg";
import VlemonCupcake from "../assets/products/vegan/lemon_cupcake.jpg";
import Vmint from "../assets/products/vegan/mint.jpg";
import Vmocca from "../assets/products/vegan/mocca.jpg";
import VmuffinChocolate from "../assets/products/vegan/muffin_chocolate.jpg";
import Vpeach from "../assets/products/vegan/peach.jpg";
import Vredcurrant from "../assets/products/vegan/redcurrant.jpg";


const VeganList = [
  {
    id: 1,
    name: "Apple Peach V-Muffin",
    img: VapplePeach,
    rows: 2,
    cols: 2,
    featured: true,
},
  {
    id: 2,
    name: "Blueberry-Vanilla V-Muffin",
    img: VblueberryVanilla,
  },
  {
    id: 3,
    name: "Carrot V-Muffin",
    img: Vcarrot,
    //cols: 2,
  },
  {
    id: 4,
    name: "Classic Vanilla V-Muffin",
    img: VclassicVanilla,
  },{
    id: 5,
    name: "Coconut V-Muffin",
    img: Vcoconut,
    //rows: 2,
    //cols: 2,
    //featured: true,
  },{
    id: 6,
    name: "Lemon Cupcake V-Muffin",
    img: VlemonCupcake,
    //cols: 2,
  },{
    id: 7,
    name: "Mint V-Muffin",
    img: Vmint,
  },{
    id: 8,
    name: "Mocca V-Muffin",
    img: Vmocca,
  },{
    id: 9,
    name: "Chocolate V-Muffin",
    img: VmuffinChocolate,
    //rows: 2,
    //cols: 2,
    //featured: true,
  },{
    id: 10,
    name: "Peach V-Muffin",
    img: Vpeach,
  },{
    id: 11,
    name: "Redcurrant V-Muffin",
    img: Vredcurrant,
    //cols: 2,
  }
];

export default VeganList;
