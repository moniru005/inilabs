import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { GoHorizontalRule } from "react-icons/go";

const Footer = () => {
  return (
    <div className="mt-10 lg:mt-0 pt-10 py-16 w-full bg-[#02033B]">
      {/*3 column */}
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0 w-full lg:w-[1056px] mx-auto gap-y-10">
        {/* column-1 */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between  gap-4">
          <div className="w-96">
            <h1 className="text-[23px] font-bold text-white">
              Scan. Detect. Remove.
            </h1>
            {/* social icons */}
            <div className="w-full mt-6 h-20 flex flex-row justify-start gap-6">
              <button className="rounded w-9 h-9 bg-white py-2 pl-1 pr-3 ">
                <FaTwitter className="text-2xl" />
              </button>
              <button className="rounded w-9 h-9 bg-white pt-2.5 pl-1 pr-3">
                <ImFacebook className="text-[28px]" />
              </button>
              <button className="rounded w-9 h-9 bg-white py-1.5 pl-1.5 pr-2">
                <FaYoutube className="text-2xl" />
              </button>
            </div>
            <p className="w-full text-sm text-white h-8 flex gap-10">
              <a className="underline" href="#">
                Privacy Policy
              </a>
              <a className="underline" href="#">
                Terms of Service
              </a>
            </p>
            <div className="mt-10">
              <p className="pb-10 w-full text-sm text-white ">
                Copyright © 2022 Certo Software Limited | Registered in England
                & Wales No. 10072356
              </p>
              <p className=" w-full text-sm text-white h-8">
                Designed & developed by{" "}
                <span className="underline">Bigger Picture</span>
              </p>
            </div>
          </div>
        </div>

        {/* column-2 */}
        <div>
          <div className="w-full lg:w-44 flex flex-col lg:justify-start lg:items-start items-center">
            <div className="">
              <h1 className="h-16 text-white text-3xl font-bold">Miro.</h1>

              <div className="mt-10 text-[#FFC247] text-[19px] font-bold space-y-4">
                <p className="flex flex-row justify-start items-center gap-4">
                  <GoHorizontalRule />
                  <span>iPhone</span>
                </p>
                <p className="flex flex-row justify-start items-center gap-4">
                  <GoHorizontalRule />
                  <span>Android</span>
                </p>
                <p className="flex flex-row justify-start items-center gap-4">
                  <GoHorizontalRule />
                  <span>Help</span>
                </p>
                <p className="flex flex-row justify-start items-center gap-4">
                  <GoHorizontalRule />
                  <span>About</span>
                </p>
                <p className="flex flex-row justify-start items-center gap-4">
                  <GoHorizontalRule />
                  <span>Insights</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  column-3 */}
        <div className="w-full lg:w-1/2 flex flex-col items-end">
          {/* card */}
          <div className="relative bg-[#FFC247] w-96 h-56 rounded-[42px]">
            <div className="absolute top-0 left-[80px] z-20">
              <svg
                width="190"
                height="225"
                viewBox="0 0 190 233"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_55)">
                  <path
                    d="M136.249 146.32C133.875 145.139 131.141 144.905 128.6 145.664C126.059 146.423 123.902 148.119 122.564 150.408C121.589 152.101 120.556 153.736 119.466 155.314C117.626 158.153 115.644 160.896 113.527 163.534C109.519 168.452 103.723 171.577 97.4126 172.223C91.1019 172.868 84.7931 170.981 79.8731 166.977C78.6196 165.94 77.4669 164.788 76.4303 163.534C74.3646 160.952 72.3849 158.241 70.4914 155.443C60.8245 140.543 54.1315 123.912 50.7812 106.469C48.8519 96.9035 47.6293 87.2087 47.1232 77.4634C46.7949 71.2067 48.7006 65.0369 52.5 60.055C56.2995 55.0732 61.7455 51.6035 67.8662 50.2651H68.1675C77.0378 48.3993 86.0239 47.1341 95.0646 46.478C104.09 47.1218 113.061 48.3727 121.919 50.2221H122.177C128.297 51.5704 133.739 55.0502 137.531 60.0402C141.323 65.0302 143.217 71.2055 142.877 77.4634C142.877 79.357 142.877 81.2936 142.489 83.3162C142.36 84.6916 142.505 86.0791 142.916 87.3979C143.328 88.7167 143.998 89.9404 144.887 90.9977C145.776 92.0551 146.867 92.925 148.095 93.5567C149.324 94.1885 150.666 94.5695 152.043 94.6776L177.52 96.7002C178.889 96.818 180.267 96.6639 181.576 96.2468C182.885 95.8297 184.098 95.1578 185.146 94.2698C186.194 93.3818 187.056 92.2952 187.682 91.0726C188.309 89.8501 188.687 88.5157 188.795 87.1464C190.018 72.1466 189.902 57.0678 188.451 42.0884C188.116 38.5811 187.079 35.177 185.4 32.0791C183.722 28.9812 181.437 26.2529 178.682 24.0566C154.755 5.20717 111.117 0.989714 98.5074 -9.799e-05C96.1723 -0.172168 93.8277 -0.172168 91.4926 -9.80049e-05C78.8833 0.989714 35.2455 5.20717 11.3179 24.0566C8.56391 26.2573 6.27733 28.986 4.59237 32.0825C2.90742 35.1789 1.85803 38.5808 1.50582 42.0884C-1.59273 73.8485 -4.51913 177.951 83.2729 229.163C86.898 231.276 91.019 232.39 95.2152 232.39C99.4113 232.39 103.532 231.276 107.157 229.163C130.627 215.516 150.098 195.941 163.62 172.399C164.317 171.213 164.773 169.901 164.962 168.538C165.152 167.175 165.07 165.788 164.722 164.457C164.374 163.126 163.767 161.876 162.936 160.78C162.104 159.684 161.064 158.762 159.876 158.069L159.23 157.724L136.249 146.32Z"
                    fill="#FDB235"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_55">
                    <rect
                      width="189.226"
                      height="232.391"
                      fill="white"
                      transform="translate(0.386902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="relative flex flex-col z-50">
              <div className="p-6">
                <h1 className="text-[23px] font-bold">
                  Sign up to our newsletter
                </h1>
                <p className="text-sm pt-4">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>
              </div>
              <div className="px-6 pt-3">
                <input
                  className="px-4 py-2 rounded-l-full"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="px-4 py-2 rounded-r-full bg-black text-white"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1056px] px-4 lg:px-0 mx-auto">
        <p className="text-sm text-white w-full lg:w-[60%] pt-10">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </div>
    </div>
  );
};

export default Footer;
