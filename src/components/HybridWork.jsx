import image from "../assets/images/hybrid.png";
const HybridWork = () => {
    return (
        <div className="pt-16 flex justify-center px-4 lg:px-0">
            <div className="lg:h-[535px] flex flex-col lg:flex-row justify-between items-center lg:gap-14 gap-y-6">
            {/* left */}
            <div className="w-full lg:w-[450px] flex flex-col justify-start">
                <h1 className="text-3xl lg:text-5xl font-bold ">Work together, wherever you work</h1>
                <p className="pt-4 pb-8">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <p className="text-[#4262FF]">Learn more →</p>
            </div>
            {/* right */}
            <div className="">
                <img className="w-full lg:w-[550px] " src={image} alt="" />
            </div>
        </div>
        </div>
    );
};

export default HybridWork;