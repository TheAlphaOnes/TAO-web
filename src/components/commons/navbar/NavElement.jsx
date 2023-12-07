import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavElement({ navigation }) {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(
    function () {
      setPath(location.pathname.slice(1));
    },
    [location]
  );

  return (
    <nav className="flex lg:w-2/5 justify-center flex-wrap items-center text-xs md:ml-auto">
      {navigation.map((nav) => (
        <Link
          to={nav.pathName}
          key={nav.pathName}
          className={`font-seogeUI mr-8 hover:text-red-600 text-xs ${
            path === nav.pathName && "text-red-600"
          }`}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavElement;
