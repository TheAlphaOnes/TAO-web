import CountCard from "../components/navigation/portfolio/CountCard";
import ProjectCard from "../components/navigation/portfolio/ProjectCard";
function Portfolio() {
  return (
    <div className="bg-[#0a0e16] px-16 pb-12 flex justify-center">
      <div className="max-w-[1400px]">
        <h1 className="flex justify-center font-quicksand text-[40px] font-extra-900 bg-gradient-to-r from-[#e71d36] to-[#f46036] text-transparent bg-clip-text">
          Portfolio.
        </h1>
          <div className="flex gap-10 mt-10 flex-wrap">
            <CountCard />
            <CountCard />
            <CountCard />
          </div>
          <div className="flex gap-10 mt-14 flex-wrap">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
