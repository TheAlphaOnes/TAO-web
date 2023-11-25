import MemberCard from "../components/navigation/members/MemberCard";

function Members() {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[1312px] px-7 xs:px-4">
        <div>
          <h1 className="w-full text-center text-4xl font-quicksand font-bold-800 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent my-5">
            Founder
          </h1>
          <div className="w-full flex gap-12 mb-12 xs:flex-wrap sm:flex-nowrap ">
            <MemberCard />
            <MemberCard />
          </div>
        </div>
        <div>
          <h1 className="w-full text-center text-4xl font-quicksand font-bold-800 bg-gradient-to-r from-[#E71D46] from-7% via-[#F85746] via-102% to-[#FF6F46] to-141% bg-clip-text text-transparent my-5">
            Official Members
          </h1>
          <div className="w-full flex gap-12 mb-4 xs:flex-wrap sm:flex-nowrap ">
            <MemberCard />
            <MemberCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
