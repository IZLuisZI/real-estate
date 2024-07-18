import Homepage from "../data/Homepage.json";
import ChevRight from "../../public/images/chev-right.svg";
const JsonFormatter = {
  projects: Homepage.sections.sixth.projects,
  title: Homepage.sections.sixth.title,
  description: Homepage.sections.sixth.description,
};

const borderStyles = [
  "rounded-tr-[100px]",
  "rounded-tl-[100px]",
  "rounded-br-[100px]",
  "rounded-bl-[100px]",
];
export default function Projects() {
  return (
    <section className="mx-[20px] lg:mx-[200px]  2xl:mx-[300px] my-[200px] pt-16 pb-12 flex flex-col gap-5">
      <h5 className="text-center font-bold text-4xl">{JsonFormatter.title}</h5>
      <p className="text-center text-lg max-w-[60ch] mx-auto text-slate-600">
        {JsonFormatter.description}
      </p>
      <div className="grid  md:grid-cols-2 gap-20 mt-14">
        {JsonFormatter.projects.map((project, index) => {
          return (
            <div data-hero="left" key={index} className=" bg-white  rounded-lg">
              <div className="flex flex-col  gap-5">
                <span>
                  <img
                    className={`object-cover aspect-square ${borderStyles[index]}`}
                    src={project.image.src}
                    alt={project.image.src}
                  />
                </span>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-xl">{project.name}</p>
                    <p className="text-slate-700">{project.subname}</p>
                  </div>
                  <div className="p-4 anchor transition-colors duration-150 ease-in rounded-full bg-yellow-50 hover:bg-yellow-100 cursor-pointer">
                    <img
                      loading="lazy"
                      className="size-5"
                      src={ChevRight}
                      alt="Right"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
