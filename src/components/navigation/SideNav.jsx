import { IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function SideNav({ toggle, navigation }) {
  return (
    <div
      className={`top-0 absolute z-50 flex flex-col w-screen
      } h-screen p-4 bg-[#0A0D17] transition `}
    >
      <div className="flex justify-end">
        <IconX size={32} color={"white"} onClick={toggle} />
      </div>
      {navigation.map((nav) => (
        <>
          <Link
            onClick={toggle}
            className="text-center text-white pt-5 pb-5 text-3xl"
            key={nav.pathName}
            to={nav.pathName}
          >
            {nav.title}
          </Link>
        </>
      ))}
    </div>
  );
}

export default SideNav;
