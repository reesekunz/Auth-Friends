import React from "react";

const Friend = props => {
  console.log(props.friend);
  return (
    <div>
      <h2 className="friend-name">{props.friend.name}</h2>
      <h4 className="friend-age">Age: {props.friend.age}</h4>
      <h4 className="friend-height">Height: {props.friend.height}</h4>
    </div>
  );
};

export default Friend;

//response.data.name
//response.data.age
//response.data.height
//response.data.id
