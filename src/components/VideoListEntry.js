import React from 'react';

const VideoListEntry = ({ video, onVideoClick }) => {
  const { snippet } = video;

  return (
    <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={() => onVideoClick(video)}>{snippet.title}</div>
      <div className="video-list-entry-detail">{snippet.description}</div>
    </div>
  </div>
  )
};

export default VideoListEntry;
