import FooterItem from "../components/FooterItem";
import Homepage from "../data/Homepage.json";

const JsonFormatter = {
  footerSections: Homepage.footer,
};

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#f4f0ec]">
      <div className="flex flex-wrap flex-col md:flex-row gap-6 justify-start md:justify-around  mx-[20px] lg:mx-[200px]  2xl:mx-[300px] py-20">
        {JsonFormatter.footerSections.map((section, index) => {
          return (
            <FooterItem
              key={index}
              title={section.title}
              links={section.links}
            />
          );
        })}
      </div>
      <div>
        <p className="text-center text-gray-500 p-6">
          &copy; Luis Soriano {year} All rights reserved
        </p>
      </div>
    </footer>
  );
}
