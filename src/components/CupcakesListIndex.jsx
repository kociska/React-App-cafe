import React from "react";
import CupcakeGallery from "./ProductGalleries/CupcakeGallery";
import CupcakesList from "./CupcakesList";


function ListIndex() {
  return (
    <div>
      <ul>
        <Items
          name={cupcakesList[0].name}
          image={cupcakesList[0].img}
        />
        <Items
          name={cupcakesList[1].name}
          image={cupcakesList[1].img}
                  /><Items
                  name={cupcakesList[2].name}
                  image={cupcakesList[2].img}
                /><Items
                name={cupcakesList[3].name}
                image={cupcakesList[3].img}
              /><Items
              name={cupcakesList[4].name}
              image={cupcakesList[4].img}
            /><Items
            name={cupcakesList[5].name}
            image={cupcakesList[5].img}
          /><Items
                    name={cupcakesList[6].name}
                    image={cupcakesList[6].img}
                  /><Items
                  name={cupcakesList[7].name}
                  image={cupcakesList[7].img}
                /><Items
                name={cupcakesList[8].name}
                image={cupcakesList[8].img}
              /><Items
              name={cupcakesList[9].name}
              image={cupcakesList[9].img}
            /><Items
            name={cupcakesList[10].name}
            image={cupcakesList[10].img}
          />

      </ul>
    </div>

  );
}

export default ListIndex;
