import rightArrow from "../../public/images/right.svg";
export default function Anchor({ url, anchor }) {
  return (
    <a
      className="anchor flex py-4 w-fit items-center gap-2  px-6 bg-slate-800  text-white rounded-xl text-lg font-semibold hover:bg-slate-700 transition-colors duration-100 ease-in"
      href={url}
    >
      {anchor}{" "}
      <img
        className="size-3 translate-y-1/2 "
        src={rightArrow}
        alt={rightArrow}
      />
    </a>
  );
}
