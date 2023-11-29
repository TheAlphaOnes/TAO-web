import Chapters from "./Chapters";
import ProjectImage from "./ProjectImage";

function ProjectDisplay({ projectIndex, data }) {
  return (
    <div className="w-full my-16 flex gap-5 items-start xs:flex-wrap md:flex-nowrap">
      <ProjectImage img={data.launches[projectIndex].img} />
      <Chapters />
    </div>
  );
}

export default ProjectDisplay;
