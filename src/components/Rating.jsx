import Star from "../../public/images/Start.svg";
import StartFill from "../../public/images/StarFIll.svg";
export default function Rating({ rating }) {
  return (
    <div className="flex relative overflow-hidden w-fit">
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
            <img className="size-4" src={Star} alt="Star" />
          </span>
        ))}
      </div>
      <div
        style={{ width: `${rating * 20}%` }}
        className={`absolute  h-full  bg-[url('C:/Users/Luis/Downloads/code/homepage/mansion/real-estate/public/images/StarFIll.svg')]`}
      ></div>
    </div>
  );
}
