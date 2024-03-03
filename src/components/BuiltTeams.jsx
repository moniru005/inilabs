import image from "../assets/images/builtteams.png";
import { BsCheck } from "react-icons/bs";
import diamond from "../assets/images/diamond.png";
import figma from "../assets/images/figma.png";
import notion from "../assets/images/notion.png";
import { SiAdobexd } from "react-icons/si";

const BuiltTeams = () => {
  return (
    <div className="lg:w-[1120px] py-16 mx-auto px-4 lg:px-4">
      <div className="">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Built for all kinds of teams
        </h1>
        {/* buttons */}
        <div className="py-6 flex flex-wrap lg:flex-row gap-3">
          <button className="btn bg-[#F1F3FD] border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            UX & Design
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Marketing
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Product Management
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Engineering
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Consultants
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Agile Coaches
          </button>
          <button className="btn bg-white border border-[#F2F2F2] py-1 px-3 text-base font-normal rounded-3xl">
            Sales
          </button>
        </div>

        {/* 2 columns */}
        <div className=" flex justify-center px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 lg:items-start ">
            {/* left */}
            <div className="w-full lg:w-4/12 flex flex-col justify-start pt-6 space-y-3">
              <div className="space-y-4">
                <p className="flex flex-row gap-2 items-center">
                  <BsCheck className="text-xl" />
                  <span>Build low-fi wireframes</span>
                </p>
                <p className="flex flex-row gap-2 items-center">
                  <BsCheck className="text-xl" />
                  <span>Involve stakeholders in the design process</span>
                </p>
                <p className="flex flex-row gap-2 items-center">
                  <BsCheck className="text-xl" />
                  <span>Run engaging design workshops</span>
                </p>
                <p className="text-[#4262FF] pt-6">Learn more →</p>
              </div>
              <div className="pt-12 space-y-3">
                <p className="">Integrate your favorite tools</p>
                {/* icons */}
                <div className="flex items-center gap-3">
                  <img className="w-[30px] h-[30px]" src={diamond} alt="" />
                  <button className="bg-[#470137] w-[22px] h-[22px] rounded">
                    <SiAdobexd className="bg-[#FF61F6] text-2xl rounded" />
                  </button>
                  <img className="w-[30px] h-[30px]" src={figma} alt="" />
                  <img className="w-[25px] h-[25px]" src={notion} alt="" />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-8/12 flex justify-end">
              <img className="lg:w-[80%]" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltTeams;
