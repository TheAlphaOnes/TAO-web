import Chapters from "./Chapters";
import ProjectImage from "./ProjectImage";
import { motion } from "framer-motion";

function ProjectDisplay({ projectIndex, data }) {
  const id = data.launches.findIndex((el) => el.id === projectIndex);

  const img = data.launches[id].img;
  const projectTitle = data.launches[id].name;
  const chapters = Object.values(data.launches[id].disc);

  return (
    <motion.div
    initial={{
      x: -200,
      opacity: 0.3,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    transition={{
      duration: 0.4,
      ease: "linear",
    }} className="w-full my-16 flex gap-5 items-start xs:flex-wrap md:flex-nowrap">
      <ProjectImage img={img} />
      <Chapters projectTitle={projectTitle} chapters={chapters} />
    </motion.div>
  );
}

export default ProjectDisplay;
