import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Music", "Live", "Soccer", "Cricket", "Cooking", "News", "Valentines", "Entertainments", "Stand-up", "Openmic", "Old-Song"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((arr, index) => (
        <Button key={index} name={arr} />
      ))}
    </div>
  );
};
export default ButtonList;
