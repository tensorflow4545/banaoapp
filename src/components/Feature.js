import Image from "next/image";
import feature1 from "@/assets/feature1.png";
import feature2 from "@/assets/feature2.png";
import feature3 from "@/assets/feature3.png";
import feature4 from "@/assets/feature4.png";
import add from "@/assets/add.png";
import quote from "@/assets/quote.png";
import test from "@/assets/test.png";
export default function Feature(){
    const features=[
        {
            id:1,
            head:"People",
            desc:"Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
            buttontext:"Connect",
            img:feature1
        },
        {
            id:2,
            head:"Place",
            desc:"Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
            buttontext:"Meet up",
            img:feature2
        },
        {
            id:3,
            head:"Product",
            desc:"Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
            buttontext:"Get it",
            img:feature3
        },
        {
            id:4,
            head:"Program",
            desc:"Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
            buttontext:"Attend",
            img:feature4
        }
    ];
    return(
        <>
           <div className="w-full h-max lg:px-[100px] md:px-[60px] px-[50px] lg:py-[100px] md:py-[40px] py-[20px] bg-white">
             <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 gap-[10px]">
             {features.map((element,index)=>(
                <div key={index} className="max-w-[608px] h-max px-[30px] py-[20px] lg:mb-[0px] mb-[20px] rounded-md border-[2px] border-[#94a3b8]">
                   <div className="flex gap-[40px] mb-[25px]">
                     <div className="w-[40px] h-[40px] relative"><Image src={element.img} fill alt="Image"></Image></div>
                     <p className="text-[24px] font-bold">{element.head}</p>
                   </div>
                   <p className="text-[18px] font-light text-justify mb-[30px]">{element.desc}</p>
                   <button className="w-[122px] h-[40px] border-[2px] border-[#8064A2] rounded-md text-[#8064A2] text-[14px] font-semibold">
                     {element.buttontext}
                   </button>
                </div>
             ))}
             </div>
           </div>

           <div className="w-full h-max lg:px-[100px] md:px-[50px] px-[20px] lg:py-[100px] md:py-[50px] py-[20px] bg-[#F7FDFF]">
              <div className="w-full min-h-[284px] lg:px-[40px] md:px-[20px] px-[10px] lg:py-[40px] md:py-[20px] py-[10px] bg-white rounded-md border-[2px] border-[#94a3b8]">
                <div className="flex flex-row gap-[30px] items-center mb-[30px]">
                <div className="w-[40px] h-[40px] relative"><Image src={add} fill alt="Image"></Image></div>
                <p className="text-[24px] text-[#08090A] text-bold">Add your own</p>
                </div>
                <p className="text-[18px] text-[#08090A] text-justify">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                 {/* button */}
                 <button className="lg:w-[122px] md:w-[122px] w-full text-center h-[40px] border-[2px] mt-[30px] border-[#8064A2] rounded-md text-[#8064A2] text-[14px] font-semibold">
                     Add New
                 </button>
              </div>
           </div>

           <div className="w-full h-max lg:px-[100px] md:px-[50px] px-[20px] lg:py-[100px] md:py-[50px] py-[20px] bg-white">
              <div className="w-full min-h-[472px] lg:px-[40px] md:px-[20px] px-[10px] lg:py-[40px] md:py-[20px] py-[10px] bg-[#F7F5F9] rounded-md">
                <div className="flex flex-row gap-[30px] items-center mb-[30px]">
                <div className="w-[40px] h-[40px] relative"><Image src={quote} fill alt="Image"></Image></div>
                <p className="text-[24px] text-[#08090A] text-bold">Testimonials</p>
                </div>
                <p className="text-[18px] text-[#94a3b8] text-justify">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                 {/* flex */}
                 <div className="lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse gap-[40px]">
                 <div className="basis-1/3 flex items-center gap-[20px] mt-[20px]">
                 <div className="lg:w-[100px] w-[60px] lg:h-[100px] h-[60px] relative rounded"><Image src={test} fill alt="Image"></Image></div>
                 <div>
                    <p className="text-[18px] text-[#8064A2] font-semibold">Shubha Nagarajan</p>
                    <p className="text-[14px] text-[#0096C8] font-semibold">Classical Dancer</p>
                 </div>
                 </div>
                 <div className="basis-2/3 lg:max-w-[776px] md:max-w-[776px] w-full text-center h-[100px] border-[2px] mt-[30px] bg-[#CCC1DA] rounded-md flex items-center justify-center gap-[40px]">
                 <div>
                   <audio controls>
                     <source src="/path/to/your/audio/file.mp3" type="audio/mpeg" />
                     Your browser does not support the audio element.
                   </audio>
                 </div>
                 <div className="w-[60px] h-[60px] relative rounded"><Image src={test} fill alt="Image"></Image></div>
                 </div>
                 </div>
              </div>
           </div>
        </>
    )
}