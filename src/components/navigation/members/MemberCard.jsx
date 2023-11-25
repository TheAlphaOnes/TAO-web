function MemberCard() {
  return (
    <div
      className="w-[500px] p-[2px] rounded-[10px]
     bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% 
     xs:w-full xs:max-w-[320px]
     "
    >
      <div className="bg-[#0A0D17] flex items-center xs:gap-4 w-full h-full rounded-[10px] py-9 px-6 xs:px-2 xs:py-7">
        <div>
          <img
            className="w-[150px] h-[150px] xs:w-[92px] xs:h-[92px] rounded-full"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlBg4YXIsOOMnwbIumlUygK6-GPD5ufnp6gYUkfsODKzUw90HA"
            alt="Sam Altman"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-quicksand font-bold-800 text-base xs:text-sm">
              Illy Sutskever
            </h1>
            <p
              className={`text-[#E71D46] font-quicksand text-sm font-medium-600 xs:text-[7px] `}
            >
              @Contact
            </p>
          </div>
          <p
            className={`max-w-[270px] xs:max-w-[150px] font-quicksand font-normal-400 mt-3 xs:mt-1 xs:text-[7.7px]`}
          >
            I was initially hesitant about outsourcing our digital marketing,
            but this agency quickly put my fears to rest. Their team was
            professional, responsive, and delivered outstanding results.
          </p>
          <div className="flex gap-5  xs:gap-3 text-sm font-quicksand font-medium-600 text-[#DE001B] xs:text-[7.3px]">
            <span>Pillar</span>
            <span>Dev</span>
            <span>Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
