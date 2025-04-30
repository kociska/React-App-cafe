import React from "react";

function ListCard(props) {
  
  return (
    <li>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img  src={props.image} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.description}</p>
        </div>
      </div>
    </li>
  );
}

export default ListCard;
