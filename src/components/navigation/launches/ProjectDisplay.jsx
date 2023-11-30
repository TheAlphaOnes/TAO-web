import Chapters from "./Chapters";
import ProjectImage from "./ProjectImage";

function ProjectDisplay({ projectIndex, data }) {
  const img = data.launches[projectIndex].img;
  const projectTitle = data.launches[projectIndex].name;
  const chapters = Object.values(data.launches[projectIndex].disc);

  return (
    <div className="w-full my-16 flex gap-5 items-start xs:flex-wrap md:flex-nowrap">
      <ProjectImage img={img} />
      <Chapters projectTitle={projectTitle} chapters={chapters} />
    </div>
  );
}

export default ProjectDisplay;
