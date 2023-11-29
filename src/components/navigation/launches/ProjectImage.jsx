function ProjectImage({ img }) {
  return (
    <div className="w-full xs:px-1 md:px-1">
      <img
        className="rounded-[10px] xs:w-full xs:h-[250px]
        sm:h-[340px]
        md:min-w-[350px]
        md:w-full md:h-[250px] lg:w-full lg:h-[350px]"
        src={
          "https://media.istockphoto.com/id/108327817/photo/lake-plansee-tirol-austria.jpg?b=1&s=612x612&w=0&k=20&c=BpwTXjt1uKfXqC2tmYHo7T_NBqr3IQrnJAfPqzjhj8c="
        }
      />
    </div>
  );
}

export default ProjectImage;
