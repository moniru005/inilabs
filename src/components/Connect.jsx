import image from "../assets/images/connect.png"
const Connect = () => {
    return (
        <div className="pt-16 flex justify-center px-4 lg:px-0">
            <div className="lg:h-[535px] flex flex-col lg:flex-row justify-between items-center lg:gap-14 gap-y-6">
            {/* left */}
            <div className="w-full lg:w-[450px] flex flex-col justify-start order-2">
                <h1 className="text-3xl lg:text-5xl font-bold ">Connect <br /> your tools, <br /> close your tabs</h1>
                <p className="pt-4 pb-8">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                <p className="text-[#4262FF]">Learn more →</p>
            </div>
            {/* right */}
            <div className="order-1">
                <img className="w-full lg:w-[550px] " src={image} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Connect;