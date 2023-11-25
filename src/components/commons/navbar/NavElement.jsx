import { Link } from "react-router-dom";

function NavElement({ navigation }) {
  return (
    <nav className="flex lg:w-2/5 justify-center flex-wrap items-center text-xs md:ml-auto">
      {navigation.map((nav) => (
        <Link
          to={nav.pathName}
          key={nav.pathName}
          className="font-seogeUI mr-8 hover:text-gray-600 text-xs"
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavElement;
