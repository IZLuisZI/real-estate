import Homepage from "../data/Homepage.json";

const JsonFormatter = {
  brands: Homepage.sections.fifth.brands,
};
export default function Sponsors() {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 mx-[20px] lg:mx-[200px]  2xl:mx-[300px] my-[200px] gap-12 md:gap-6`}
    >
      {JsonFormatter.brands.map((brand, index) => (
        <div
          data-hero={
            index === 0
              ? "left"
              : index === 1
              ? "bottom"
              : index === 2
              ? "top"
              : index === 3
              ? "bottom"
              : index === 4
              ? "right"
              : ""
          }
          key={index}
          className="flex justify-center items-center opacity-0"
        >
          <img className="aspect-auto h-14" src={brand.src} alt={brand.src} />
        </div>
      ))}
    </section>
  );
}
