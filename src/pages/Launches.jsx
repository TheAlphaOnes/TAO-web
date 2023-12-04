import { useState } from "react";
import ProjectDisplay from "../components/navigation/launches/ProjectDisplay";
import ListBox from "../components/navigation/launches/ListBox";
import { useDataContext } from "../contextProvider/DataContext";

function Launches() {
  const {
    state: {
      status,
      data,
      lists: { list1, list2 },
    },
  } = useDataContext();
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <>
      {status === "loading" && <h1 className="text-5xl text-white">Loading</h1>}
      {status === "error" && <h1 className="text-red-600 text-5xl">Error</h1>}
      {status === "finished" && (
        <div className="w-full bg-[#0a0e16] flex justify-center">
          <div className="max-w-[1312px] w-full px-7 flex justify-center flex-col">
            <div className="w-full font-quicksand text-center">
              <h1 className="font-medium-600 text-[40px] bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent">
                Our Projects
              </h1>
              <p className="text-[19px]">Discover some of our best launches</p>
            </div>

            <ProjectDisplay projectIndex={projectIndex} data={data} />
            <h1 className="text-3xl mb-2 font-bold-800 font-gilroy bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent">
              Other Projects
            </h1>

            <div className="flex justify-between xs:flex-wrap md:flex-nowrap gap-8 mb-16 ">
              <ListBox list={list1} handleClick={setProjectIndex} />
              <ListBox list={list2} handleClick={setProjectIndex} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Launches;
