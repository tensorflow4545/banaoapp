import Image from "next/image";
import logo from "@/assets/logo.png";
import arrow from "@/assets/arrow.png";
import explore from "@/assets/explore.png";
import star from "@/assets/star.png";
import bookmark from "@/assets/bookmark.png";
import notification from "@/assets/notifications.png";
import product from "@/assets/product.png";
import searchmob from "@/assets/searchmob.png";
import menu from "@/assets/menu.png";
import { FaSearch,FaCompass } from "react-icons/fa";
export default function Navbar(){
    return(
        <>
            {/* Desktop view */}
            <div className="sm:grid hidden">
            <div className="w-full h-[max] bg-white lg:px-[50px] md:px-[50px] py-[10px]">
                
                {/* grid */}
                <div className="grid grid-cols-2 gap-[20px] place-items-center">
                  
                  {/* Flex */}
                  <div className="lg:flex lg:flex-row justify-start gap-[40px]">
                    {/* basis */}
                    <div className="basis">
                      <div className="lg:w-[180px] md:w-[180px] lg:h-[60px] md:h-[40px] relative"><Image src={logo} fill alt="logo image"></Image></div>
                    </div>
                    <div className="basis  flex flex-row items-center md:mt-[20px]">
                      <input
                        type="text"
                        placeholder="Enter text"
                        className="px-4 py-2 lg:max-w-[200px]  md:max-w-[150px] h-[40px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="w-[40px] h-[40px] rounded-md bg-[#8064A2] flex justify-center items-center text-white">
                      <FaSearch />                                           
                      </div>
                    
                    </div>
                  </div>

                  {/* flex */}
                  <div className="flex flex-row lg:gap-[10px] md:gap-[10px]">
                    {/* dropdown */}
                    <div className="flex flex-row items-center gap-[5px] text-[#000000] text-[14px]">
                      <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px] relative"><Image src={explore} fill  alt="explre"></Image></div>
                      Explore
                      <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px]  relative"><Image src={arrow} fill  alt="explre"></Image></div>
                    </div>

                    {/* dropdown */}
                    <div className="flex flex-row items-center gap-[5px] text-[#000000] text-[14px]">
                      <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px] relative"><Image src={star} fill  alt="explre"></Image></div>
                      Hobbies
                      <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px]  relative"><Image src={arrow} fill  alt="explre"></Image></div>
                    </div>
                    {/* icons */}
                    <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px] lg:mt-[3px] md:mt-[10px] relative"><Image src={bookmark} fill  alt="explre"></Image></div>
                    <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px] lg:mt-[3px] md:mt-[10px] relative"><Image src={notification} fill  alt="explre"></Image></div>
                    <div className="lg:w-[24px] md:w-[18px] lg:h-[24px] md:h-[18px] lg:mt-[3px] md:mt-[10px] relative"><Image src={product} fill  alt="explre"></Image></div>
                    {/* Sign in button */}
                    <div className="w-[112px] h-[40px] flex items-center justify-center text-[14px] text-[#8064A2] font-semibold border-[2px] border-[#8064A2] rounded-md">
                     Sign in
                    </div>
                  </div>

                </div>
            </div>
            </div>

            {/* mobile view */}
            <div className="sm:hidden">

            <div className="w-full h-max px-[10px] py-[10px] bg-white flex flex-row">

            <div className="basis-1/2 flex items-center">
            <div className="w-[156px] h-[32px] relative">
             <Image src={logo} fill alt="Logo"></Image>
            </div>
            </div>

            <div className="basis-1/2 flex flex-row justify-end gap-[5px]">
             <div className="w-[24px] h-[24px] relative"><Image src={searchmob} fill alt="image"></Image></div>
             <div className="w-[24px] h-[24px] relative"><Image src={notification} fill alt="image"></Image></div>
             <div className="w-[24px] h-[24px] relative"><Image src={menu} fill alt="image"></Image></div>
            </div>

            </div>

            </div>
        </>
    )
}