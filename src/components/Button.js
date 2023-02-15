import React from "react";

const Button = (props) => {
  return (
    <button className="m-2 px-5 py-1 bg-gray-300/60 rounded-lg">
      {props.name}
    </button>
  );
};

export default Button;
