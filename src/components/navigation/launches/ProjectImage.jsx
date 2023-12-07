function ProjectImage({ img }) {
  return (
    <div className="w-full xs:px-1 md:px-1">
      <img className="rounded-[10px] aspect-w-2 aspect-h-1" src={img} />
    </div>
  );
}

export default ProjectImage;
