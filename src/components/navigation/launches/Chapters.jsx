import { useToggle } from "../../../hooks/useToggle";

const chapters = [
  {
    disc: "I hold a Master's degree in Business Administration with a focus on strategic management.",
    "one-liner": "Masters in Business Administration",
  },
  {
    disc: "Passionate about emerging technologies and their impact on businesses.",
    "one-liner": "Technology Enthusiast",
  },
  {
    disc: "Skilled at finding innovative solutions to complex challenges.",
    "one-liner": "Problem Solver",
  },
];

function Chapters() {
  return (
    <div className="w-full flex flex-col gap-5 xs:px-1 md:px-1">
      <h1></h1>
      {chapters.map((chapter, i) => (
        <TheChapter chapter={chapter} key={i} />
      ))}
    </div>
  );
}

function TheChapter({ chapter }) {
  const [value, toggle] = useToggle(false);

  return (
    <div
      onClick={toggle}
      className="
          xs:w-full xs:py-[0.875rem] xs:text-xs
          sm:py-[1.25rem] sm:text-[1.25rem]
          md:min-w-[350px] md:w-full md:text-sm md:py-2
          lg:min-w-[400px] lg:w-full lg:text-lg lg:py-3
          
          border-b-2 rounded-[5px] flex flex-col items-start font-quicksand border-[#DC1B1B] bg-[#05091C] cursor-pointer transition"
    >
      <p
        className="pl-2 text-left font-normal-400 xs:text-xs
          sm:text-[1.25rem]
          md:text-sm lg:text-lg"
      >
        {chapter["one-liner"]}
      </p>
      <p
        className={`pl-2 mt-2 text-left font-normal-400 ${
          !value && "hidden"
        } xs:text-[0.55rem]
        sm:text-base
        md:text-[0.75rem] lg:text-base text-slate-400`}
      >
        {chapter.disc}
      </p>
    </div>
  );
}

export default Chapters;
