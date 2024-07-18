export default function PhoneTestimonials() {
  return (
    // render one testimonial at the time
    <div
      className=" flex"
      style={{
        transform: `translateX(-${display * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="px-8 my-8 grid grid-cols-1 gap-4 min-w-full">
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
        ))}
      </div>
    </div>
  );
}
