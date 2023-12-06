import MemberCard from "../components/navigation/members/MemberCard";
import { useDataContext } from "../contextProvider/DataContext";
import norm from "../assets/img/norm.jpg";
import pixel from "../assets/img/pixel.jpg";

const pillars = [
  {
    contact: { type: "Twitter", url: "https://x.com/thenormvg" },
    pfp: norm,
    disc: "👨‍💻 18-year Fullstack Dev | Founder TheAlphaOnes | Building 'Fury' AI | 🎵 Hip-Hop | ☕ Coffee | Tech for a better world 🌍| Hardware Projects too",
    name: "Vishnu",
    tags: ["Developer", "Robotics", "AI"],
  },
  {
    contact: { type: "Twitter", url: "https://x.com/mrpixelak" },
    pfp: pixel,
    disc: "18-year-Student 📚|| Software developer🧑‍💻 || A self taught developer🔥 || Co-Founder && COO of TheAlphaOnes || Game Dev",
    name: "Akshat",
    tags: ["Game Dev", "Designer", "Robotics"],
  },
];

function Members() {
  const {
    state: { status, data },
  } = useDataContext();

  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[1312px] px-7 xs:px-4">
        <div>
          <h1
            className="w-full text-center font-quicksand font-bold-800 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent my-5
          xs:text-3xl sm:text-5xl md:text-4xl lg:text-5xl
          "
          >
            Founder
          </h1>
          {status === "loading" && (
            <h1 className="text-3xl text-blue-700">Loading...</h1>
          )}
          {status === "error" && (
            <h1 className="text-3xl text-red-700">Error☠️☠️☠️☠️</h1>
          )}
          {status === "finished" && (
            <div className="w-full flex gap-6 mb-12 card_xs:flex-wrap card_md:flex-wrap justify-center">
              {pillars.map((el, i) => (
                <MemberCard key={i} details={el} />
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="w-full text-center text-4xl font-quicksand font-bold-800 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent my-5 xs:text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
            Official Members
          </h1>
          {status === "loading" && (
            <h1 className="text-3xl text-blue-700">Loading...</h1>
          )}
          {status === "error" && (
            <h1 className="text-3xl text-red-700">Error☠️☠️☠️☠️</h1>
          )}
          {status === "finished" && (
            <div className="w-full flex gap-6 mb-12 card_xs:flex-wrap card_md:flex-wrap justify-center">
              {data.teams.map((el, i) => (
                <MemberCard details={el} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Members;
