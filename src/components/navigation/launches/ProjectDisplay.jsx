import Chapters from "./Chapters";
import ProjectImage from "./ProjectImage";

function ProjectDisplay({ projectIndex, data }) {
  const id = data.launches.findIndex((el) => el.id === projectIndex);

  const img = data.launches[id].img;
  const projectTitle = data.launches[id].name;
  const chapters = Object.values(data.launches[id].disc);

  return (
    <div className="w-full my-16 flex gap-5 items-start xs:flex-wrap md:flex-nowrap">
      <ProjectImage img={img} />
      <Chapters projectTitle={projectTitle} chapters={chapters} />
    </div>
  );
}

export default ProjectDisplay;
