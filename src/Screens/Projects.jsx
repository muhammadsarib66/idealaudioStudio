import AudioProjects from "../components/AudioProjects";
import "./Project.css";
const Projects = () => {
  return (
    <section data-aos="zoom-in" id="portfolio" className="  py-20">
      <div className="flex flex-col  items-center gap-8 justify-center">
        <div className="flex justify-center ">
          <h1 className="relative  text-3xl  md:text-7xl font-extrabold text-gray-200">
            Our Projects
          </h1>
          <p className="absolute  pt-4 md:pt-7 capitalize text-lg md:text-3xl font-semibold text-secondary">
            {" "}
            Our Projects
          </p>
        </div>

        <p className="mx-4 md:w-[40%] text-sm md:text-base text-center text-secondary">
          We are very proud of our client base and the lasting relationships we
          have forged over many years
        </p>
      </div>
      <AudioProjects />
    </section>
  );
};

export default Projects;
