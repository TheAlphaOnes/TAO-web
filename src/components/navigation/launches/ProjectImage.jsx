function ProjectImage({ img }) {
  return (
    <div className="w-full xs:px-1 md:px-1">
      <img
        className="rounded-[10px] xs:w-full xs:h-[250px]
        sm:h-[340px]
        md:min-w-[350px]
        md:w-full md:h-[250px] lg:w-full lg:h-[350px]"
        src={img}
      />
    </div>
  );
}

export default ProjectImage;
