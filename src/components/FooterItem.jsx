export default function FooterItem({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-2xl font-bold">{title}</h6>
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li className="text-gray-500 text-lg hover:underline" key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
