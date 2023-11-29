import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideNav({ toggle, navigation }) {
  const [activeRouteName, setActiveRouteName] = useState("");

  useEffect(function () {
    setActiveRouteName(window.location.pathname.slice(1));
  }, []);

  return (
    <div
      className={`top-0 fixed z-50 flex flex-col w-screen
      } h-screen p-4 bg-[#0A0D17] transition `}
    >
      <div className="flex justify-end">
        <IconX size={32} color={"white"} onClick={toggle} />
      </div>
      {navigation.map((nav, i) => (
        <Link
          onClick={toggle}
          className={`${
            activeRouteName === nav.pathName ? "text-red-600" : ""
          } text-center pt-5 pb-5 text-3xl font-gilroy hover:text-[#E71D46] `}
          key={i}
          to={nav.pathName}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}

export default SideNav;
