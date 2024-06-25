import { FaFacebook,FaTwitter,FaInstagram,FaPinterestP,FaGooglePlusG,FaYoutube,FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function Footer(){
    return(
        <>
            <div className="w-full h-max lg:px-[100px] md:px-[50px] px-[40px] py-[50px] sm:py-[20px] bg-white">
             <div className=" lg:flex md:flex lg:flex-row md:flex-row items-center justify-start">
              <div className="basis-3/5 lg:grid md:grid grid-cols-3 gap-[30px]">
                <ul>
                    <li className="text-[14px] text-black font-semibold pb-[20px] mt-[20px]">Hobbycue</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">About Us</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Our Services</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Work with Us</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">FAQ</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Contact Us</li>
                </ul>
                <ul>
                    <li className="text-[14px] text-black font-semibold pb-[20px] mt-[20px]">How Do I</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Sign Up</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Add a Listing</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Claim Listing</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Post a Query</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Add a Blog Post</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Other Queries</li>
                </ul>
                <ul>
                    <li className="text-[14px] text-black font-semibold pb-[20px] mt-[20px]">Quick Links</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Listings</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Blog Posts</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Shop / Store</li>
                    <li className="text-[14px] text-[#08090A] font-normal pb-[10px]">Community</li>
                </ul>
              </div>
              <div className="basis-2/5">
              <p className="text-[14px] text-black font-semibold mb-[20px]">Social Media</p>
              <div className="grid grid-cols-8 gap-[10px] text-[#94a3b8] text-[20px] mb-[30px]">
              <FaFacebook />
              <FaTwitter/>
              <FaInstagram/>
              <FaPinterestP/>
              <FaGooglePlusG/>
              <FaYoutube/>
              <FaTelegramPlane/>
              <IoMdMail />
              </div>
              <p className="text-[14px] text-black font-semibold mb-[20px]">Invite Friends</p>
              <div className="flex flex-row items-center">
                      <input
                        type="text"
                        placeholder="Email Id"
                        className="px-4 py-2 lg:max-w-[360px]  md:max-w-[360px] h-[40px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="w-[59px] h-[40px] rounded-md bg-[#8064A2] flex justify-center items-center text-white">
                      Invite                                           
                      </div>
                    
                    </div>
              </div>
             </div>
            </div>
            <div className="w-full h-max py-[30px] flex items-center justify-center bg-[#F7F5F9] text-[#08090A] text-[14px] font-semibold">
            © Purple Cues Private Limited
            </div>
        </>
    )
}