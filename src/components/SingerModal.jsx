/* eslint-disable react/prop-types */
import { useState } from "react";
import WavesurferPlayer from "@wavesurfer/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  border: "none",
  borderBox: "none",
  transform: "translate(-50%, -50%)",
  outline: "none",
};

export default function SingerModal({ user, setOpen, open }) {
  const handleClose = () => setOpen(false);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };
  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <Modal
      className=""
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className=" relative ">
          <div className=" w-[250px] h-[300px] md:w-[500px] md:h-[500px]">
            <img
              src={user?.img}
              alt="singer"
              className=" w-full h-full  object-cover"
            />
          </div>
          <div className="absolute top-0 bg-black bg-opacity-20   w-full h-full">
            <div className="text-white flex justify-between p-4 items-center  ">
              <div className="">
                <p className="text-xl md:text-2xl text-orange-500 font-semibold">{user?.title}</p>
                  <p className="text-xs md:text-lg">
                    {user?.city}
                  </p>
                </div>
              <i onClick={()=>handleClose()} className="cursor-pointer  md:text-2xl fa-solid fa-xmark"></i>
            </div>
            <div className="relative ">
              <div className=" justify-center  flex gap-4 items-end h-[200px] md:h-[390px]">
                <div
                  className=" w-8 h-8  md:h-12 md:w-12 bg-purple-500 border-white rounded-full border-2 md:border-4 flex items-center justify-center text-white  md:text-lg"
                  onClick={onPlayPause}
                >
                  {isPlaying ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )}
                </div>
                {wavesurfer ? (
                  <div className="w-[80%]">
                    <WavesurferPlayer
                      height={40}
                      waveColor="rgba(255, 255, 255, 0.5)"
                      progressColor={"purple"}
                      url={user?.song}
                      onReady={onReady}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      dragToSeek={2}
                    />
                  </div>
                ) : (
                  "sdadasd"
                )}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
