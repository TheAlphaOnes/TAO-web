function ListBox({ list, handleClick }) {
  return (
    <div className="w-full border-l-2 pl-5 py-2 flex flex-col gap-4">
      {list.map((titles, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleClick(titles.id)}
        >
          <div className="flex items-center">
            <div className="w-3 h-[1px] bg-white mr-1"></div>
            <h1 className="text-[#DE001B] text-base font-quicksand font-medium-600">
              {titles.desc}
            </h1>
          </div>
          <div className="flex ml-5">
            <div className="w-3 h-3 border-b-[1px] border-l-[1px]"></div>
            <p className="text-base ml-1 font-quicksand font-normal-400 text-[#A3A1A1]">
              {titles.one_line_desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListBox;
