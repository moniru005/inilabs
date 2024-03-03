import image from "../assets/images/brainstorm.png";
const BuiltWork = () => {
  return (
    <div className="lg:w-[1120px] py-16 mx-auto px-4 lg:px-4">
      <div className="">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Built for the way you work
        </h1>
        {/* buttons */}
        <div className="py-6 flex flex-wrap lg:flex-row gap-3">
          <button className="btn bg-[#F1F3FD] border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Brainstorming
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Diagramming
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Meetings & Workshops
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Scrum Events
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Mapping
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Research & Design
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Strategic Planning
          </button>
        </div>
        {/* 2 columns */}
        <div className=" flex justify-center px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-14 gap-y-6 lg:items-start">
            {/* left */}
            <div className="w-full lg:w-4/12 flex flex-col justify-start pt-6">
              <h1 className="text-xl">Brainstorming</h1>
              <p className="pt-4 pb-8">
                In the office, remote, or a mix of the two, with Miro, your team
                can connect, collaborate, and co-create in one space no matter
                where you are.
              </p>
              <p className="text-[#4262FF]">Learn more →</p>
            </div>
            {/* right */}
            <div className="w-full lg:w-8/12">
              <img className=" " src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltWork;
