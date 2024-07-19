import Homepage from "../data/Homepage.json";
import useSlide from "../hooks/useSlide";

const JsonFormatter = {
  testimonials: Homepage.sections.fourth.testimonials,
  title: Homepage.sections.fourth.title,
};

export default function Testimonials() {
  const windowWidth = window.innerWidth;
  const numberSections =
    windowWidth > 640
      ? JsonFormatter.testimonials.length / 3
      : JsonFormatter.testimonials.length;

  const { display, handleTouchStart, handleTouchEnd, translate } =
    useSlide(numberSections);

  return (
    <section className="mx-[20px] md:mx-[50px] lg:mx-[200px]  2xl:mx-[300px] my-[200px] pt-16 pb-12 bg-[#f4f0ec] rounded-[40px] overflow-hidden">
      <h4 className="text-center font-bold text-4xl">{JsonFormatter.title}</h4>
      <div
        className="flex"
        style={{
          transform: `translateX(-${display * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        {windowWidth > 768
          ? [0, 1, 2].map((sectionIndex) => (
              <div
                key={sectionIndex}
                className="px-8 my-8 grid grid-cols-3 gap-4 min-w-full"
              >
                {JsonFormatter.testimonials
                  .slice(sectionIndex * 3, (sectionIndex + 1) * 3)
                  .map((testimonial, index) => (
                    <article
                      key={index}
                      className="flex flex-col gap-4 bg-white px-4 py-12 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span>
                          <img
                            className="size-16 object-cover aspect-square rounded-full"
                            src={testimonial.image.src}
                            alt={testimonial.image.alt}
                          />
                        </span>
                        <div>
                          <p className="font-bold text-xl">
                            {testimonial.name}
                          </p>
                          <p>{testimonial.location}</p>
                        </div>
                        <div></div>
                      </div>
                      <p className="text-slate-700">{testimonial.review}</p>
                    </article>
                  ))}
              </div>
            ))
          : JsonFormatter.testimonials.map((testimonial, index) => (
              <div className="px-8 my-8 grid grid-cols-1 gap-4 min-w-full">
                <article
                  key={index}
                  className="flex flex-col gap-4 bg-white px-4 py-12 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span>
                      <img
                        className="size-16 object-cover aspect-square rounded-full"
                        src={testimonial.image.src}
                        alt={testimonial.image.alt}
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
              </div>
            ))}
      </div>
      <div className="flex justify-center">
        {Array.from({ length: numberSections }, (_, index) => {
          return (
            <span
              key={index}
              onClick={() => translate(index)}
              className={`mx-1 size-2 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-500 transition-all duration-100 ease-in ${
                display === index ? "bg-gray-500 scale-110" : ""
              }`}
              title={`Testimonial ${index + 1}`}
            ></span>
          );
        })}
      </div>
    </section>
  );
}
