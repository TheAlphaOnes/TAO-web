import Chapters from "../components/navigation/launches/Chapters";
import Video from "../components/navigation/launches/Video";

function Launches() {
  return (
    <div className="w-full bg-[#0a0e16] flex justify-center">
      <div className="max-w-[1312px] w-full px-7 flex justify-center flex-col">

        <div className="w-full font-quicksand text-center">
          <h1 className="font-medium-600 text-[40px] bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-[19px]">Discover some of our best launches</p>
        </div>

        <div className="w-full my-16 flex  gap-5 items-center xs:flex-wrap md:flex-nowrap">
          <Video />
          <Chapters />
        </div>

      </div>
    </div>
  );
}

export default Launches;
