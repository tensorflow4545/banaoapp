import Image from "next/image";
import feature1 from "@/assets/feature1.png";
import feature2 from "@/assets/feature2.png";
import feature3 from "@/assets/feature3.png";
import feature4 from "@/assets/feature4.png";
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
        </>
    )
}