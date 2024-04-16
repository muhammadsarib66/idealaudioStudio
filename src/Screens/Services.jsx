import record from "../assets/icons/record.png";
import mixture from "../assets/icons/mixture.png";
import audioEdit from "../assets/icons/audioEdit.png";
import mic from "../assets/icons/mic.png";
import trackSoung from "../assets/icons/trackSoung.png"
import mobileEdit from "../assets/icons/mobileEdit.png";

const Services = () => {
  const servicesTab = [
    {
      title: "Voice Recording",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta, exercitationem adipisci.",
      icon: record,
    },
    {
      title: "Sound Mixing",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta, exercitationem adipisci.",
      icon: mixture,
    },
    {
      title: "Tracking Mastering",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta, exercitationem adipisci.",
      icon: trackSoung,
    },
    {
      title: "Auido Editing",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta, exercitationem adipisci.",
      icon: audioEdit,
    },
    {
      title: "Live Recording",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta, exercitationem adipisci.",
      icon: mic,
    },
    {
      title: "Mobile Studio",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta, exercitationem adipisci.",
      icon: mobileEdit,
    },
  ];

  return (
    <section id="services" className=" py-20">
      <div className="flex flex-col  items-center gap-8 justify-center">
        <div className="flex justify-center ">
          <h1 className="relative  text-5xl  md:text-7xl font-extrabold text-gray-200">
            Our Services
          </h1>
          <p className="absolute  pt-4 md:pt-7 capitalize text-lg md:text-3xl font-semibold text-secondary">
            {" "}
            Service what we offer
          </p>
        </div>

        <p className="mx-4 md:w-[40%] text-sm md:text-base text-center text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          saepe repellat eius sunt nostrum expedita. Esse, vero. Soluta,
          exercitationem adipisci. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam saepe repellat eius sunt nostrum expedita.
          Esse, vero. Soluta, exercitationem adipisci.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  place-items-center md:gap-6 mx-4 md:mx-32 my-20">
        {servicesTab?.map((item, ind) => (
          <div
            data-aos="fade-right"
            key={ind}
            className="flex gap-4 hover:shadow-lg shadow-md rounded-md hover:shadow-Primary p-3 duration-200 col-span-1 w-[80%]"
          >
            <div className="w-40 h-40">
              <img
                src={item.icon}
                alt={item.title}
                className="  object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl md:text-2xl font-semibold"> {item.title} </h1>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <p className="flex cursor-pointer items-center gap-3 text-Primary font-semibold">
                {" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </span>{" "}
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
