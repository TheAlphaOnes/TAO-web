import Logo from "./Logo";
import NavElement from "./NavElement";

import { useToggle } from "../../hooks/useToggle";
import { Link } from "react-router-dom";
import { IconMenu, IconX } from "@tabler/icons-react";
import SideNav from "./SideNav";
import { useEffect, useState } from "react";

const navigation = [
  { pathName: "about", title: "About us" },
  { pathName: "launches", title: "Launches" },
  { pathName: "members", title: "Members" },
  { pathName: "contact", title: "Contact us" },
  { pathName: "portfolio", title: "Portfolio" },
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
            <div className="body-font flex justify-center items-center">
              <div className="container mx-auto flex flex-wrap pt-5 pb-5 flex-col md:flex-row items-center">
                <NavElement navigation={navigation} />
                <Logo />
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
              </div>
            </div>
          )}
          {isMobile && (
            <div className="my-4 mx-4 flex justify-between">
              <IconMenu color="white" size={32} onClick={toggle} />
              <Logo />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
