import audioSample1 from "../assets/audio/audioDemo.mp3";
import audioSample2 from "../assets/audio/audioDemo2.mp3";
import singer1 from "../assets/singer1.jpg";
import singer2 from "../assets/singer2.jpg";
import singer3 from "../assets/HeroImg3.jpeg";
import { useState } from "react";
import Slider from "react-slick";
import SingerModal from "./SingerModal";


const AudioProjects = () => {
  const ArtistArray = [
    { title: "Ahmed Ali", song: audioSample1, img: singer1, city: "Hyderabad" },
    { title: "Hamza Khan", song: audioSample2, img: singer2, city: "karachi" },
    {
      title: "Waqas Khan",
      song: audioSample1,
      img: singer3,
      city: "islambabad",
    },
  ];

  const [open ,setOpen ] = useState(false)
  const [userObj , setUserObj] = useState(null)
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    arrow: true,
    pauseOnHover : false ,
    pauseOnFocus : true ,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            centerPadding: '0px'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',

          }
        }
      ]
    
};
const handleViewSinger = (item) => {
    setUserObj(item);
    console.log(item)
    setOpen(true)
}
  return (
    <section className="flex flex-col justify-center">

      <div className=" md:py-10">
        <div className="w-full flex justify-center overflow-hidden ">
          {/* <Button variant="contained" className="">prev</Button> */}
          <Slider style={{width: '80%', border: 'none'}} className="sliderDiv" {...settings}>
            {ArtistArray.map((item, ind) => {
              return (
              <div  key={ind} className=" py-10">

                <div onClick={()=>handleViewSinger(item)} className="  cursor-pointer  border-none  h-[300px] md:h-[400px] relative max-w-[95%]  md:min-w-[95%] md:max-w-[95%] " >
                  <img
                    src={item?.img}
                    alt="singer"
                    className="  h-full w-full object-cover"
                  />
                </div>
                  <div className=" flex flex-col items-center justify-center   w-full h-20 ">
                  <p className="text-2xl font-semibold text-gray-700">
                    {item?.title}
                    </p>
                    <p className="text-orange-600 ">
                        {item?.city}
                    </p>
              </div>
              </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <SingerModal setOpen={setOpen}
open={open} user={userObj} />
    </section>
  );
};

export default AudioProjects;


