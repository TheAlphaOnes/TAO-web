import { IconBrandDiscordFilled, IconChevronDown } from "@tabler/icons-react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div id={styles.intro} className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className="font-bold-800 mb-2 text-white text-center text-2xl md:mb-2 lg:text-3xl leading-10 font-gilroy">
        WE ARE ALPHAONES
        </h1>
        <p
          className="mx-auto mt-5 font-quicksand max-w-screen-md text-center text-white xs:text-[0.875rem] sm:text-lg md:text-lg"
        >
          TheAlphaOnes is a community of young developper from all-over the
          world mainly based on discord which got as ambition to revolutionize
          the world.
        </p>
        <div className="flex justify-center flex-wrap m-6 gap-3">
          <a
            style={{ border: "1.5px solid white" }}
            className="px-4 py-2 flex justify-center font-seogeUI  items-center rounded-full text-white hover:opacity-75 xs:w-60 "
            href="#about"
          >
            More About us
          </a>
          <a
            style={{ border: "1.5px solid #ec3736" }}
            className="flex gap-2 items-center justify-center font-seogeUI px-4 py-2 rounded-full text-white bg-[#070707] hover:opacity-75 xs:w-60 "
            href="https://discord.gg/nbrFDHmsK3"
          >
            <IconBrandDiscordFilled size={18} color="white" />
            Join our Discord
          </a>
        </div>
      </div>
      <div id={styles["scrl-intro"]} className="flex text-xs xs:mt-[10rem] sm:mt-[8rem] justify-center">
        <a href="#about" className="flex flex-col items-center">
          <span className="font-seogeUI font-light text-white">Scroll down</span>
          <IconChevronDown color="white" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
