function Logo() {
  return (
    <a
      href="/"
      className="flex font-gilroy font-bold-800 order-first min-w-fit lg:order-none lg:w-1/5 title-font font-medium items-center  lg:items-center lg:justify-center mb-4 md:mb-0"
    >
      <img
        src="../../../public/img/theAlphaOnes.png"
        className="w-7 h-7"
        alt="o"
      />
      <span className="ml-[11px] text-lg text-white">TheAlphaOnes</span>
    </a>
  );
}

export default Logo;
