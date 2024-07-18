import Homepage from "../data/Homepage.json";
import { useState, useEffect } from "react";
const JsonFormatter = {
  testimonials: Homepage.sections.fourth.testimonials,
  title: Homepage.sections.fourth.title,
};

export default function Testimonials() {
  const numberSections = JsonFormatter.testimonials.length / 3;

  const [display, setDisplay] = useState(0);

  function autoTranslate() {
    setDisplay((prev) => (prev + 1) % numberSections);
  }

  useEffect(() => {
    const interval = setInterval(autoTranslate, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="mx-[20px] md:mx-[50px] lg:mx-[200px]  2xl:mx-[300px] my-[200px] pt-16 pb-12 bg-[#f4f0ec] rounded-[40px] overflow-hidden">
      <h4 className="text-center font-bold text-4xl">{JsonFormatter.title}</h4>
      <div
        className=" flex"
        style={{
          transform: `translateX(-${display * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="px-8 my-8 grid grid-cols-3 gap-4 min-w-full">
          {JsonFormatter.testimonials.slice(0, 3).map((testimonial, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 bg-white px-4 py-12 rounded-lg"
            >
              <div className="flex items-center gap-3 ">
                <span>
                  <img
                    className="size-16 object-cover aspect-square rounded-full"
                    src={testimonial.image.src}
                    alt={testimonial.image.src}
                  />
                </span>
                <div>
                  <p className="font-bold text-xl">{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
                <div></div>
              </div>
              <p className="text-slate-700">{testimonial.review}</p>
            </article>
          ))}
        </div>
        <div className="px-8 my-8 grid grid-cols-3 gap-4 min-w-full">
          {JsonFormatter.testimonials.slice(3, 6).map((testimonial, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 bg-white px-4 py-12 rounded-lg"
            >
              <div className="flex items-center gap-3 ">
                <span>
                  <img
                    className="size-16 object-cover aspect-square rounded-full"
                    src={testimonial.image.src}
                    alt={testimonial.image.src}
                  />
                </span>
                <div>
                  <p className="font-bold text-xl">{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
                <div></div>
              </div>
              <p className="text-slate-700">{testimonial.review}</p>
            </article>
          ))}
        </div>
        <div className="px-8 my-8 grid grid-cols-3 gap-4 min-w-full">
          {JsonFormatter.testimonials.slice(6, 9).map((testimonial, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 bg-white px-4 py-12 rounded-lg"
            >
              <div className="flex items-center gap-3 ">
                <span>
                  <img
                    className="size-16 object-cover aspect-square rounded-full"
                    src={testimonial.image.src}
                    alt={testimonial.image.src}
                  />
                </span>
                <div>
                  <p className="font-bold text-xl">{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
                <div></div>
              </div>
              <p className="text-slate-700">{testimonial.review}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {Array.from({ length: numberSections }, (_, index) => {
          return (
            <button
              key={index}
              onClick={() => translate(index)}
              className={`mx-1 size-2 rounded-full bg-gray-400 hover:bg-gray-500 transition-all duration-100 ease-in ${
                display === index ? "bg-gray-500 scale-110" : ""
              }`}
            ></button>
          );
        })}
      </div>
    </section>
  );
}
