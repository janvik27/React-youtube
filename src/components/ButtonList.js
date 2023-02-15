import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="mb-6">
      <Button name="all" />
      <Button name="gaming" />
      <Button name="songs" />
      <Button name="cricket" />
      <Button name="live" />
      <Button name="soccer" />
      <Button name="cooking" />
      <Button name="gadgets" />
    </div>
  );
};

export default ButtonList;
