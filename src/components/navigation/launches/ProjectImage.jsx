function ProjectImage({ img }) {
  return (
    <div className="w-full xs:px-1 md:px-1">
      <img
        className="rounded-[10px] aspect-w-2 aspect-h-1"
        src={img}
        style={{ boxShadow: "rgba(255, 0, 0, 0.89) 0px 0px 64px -48px" }}
      />
    </div>
  );
}

export default ProjectImage;
