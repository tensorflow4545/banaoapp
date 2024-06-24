import Image from "next/image";
import heroimg from "@/assets/heroimg.png";
import Signin from "./Signin";
export default function Hero(){
    return(
        <>
            {/* Desktop view */}
            <div className="sm:grid hidden">
            <div className="w-full h-max lg:px-[100px] px-[20px] lg:py-[50px] py-[20px] bg-[#F7F5F9]">
              <div className="lg:grid lg:grid-cols-2 gap-[170px]">
              {/* child */}
              <div>
              <h1 className="text-[36px] font-semibold font-Emilio mb-[40px]">
               Explore your <span className="text-[#4299e1]">hobby</span> or <span className="text-[#8064A2]">passion</span>
              </h1>

              <p className="text-[14px] text-[#000000] text-justify pb-[20px]">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
              <p className="text-[14px] text-[#000000] text-justify pb-[50px]">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
              <div className="lg:w-[697px] md:min-w-[500px] h-[216px] relative"><Image src={heroimg} fill alt="Image"></Image></div>
              </div>
              {/* child */}
              <div className="md:w-full md:h-max mt-[20px] flex items-center justify-center">
                <Signin/>
              </div>
              </div>
            </div>
            </div>

            {/* mobile view */}
            <div className="sm:hidden">
            <div className="w-full h-max px-[20px] py-[20px] bg-[#F7F5F9]">
            <div>
              <h1 className="text-[36px] font-semibold font-Emilio mb-[40px]">
               Explore your <span className="text-[#4299e1]">hobby</span> or <span className="text-[#8064A2]">passion</span>
              </h1>

              <p className="text-[14px] text-[#000000] text-justify pb-[20px]">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
              <p className="text-[14px] text-[#000000] text-justify pb-[50px]">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
              </div>

              <div className="md:w-full md:h-max mt-[20px] flex items-center justify-center">
                <Signin/>
              </div>
              <div className="lg:w-[697px] md:min-w-[500px] h-[216px] relative sm:hidden sm:h-[0px]"><Image src={heroimg} fill alt="Image"></Image></div>
            </div>

            </div>
        </>
    )
}