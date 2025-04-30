
import React from "react";
import ListCard from "./ListCard";
import ListNames from "./ListNames";


function ListTeam() {
  return (
    <div>
      <ul>
        <ListCard
          name={member[0].name}
          image={member[0].img}
          description={member[0].description}
          
        />
        <ListCard
          name={member[1].name}
          image={member[1].img}
          description={member[1].description}
          
        />
        <ListCard
          name={member[2].name}
          image={member[2].img}
          description={member[2].description}
        />
      </ul>
    </div>

  );
}

export default ListTeam;
