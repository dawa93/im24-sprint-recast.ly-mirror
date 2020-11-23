import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = (props) => {
  const data = props.videos; // [{}, {}, {}]

  return (
    <div className="video-list media">
      {data.map((video) => (
        <VideoListEntry
          key={video.id.videoId}
          video={video}
          onVideoClick={props.onVideoClick}
        />
      ))}
    </div>
  );
};

export default VideoList;
