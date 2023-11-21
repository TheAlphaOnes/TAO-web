const chapters = [
  "Chapter 1 : Introduction to Web3 🌐",
  "Chapter 2 : principles of Web3 🚀",
  "Chapter3 : The blockchain and the smart contracts 🔗💡",
  "Chapter 4 : decentralized Applications (dApps) 📱⚙️",
];

function Chapters() {
  return (
    <div className="w-full flex flex-col gap-5 xs:px-1 md:px-1">
      {chapters.map((chapter, i) => (
        <div
          key={i}
          className="
          xs:w-full xs:py-[0.875rem] xs:text-xs
          sm:py-[1.25rem] sm:text-[1.25rem]
          md:min-w-[350px] md:w-full md:text-sm md:py-2
          lg:min-w-[400px] lg:w-full lg:text-lg lg:py-3
          
          border-b-2 rounded-[5px] flex items-center font-quicksand border-[#DC1B1B] bg-[#05091C]"
        >
          <p className=" pl-2 text-left font-normal-400">{chapter}</p>
        </div>
      ))}
    </div>
  );
}

export default Chapters;
