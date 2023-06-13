import { Link } from "react-router-dom";
const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Starred",
    to: "/starred",
  },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((lin) => (
            <li key={lin.to}><Link to={lin.to} > {lin.text}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
