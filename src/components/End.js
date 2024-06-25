import Image from "next/image";
import end from "@/assets/end.png";
export default function End(){
    return(
        <>
            <div className="w-full h-max lg:px-[100px] px-[50px] lg:py-[100px] py-[50px] bg-[#F7FDFF]">
            <h1 className="text-[36px] font-semibold font-Emilio mb-[40px]">
            Your <span className="text-[#4299e1]">hobby</span>, Your  <span className="text-[#8064A2]">Community... </span>
            </h1>
            <button
                type="submit"
                className="w-[147px] h-[46px] px-4 py-2 mb-[50px] font-semibold text-white bg-[#8064A2] rounded-md   focus:outline-none" 
              >
                Get started
              </button>
              <div className="w-full lg:h-[302px] md:h-[290px] h-[76px] relative"><Image src={end} fill alt="Image"></Image></div>
            </div>
        </>
    )
}