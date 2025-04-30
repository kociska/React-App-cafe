import React from "react";
import VeganGallery from "./ProductGalleries/VeganGallery";
import VeganList from "./VeganList";


function VListIndex() {
  return (
    <div>
      <ul>
        <Items
          name={Veganlist[0].name}
          image={Veganlist[0].img}
        />
        <Items
          name={Veganlist[1].name}
          image={Veganlist[1].img}
                  /><Items
                  name={Veganlist[2].name}
                  image={Veganlist[2].img}
                /><Items
                name={Veganlist[3].name}
                image={Veganlist[3].img}
              /><Items
              name={Veganlist[4].name}
              image={Veganlist[4].img}
            /><Items
            name={Veganlist[5].name}
            image={Veganlist[5].img}
          /><Items
                    name={Veganlist[6].name}
                    image={Veganlist[6].img}
                  /><Items
                  name={Veganlist[7].name}
                  image={Veganlist[7].img}
                /><Items
                name={Veganlist[8].name}
                image={Veganlist[8].img}
              /><Items
              name={Veganlist[9].name}
              image={Veganlist[9].img}
            /><Items
            name={Veganlist[10].name}
            image={Veganlist[10].img}
          />

      </ul>
    </div>

  );
}

export default VListIndex;
