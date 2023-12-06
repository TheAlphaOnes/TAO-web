import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "./Logo";

// social icons images
import instagram from "../../assets/img/insta-foot.svg";
import twitter from "../../assets/img/twt.svg";
import github from "../../assets/img/github-foot.svg";
import discord from "../../assets/img/cord-foot.svg";

const socials = [
  {
    link: "https://www.instagram.com/TheAlphaOnes/",
    image: instagram,
  },
  {
    link: "https://twitter.com/TheAlphaOnesDev",
    image: twitter,
  },
  {
    link: "https://github.com/TheAlphaOnes/",
    image: github,
  },
  {
    link: "https://discord.gg/nbrFDHmsK3",
    image: discord,
  },
];
const pages = [
  { link: "/contact", name: "Contacts Us" },
  { link: "/launches", name: "Launches" },
  { link: "/team", name: "Team" },
  { link: "/blog", name: "Blog" },
];
const credits = [
  {
    link: "https://thenorm.netlify.app",
    name: "Vishnu Gupta aka Norm - Developer",
  },
  {
    link: "/",
    name: "Doumbia Al-Hassan aka Caprisunpapy - UI/UX Designer",
  },
  { link: "/", name: "Akshat Khare aka BitPixel - Tester &amp; Assister" },
  {
    link: "https://thecognito.vercel.app",
    name: "Cognito aka Harsh - Developer",
  },
  { link: "https://sauravmeghwal.com", name: "Saurav - Developer" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div id={styles["foot-1"]}>
        <div className="max-w-7xl mb-16 m-auto pt-10 flex justify-between flex-wrap">
          <div className="max-w-sm mt-8">
            <Logo />
            <p className="mb-6 mt-4 font-quicksand text-white sm:pr-8">
              TheAlphaOnes is a community of young developer from all-over the
              world mainly based on discord which got as ambition to
              revolutionize the world.
            </p>
            <Socials />
          </div>
          <Pages />
          <Credits />
        </div>
      </div>
    </footer>
  );
}

function Socials() {
  return (
    <div className="flex gap-4">
      {socials.map((el) => (
        <a
          key={el.link}
          rel="noreferrer"
          href={el.link}
          target="_blank"
          className="text-white transition duration-100 hover:text-gray-500 active:text-gray-600"
        >
          <img src={el.image} alt="" className={styles["icon-effect"]} />
        </a>
      ))}
    </div>
  );
}
function Pages() {
  return (
    <div className="font-seogeUI mt-8">
      <div className="mb-4 font-medium-600 uppercase tracking-widest text-gray-100">
        Usefull Links
      </div>
      <nav className="flex flex-col gap-4">
        {pages.map((el) => (
          <div key={el.link}>
            <Link
              to={el.link}
              rel="noreferrer"
              className="text-white text-base transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              {el.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
function Credits() {
  return (
    <div className="mt-8">
      <div className="mb-4 font-medium-600 uppercase tracking-widest text-gray-100">
        Credits
      </div>
      <nav className="flex flex-col gap-4">
        {credits.map((el) => (
          <div key={el.name}>
            <a
              rel="noreferrer"
              href={el.link}
              target="_blank"
              className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              {el.name}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Footer;
