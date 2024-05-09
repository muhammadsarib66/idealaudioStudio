import React, { useState, useEffect, useRef } from "react";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPlayer from "react-player";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function VideoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  useEffect(() => {
    // Start playing the video when the component mounts
    if (videoRef.current && videoRef.current.getInternalPlayer()) {
      videoRef.current.getInternalPlayer().play();
    }
  }, []);
  return (
    <div>
      <div className="absolute   top-0 flex items-center justify-center h-full w-full ">
      <div  onClick={handleOpen} className=" cursor-pointer rounded-full bg-onPrimary h-20 w-20 flex items-center justify-center">
        <i className=" relative flex items-center justify-center p-2 h-20 w-20  text-primary fa-solid fa-play text-2xl">
          <div className="  animate-ping bg-onPrimary  absolute h-14 w-14 rounded-full"></div>
        </i>
      </div>
  </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="w-screen md:w-[900px]  h-full bg-red-500">
          <ReactPlayer
            ref={videoRef}
            width="100%"
            height="100%"
            className="VipLayer"
            controls={true}
            loop={true}
            playing={videoPlaying}
            url="https://res.cloudinary.com/my-backend/video/upload/v1713182082/Demo_cpyjes.mp4"
            onPlay={handleVideoPlay}
          />
        </div>
          
        </Box>
      </Modal>
    </div>
  );
}