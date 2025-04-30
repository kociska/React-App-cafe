import React from "react";
import CchocoLemon from "../assets/products/cupcakes/choco_lemon.jpg";
import CchocoLover from "../assets/products/cupcakes/choco_lover.jpg";
import Cchurros from "../assets/products/cupcakes/churros.jpg";
import CfrostingFrenzy from "../assets/products/cupcakes/frosting_frenzy.jpg";
import CheavenlyCupcake from "../assets/products/cupcakes/heavenly_cupcake.jpg";
import Cmocha from "../assets/products/cupcakes/mocha.jpg";
import Cmonster from "../assets/products/cupcakes/monster.jpg";
import CpeanutButter from "../assets/products/cupcakes/peanut_butter.jpg";
import CredDiva from "../assets/products/cupcakes/red_diva.jpg";
import CvanillaRaspberry from "../assets/products/cupcakes/vanilla_raspberry.jpg";
import CvanillaStrawberry from "../assets/products/cupcakes/vanilla_strawberry.jpg";


const cupcakesList = [
  {
    id: 1,
    name: "Choco-Lemon Cupcake",
    img: CchocoLemon,
    rows: 2,
    cols: 2,
    featured: true,
},
  {
    id: 2,
    name: "Choco-Lover Cupcake",
    img: CchocoLover,
  },
  {
    id: 3,
    name: "Churros",
    img: Cchurros,
    cols: 2,
  },
  {
    id: 4,
    name: "Frosting Frenzy",
    img: CfrostingFrenzy,
  },{
    id: 5,
    name: "Heavenly Cupcake",
    img: CheavenlyCupcake,
    rows: 2,
    cols: 2,
    featured: true,
  },{
    id: 6,
    name: "Mocha cake",
    img: Cmocha,
    //cols: 2,
  },{
    id: 7,
    name: "Monster cake",
    img: Cmonster,
  },{
    id: 8,
    name: "Peanut Butter cake",
    img: CpeanutButter,
  },{
    id: 9,
    name: "Red Diva cake",
    img: CredDiva,
    rows: 2,
    cols: 2,
    featured: true,
  },{
    id: 10,
    name: "Vanilla-Raspberry cake",
    img: CvanillaRaspberry,
  },{
    id: 11,
    name: "Vanilla-Strawberry Cake",
    img: CvanillaStrawberry,
    cols: 2,
  }
];

export default cupcakesList;
