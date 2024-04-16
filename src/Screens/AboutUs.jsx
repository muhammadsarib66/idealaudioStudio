import {  useEffect} from "react";
// import Audio from "../assets/audio/audioDemo.mp3";
import aboutImg from "../assets/image1.png";
import VideoModal from "../components/VideoModal";
import AOS from "aos";
const AboutUs = () => {
  // const [audioPlaying, setAudioPlaying] = useState(false);
  // const audioRef = useRef(null);

  // const handleAudioPlay = () => {
  //   setAudioPlaying(true);
  //   setVideoPlaying(false);
  // };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  return (
    <section id="aboutus" className="p-4">
      <div
        id="aboutus"
        className=" grid py-20 h-[100px]] md:grid-cols-2  gap-8   w-full "
      >
        <div className=" text-start md:pl-24 xl:pl-40 aboutDivCover col-span-1 flex justify-center  gap-4  flex-col ">
          <h1 className=" text-3xl  md:text-5xl font-bold">Welcome to Ideal Audio</h1>
          <p className=" md:w-[80%] leading-7">
            The Ideal Audio is the brainchild of musicians who understand that
            the best art comesfrom the best environment
          </p>
          <p className="md:w-[90%] leading-7">
            They know that to make great music, you need great surroundings — a
            combination of top-notch gear, comfortable work and lounge areas, a
            relaxing setting, and knowledgeable, capable staff who can work with
            artists of any level. A place without distractions, yet accessible,
            where development is encouraged and prices aren’t prohibitive, but
            quality is never sacrificed and clients are treated with respect.
          </p>
        </div>

        <div  data-aos="flip-left" className="col-span-1 flex  items-center justify-center flex-col  ">
          <div className="relative ">
            <img src={aboutImg} alt="img" className="" />
            <VideoModal />
            {/* </div> */}
          </div>

          {/* <div className=" relative AboutImg  ">
            <div className="abosolute top-0">
                Button
            </div>
      </div> */}
          <div></div>
          {/* <div className="w-[700px] h-full bg-red-500">
          <ReactPlayer
            ref={videoRef}
            light={<img className="w-full object-cover " src={img} alt="img" />}
            width="100%"
            height="100%"
            className="VipLayer"
            controls={true}
            loop={true}
            playing={videoPlaying}
            url="https://res.cloudinary.com/my-backend/video/upload/v1713182082/Demo_cpyjes.mp4"
            onPlay={handleVideoPlay}
          />
        </div> */}
          {/* <div className="    h-20 p-4 bg-red-300">
            
          <ReactPlayer
            width="100%"
            height='100%'
            ref={audioRef}
            url={Audio}
            playing={audioPlaying}
            controls={true}
            loop={true}
            onPlay={handleAudioPlay}
          />
          
        </div> */}
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="bg-secondary flex flex-col md:flex-row mx-3 md:mx-32 justify-around px-10 py-5 md:px-32 md:py-20">
        <div className="text-center md:text-start">
          <p className="text-2xl md:text-4xl font-extrabold text-onPrimary pb-2">
            Need a{" "}
            <span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
              {" "}
              QUALITY{" "}
            </span>{" "}
            Sound?{" "}
          </p>
          <p className="text-gray-400  md:text-lg">
            We deliver the very best service and amenities signed artists and
            independent musicians.
          </p>
        </div>

        <div className="flex flex-col  text-center md:text-start mt-2 justify-center items-center gap-3">
          <div className=" shadow-md shadow-onPrimary flex items-center justify-center gap-2 md:gap-4 text-base md:text-xl font-bold w-fit md:w-[300px]  md:h-16 rounded-full px-8 py-4 cursor-pointer bg-onPrimary hover:text-onPrimary hover:bg-gradient-to-r hover:from-[#9023B5] hover:to-[#DE5235] text-secondary">
            <i className="fa-solid fa-microphone text-orange-600"></i> Book a
            Session
          </div>
          <p className="  text-gray-400 text-sm ">
            And get a one recording hour for{" "}
            <span className="text-orange-600">FREE* </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
