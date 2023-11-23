function MemberCard() {
  return (
    <div className="w-[616px] p-[2px] rounded-[10px] bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% ">
      <div className="bg-[#0A0D17] flex items-center justify-between w-full h-full rounded-[10px] py-9 px-6">
        <div>
          <img
            className="w-[202px] h-[202px] rounded-full"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlBg4YXIsOOMnwbIumlUygK6-GPD5ufnp6gYUkfsODKzUw90HA"
            alt="Sam Altman"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-quicksand font-bold-800 text-3xl">
              Illy Sutskever
            </h1>
            <p className="text-[#E71D46] font-quicksand text-base font-medium-600">
              @Contact
            </p>
          </div>
          <p className="max-w-[333px] text-base font-quicksand font-normal-400 mt-3">
            I was initially hesitant about outsourcing our digital marketing,
            but this agency quickly put my fears to rest. Their team was
            professional, responsive, and delivered outstanding results.
          </p>
          <div className="flex gap-5 text-base font-quicksand font-medium-600  text-[#DE001B] ">
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
