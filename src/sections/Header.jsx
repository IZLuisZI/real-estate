import Homepage from "../data/Homepage.json";
import HomeIcon from "../../public/images/home.svg";
const JsonFormatter = {
  Brand: Homepage.header.Brand,
  Links: Homepage.header.Links,
};
export default function Header() {
  return (
    <header className="shadow-2xl z-0 relative">
      <div className="flex h-[5rem] justify-between mx-[20px] lg:mx-[200px]  2xl:mx-[300px] items-center ">
        <div className="flex items-center gap-2">
          <img className="size-6" src={HomeIcon} alt={HomeIcon} />
          <h1 className="text-4xl font-bold">{JsonFormatter.Brand}</h1>
        </div>{" "}
        <nav className="h-[5rem] hidden md:flex items-center ">
          <ul className="flex gap-6 h-full  items-center ">
            {JsonFormatter.Links.map((link, index) => (
              <li
                className="header-item relative font-semibold h-full flex items-center"
                key={index}
              >
                <a className=" h-full flex items-center" href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
