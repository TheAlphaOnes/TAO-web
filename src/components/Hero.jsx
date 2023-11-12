import { IconBrandDiscordFilled, IconChevronDown } from "@tabler/icons-react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div id={styles.intro} className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className="font-bold mb-2 text-white text-center text-2xl md:mb-2 lg:text-3xl">
          WE ARE ALPHAONES
        </h1>
        <p
          id={styles.disc}
          className="mx-auto max-w-screen-md text-center md:text-lg"
        >
          TheAlphaOnes is a community of young developper from all-over the
          world mainly based on discord which got as ambition to revolutionize
          the world.
        </p>
        <div className="flex justify-center m-6 gap-3">
          <a
            style={{ border: "1.5px solid white" }}
            className="px-4 py-2 rounded-full text-white hover:opacity-75"
            href="#about"
          >
            More about us
          </a>
          <a
            style={{ border: "1.5px solid #ec3736" }}
            className="flex gap-2 items-center px-4 py-2 rounded-full text-white bg-[#070707] hover:opacity-75"
            href="https://discord.gg/nbrFDHmsK3"
          >
            <IconBrandDiscordFilled size={18} color="white" />
            Join out discord
          </a>
        </div>
      </div>
      <div id={styles["scrl-intro"]} className="flex justify-center">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-white">Scroll down</span>
          <IconChevronDown color="white" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
