import AudioProjects from "../components/AudioProjects";
import "./Project.css";
import { ReactTyped } from "react-typed";
const Projects = () => {
  const Clients = 
  [
   {list1: ["Michael Earle",
  "Michael Vazquez",
"Matthew Duncan",
"Rickey Campbell",
"Jonathan Ku",
"Theresa Ochoa",
"Angela Hunley",]},
{list2: [
"Beverly Pleasants",
"Louis Shay",
"Stephen Rivers",
"Alan Doody",
"Betty Cochran",
"Marlene Fowler",
"Lois Olson",]},
{list3: ["Dorothy Riddle",

"Katie Dunnv",
"Roger Hoehne",
"Thomas Elliott",
"Bobby Hodge",

"Dorothy Shepherd",
"Theresa Blanding",]},
{list4: [
"George Norsworthy",
"Nathalie Smith",
"Ben Worrell",
"Ashley Greene",
"Jane Wilcher",
"Pena",
"Orville Thompson"]} ]


  
  return (
    <>
      <section className="parallax py-20" data-aos="zoom-in" id="portfolio">
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
            We are very proud of our client base and the lasting relationships
            we have forged over many years
          </p>
        </div>
        <AudioProjects />
      </section>
      <div className="parallax h-screen w-full">
        <div className="text-white flex flex-col items-center ">
          <div className="mt-10 flex flex-col text-center gap-8 items-center justify-center">
            <h2 className="text-4xl font-black">Our Clients</h2>
            <div className="bg-gray-800 w-96 h-16 pt-2">
              <div className="   font-black text-4xl bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 inline-block text-transparent bg-clip-text">
                {/* <ReactTyped strings={Clients} typeSpeed={100} loop /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
      {Clients.map((item, index) => (
        <div key={index} className="text-gray-300 mt-20 flex flex-col items-center justify-center">
          {/* Render each list in a column */}
          {Object.values(item).map((list, listIndex) => (
            <div key={listIndex} className="flex flex-col gap-4 ">
              {/* Render each name in the list */}
              {list.map((client, clientIndex) => (
                <p key={clientIndex} className=" ">{client}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
      </div>
    </>
  );
};

export default Projects;
