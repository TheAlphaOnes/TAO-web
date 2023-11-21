function Video() {
  return (
    <div className="w-full xs:px-1 md:px-1">
      <iframe
        className="rounded-[10px] xs:w-full xs:h-[250px]
        sm:h-[340px]
        md:min-w-[350px]
        md:w-full md:h-[250px] lg:w-full lg:h-[350px]"
        src="https://www.youtube.com/embed/7NptxLr23RU?si=Acc21rHG5J_K4NYT"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in -picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
