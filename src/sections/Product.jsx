import Homepage from "../data/Homepage.json";
import Anchor from "../components/Anchor";
const JsonFormatter = {
  title: Homepage.sections.third.title,
  description: Homepage.sections.third.description,
  phoneNumber: Homepage.sections.third.phone,
  anchor: Homepage.sections.third.anchor,
  URL: Homepage.sections.third.url,
  Image: Homepage.sections.third.image,
  icon: Homepage.sections.third.icon,
};

export default function Product() {
  return (
    <section className="mx-[20px] lg:mx-[200px]  2xl:mx-[300px] grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6">
      <div className="flex justify-evenly gap-12 md:gap-4 flex-col text-center items-center md:text-left md:items-start">
        <h3 className="text-5xl font-bold md:max-w-[15ch]">
          {JsonFormatter.title}
        </h3>
        <p className="max-w-[50ch] text-ellipsis">
          {JsonFormatter.description}
        </p>
        <div>
          <div></div>
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <img
                className="size-8"
                src={JsonFormatter.icon.src}
                alt="Phone Icon"
              />
            </div>
            <div>
              <p className="font-bold">{JsonFormatter.phoneNumber}</p>
              <p className="text-slate-500">Call Us Anytime</p>
            </div>
          </div>
        </div>
        <Anchor url={JsonFormatter.URL} anchor={JsonFormatter.anchor} />
      </div>
      <div className="text-5xl font-bold -order-1 md:order-1">
        <img
          data-hero="right"
          className="rounded-tr-[200px] rounded-bl-[100px] opacity-0"
          src={JsonFormatter.Image.src}
          alt={JsonFormatter.title}
        />
      </div>
    </section>
  );
}
