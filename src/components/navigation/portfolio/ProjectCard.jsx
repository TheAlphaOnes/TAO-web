function ProjectCard() {
  return (
    <div className="min-w-[295px] max-w-[350px] w-full p-[2px] rounded-[10px] bg-gradient-to-r from-[#e71d36] to-[#f46036] flex justify-center items-center">
      <div className="w-full h-full rounded-[10px] bg-[#0a0e16]">
        <div className="my-9 mx-7">
          <div className="flex gap-6">
            <div className="flex flex-col">
              <h1 className="text-xl font-quicksand font-medium-600">
                Alpha Ones UI
              </h1>
              <p className="text-xs font-medium-600 font-quicksand mt-4">
                This is the ui frontend for Alpha UI
              </p>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/da59/a666/3bad8efbbb2b9583213475cd4a5f8813?Expires=1700438400&Signature=baTrrFSy03YZUfyZaM0vWAgBXt-WDkUoUIx-m4KDuPwd7L4kzSvmJHwG2ZscMvI32H1FHtTsOZjx6ILImoled8rhUu-4lIbLQATGz4uj5Wau-zl9T38K9GZvJIXyIgAFuKvhVD2VFk8DiF0~m2ob8tHKzBTToAW9yTfAmjVlxLZtzu4Qg~2csDBfAAjUujcku2VJ2lku6CgwudAC2oWFlZLrYddLD5Rn-NQoKe9RBlfxRUxWnaoVojoC2vLi52C0QOhxU8hHXsr7t48ffKhl7EqOQi~Vw5NF6UIMV2eYjCjnQK0Mz9c4kFY9gJ5DOLPkuveDQH2H7rfMgJg9-s0DcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="TheAlphaOnes"
                className="w-11"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex flex-col">
              <p className="text-[#C5C5C5] text-[13px] font-quicksand font-medium-600">
                Team Lead
              </p>
              <p className="text-[#FDFFFC] text-[15px] font-quicksand font-medium-600">
                Cognito Saurav
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#C5C5C5] text-[13px] font-quicksand font-medium-600 text-right">
                Status
              </p>
              <p className="text-red-600 font-IBM text-[13px] font-normal-400 flex justify-center items-center text-right">
                <div className="w-[11px] h-[11px] bg-[#FF0020] rounded-full mr-2"></div>
                In Research
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
