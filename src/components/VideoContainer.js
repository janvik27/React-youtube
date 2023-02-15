import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  async function getMostPopularVideos() {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();

    // console.log(json);
    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap">
      {/* <VideoCard info={videos[2]} /> */}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
