import Homepage from "../data/Homepage.json";
import HomeIcon from "../../public/images/home.svg";

import React, { useRef } from "react";
const JsonFormatter = {
  Brand: Homepage.header.Brand,
  Links: Homepage.header.Links,
};
export default function Header() {
  const item = useRef();
  const handleMouseEnter = (e) => {
    item.current.style.width = `${e.target.offsetWidth}px`;
    item.current.style.transform = `translateX(${e.target.offsetLeft}px)`;
  };
  return (
    <header className="shadow-2xl z-0 relative">
      <div className="flex h-[5rem] justify-between mx-[20px] lg:mx-[200px]  2xl:mx-[300px] items-center ">
        <div className="flex items-center gap-2">
          <img className="size-6" src={HomeIcon} alt={HomeIcon} />
          <h1 className="text-4xl font-bold">{JsonFormatter.Brand}</h1>
        </div>{" "}
        <nav className=" hidden md:flex items-center relative ">
          <ul className="flex  h-full  items-center  relative">
            {JsonFormatter.Links.map((link, index) => (
              <li className=" " key={index}>
                <a
                  className=" h-[5rem] px-3 flex items-center relative font-semibold "
                  href={link.url}
                  onMouseEnter={(e) => handleMouseEnter(e)}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <div
              ref={item}
              className="absolute bottom-0 bg-yellow-300 h-1 transition-all duration-200 ease-in-out "
            ></div>
          </ul>{" "}
        </nav>
      </div>
    </header>
  );
}
