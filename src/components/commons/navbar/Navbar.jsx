import Logo from "../Logo";
import NavElement from "./NavElement";

import { useToggle } from "../../../hooks/useToggle";
import Burger from "../Burger";
import SideNav from "./SideNav";

import { useEffect, useState } from "react";

const navigation = [
  { pathName: "", title: "Home" },
  { pathName: "launches", title: "Launches" },
  { pathName: "members", title: "Members" },
  { pathName: "contact", title: "Contact us" },
];

function Navbar() {
  const [value, toggle] = useToggle(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(
    function () {
      function handleResize() {
        setIsMobile(window.innerWidth <= 800);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
    },
    [setIsMobile]
  );

  return (
    <>
      <header>
        {value && <SideNav toggle={toggle} navigation={navigation} />}
        <div>
          {!isMobile && (
            <div className="body-font flex justify-center items-center bg-[#0a0e16]">
              <div className="container mx-auto flex-wrap  flex pt-5 pb-5 flex-col md:flex-row items-center">
                <NavElement navigation={navigation} />
                <Logo />
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
              </div>
            </div>
          )}
          {isMobile && (
            <div className="my-4 mx-4 flex justify-between">
              <Burger toggle={toggle} size={32} />
              <Logo />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
