import React from "react";
import MuffinGallery from "./ProductGalleries/MuffinGallery";
import MuffinList from "./MuffinList";


function MListIndex() {
  return (
    <div>
      <ul>
        <Items
          name={Muffinlist[0].name}
          image={Muffinlist[0].img}
        />
        <Items
          name={Muffinlist[1].name}
          image={Muffinlist[1].img}
                  /><Items
                  name={Muffinlist[2].name}
                  image={Muffinlist[2].img}
                /><Items
                name={Muffinlist[3].name}
                image={Muffinlist[3].img}
              /><Items
              name={Muffinlist[4].name}
              image={Muffinlist[4].img}
            /><Items
            name={Muffinlist[5].name}
            image={Muffinlist[5].img}
          /><Items
                    name={Muffinlist[6].name}
                    image={Muffinlist[6].img}
                  /><Items
                  name={Muffinlist[7].name}
                  image={Muffinlist[7].img}
                /><Items
                name={Muffinlist[8].name}
                image={Muffinlist[8].img}
              /><Items
              name={Muffinlist[9].name}
              image={Muffinlist[9].img}
            /><Items
            name={Muffinlist[10].name}
            image={Muffinlist[10].img}
          />

      </ul>
    </div>

  );
}

export default CupListIndex;
