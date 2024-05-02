import React, { useRef } from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const Video = ({ video }) => {
    const videoElement = useRef();
    return (
      <div>
        <video src={video} ref={videoElement}></video>
        <div onClick={() => videoElement.current.play()}>
          <PlayCircleIcon style={{ color: "dodgerblue", fontSize: "50px" }} />
        </div>

        <div onClick={() => videoElement.current.pause()}>
          <PauseCircleIcon style={{ color: "gray", fontSize: "50px" }} />
        </div>
      </div>
    );
}

export default Video;
