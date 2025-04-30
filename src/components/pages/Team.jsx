import React from "react";
import ListNames from "../ListNames";
import ListCard from "../ListCard";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";




function createTeam(member) {
  return (
    
    <ListCard
      key={member.id}
      name={member.name}
      image={member.img}
      description={member.description}
    />
    
  );
}

function Team() {
  const theme = useTheme();
  
  return (
    <Paper elevation={ 20 } sx={{ p: 3, bgcolor: theme.palette.primary.stone}}>
    <div className="team-page">
      <h2 className="heading">Our Team</h2>
      {ListNames.map(createTeam)}
    </div>
    </Paper>
  );
}

export default Team;
