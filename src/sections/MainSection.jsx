import HomePage from "../data/Homepage.json";
import Anchor from "../components/Anchor";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Down from "../../public/images/down.svg";
const JsonFormatter = {
  title: HomePage.sections.first.title,
  description: HomePage.sections.first.description,
  url: HomePage.sections.first.url,
  anchor: HomePage.sections.first.anchor,
};
export default function MainSection() {
  useIntersectionObserver('[data-hero="top"]', "fadeFromTop");
  useIntersectionObserver('[data-hero="left"]', "fadeFromLeft");
  useIntersectionObserver('[data-hero="right"]', "fadeFromRight");
  useIntersectionObserver('[data-hero="bottom"]', "fadeFromBottom");

  return (
    <section
      style={{ height: `calc(100dvh - 5rem)` }}
      className=" h-[700px]  md:rounded-bl-[300px] flex items-center bg-[url('C:\Users\Luis\Downloads\code\homepage\mansion\real-estate\public\images\main2.webp')] relative bg-cover overflow-hidden  "
    >
      <div className="z-20 ml-12 md:ml-[140px] lg:ml-[300px] flex gap-8 flex-col text-white">
        <h1
          data-hero="top"
          className="text-5xl fadeFromRight  md:text-7xl max-w-[13ch] font-bold"
        >
          {JsonFormatter.title}
        </h1>
        <p data-hero="left" className="text-lg   max-w-[60ch]">
          {JsonFormatter.description}
        </p>
        <Anchor url={JsonFormatter.url} anchor={JsonFormatter.anchor} />
      </div>
      <div className="z-20 absolute bottom-0 left-1/2 -translate-x-1/2">
        <a
          href="#services"
          style={{ transform: "translateX(50%)" }}
          className="inline-block   p-4 hover:bg-slate-200 hover:bg-opacity-50 rounded-full mb-9 animate-bounce duration-150 ease-in fill"
        >
          <img className="size-8" src={Down} alt="Go down" />
        </a>
      </div>
      <div className="bg-gray-800 opacity-50 h-full w-full absolute"></div>
    </section>
  );
}
