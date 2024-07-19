import HomePage from "../data/Homepage.json";
import rightArrow from "../../public/images/right.svg";

const JsonFormatter = {
  services: HomePage.sections.second.services,
};

export default function Services() {
  return (
    <section id="services">
      <div className="mx-[20px] lg:mx-[200px]  2xl:mx-[300px] my-[100px] py-[100px] px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {JsonFormatter.services.map((service, index) => {
          return (
            <article
              data-hero={
                index === 0 ? "left" : index === 1 ? "bottom" : "right"
              }
              data-id={index}
              className="text-center px-6 py-12 rounded-2xl bg-[#f4f0ec] flex flex-col justify-between items-center gap-4"
              key={index * 2}
            >
              <div>
                <img
                  className="size-12"
                  src={service.image.src}
                  alt={service.title}
                />
              </div>
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-slate-800">{service.description}</p>
              <a
                href="#"
                className="flex anchor hover:underline items-center gap-2"
              >
                Read more{" "}
                <img
                  className="size-4 translate-y-[2px]"
                  src={rightArrow}
                  alt="Right arrow"
                />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
