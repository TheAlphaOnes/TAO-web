import Logo from "./Logo";
import NavElement from "./NavElement";

const navigation = [
  { pathName: "about", title: "About us" },
  { pathName: "launches", title: "Launches" },
  { pathName: "members", title: "Members" },
  { pathName: "contact", title: "Contact us" },
  { pathName: "portfolio", title: "Portfolio" },
];

function Navbar() {
  return (
    <div>
      <header className=" body-font flex justify-center items-center">
        <div className="container mx-auto flex flex-wrap pt-5 pb-5 flex-col md:flex-row items-center">
          <NavElement navigation={navigation} />
          <Logo />
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
