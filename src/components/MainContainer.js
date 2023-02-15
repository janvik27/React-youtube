import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="mx-10 mt-3">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
