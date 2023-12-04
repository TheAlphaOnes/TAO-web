import { IconBrandDiscordFilled, IconChevronDown } from "@tabler/icons-react";
import styles from "./Hero.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const heroHeight = useRef(null);

  return (
    <div id={styles.intro} className="py-6 sm:py-8 lg:py-12" ref={heroHeight}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className="font-bold-800 mb-2 text-white text-center text-2xl md:mb-2 lg:text-3xl leading-10 font-gilroy">
          We Are TheAlphaOnes.
        </h1>
        <p className="mx-auto mt-5 font-quicksand max-w-screen-md text-center text-white xs:text-[0.875rem] sm:text-lg md:text-lg">
          TheAlphaOnes is a community of young developper from all-over the
          world mainly based on discord which got as ambition to revolutionize
          the world.
        </p>
        <div className="flex justify-center flex-wrap m-6 gap-3">
          <Link
            to={"/members"}
            style={{ border: "1.5px solid white" }}
            className="px-4 py-[7px] flex justify-center font-seogeUI text-xs items-center rounded-full text-white hover:opacity-75 xs:w-40 md:w-40"
            href="#about"
          >
            More About us
          </Link>
          <a
            style={{ border: "1.5px solid #ec3736" }}
            className="flex gap-2 items-center justify-center text-xs font-seogeUI px-4 py-[7px] rounded-full text-white bg-[#070707] hover:opacity-75 xs:w-40 md:w-40"
            href="https://discord.gg/nbrFDHmsK3"
          >
            <IconBrandDiscordFilled size={18} color="white" />
            Join our Discord
          </a>
        </div>
      </div>
      <div
        id={styles["scrl-intro"]}
        className="flex text-xs xs:mt-[10rem] sm:mt-[8rem] justify-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center"
          onClick={function () {
            window.scrollTo({
              top: heroHeight.current.offsetHeight + 208, // 208 is gradient b/w hero & about
              behavior: "smooth",
            });
          }}
        >
          <span className="font-seogeUI font-light text-white">
            Scroll down
          </span>
          <IconChevronDown color="white" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
