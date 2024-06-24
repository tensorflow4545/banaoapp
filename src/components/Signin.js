"use client";
import { useState } from "react";
import Image from "next/image";
import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";
import { IoIosLock } from "react-icons/io";
export default function Signin(){
    const [control,setcontrol]=useState(1);

    return(
        <>
           <div className="w-full h-max px-[10px] py-[10px] bg-[#F7F5F9] ">
              
            <div className="flex flex-row gap-[30px]">
            <button className={`text-[20px] font-medium ${control==1?"text-[#8064A2]":"text-[#939CA3]"}`} onClick={()=>{setcontrol(1)}}>Sign in</button>
            <button className={`text-[20px] font-medium ${control==2?"text-[#8064A2]":"text-[#939CA3]"}`} onClick={()=>{setcontrol(2)}}>Join in</button>
            </div>


            {/* Sign in */}
            <div className={`w-full ${control==1?"h-max":"invisible h-[0px]"} mt-[40px]`}>
            {/* google */}
            <div className="lg:w-[410px] md:w-full h-[40px] flex items-center justify-even px-[30px] text-[14px] text-[#8064A2] font-semibold border-[2px] border-[#8064A2] rounded-md">
              <div className="w-[16px] h-[16px] relative"><Image src={google} fill alt="Google image"></Image></div>       
              <p className="ml-[100px]">Continue with Google</p>
            </div>

            {/* facebook */}
            <div className="lg:w-[410px] md:w-full h-[40px] flex items-center justify-even px-[30px] mt-[40px] text-[14px] text-[#8064A2] font-semibold border-[2px] border-[#8064A2] rounded-md">
              <div className="w-[16px] h-[16px] relative"><Image src={facebook} fill alt="Google image"></Image></div>       
              <p className="ml-[100px]">Continue with Facebook</p>
            </div>

            <div className="text-[12px] text-[#CED4DA] font-semibold flex text-center mt-[30px]">----------------------------<span className="text-black">Or connect with</span>-----------------------------</div>
            
            <form className="lg:w-[410px] md:w-full mt-[20px]">
              <div className="mb-4">
                
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="text-black form-checkbox" id="remember" />
                  <span className="ml-2 text-sm font-semibold text-black">Remember Me</span>
                </label>
                <button  className="text-sm text-black flex gap-[5px] font-semibold"><IoIosLock className="mt-[3px]"/>Forgot Password?</button>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-black bg-white rounded-md border-[2px] border-black  focus:outline-none" 
              >
                Continue
              </button>
            </form>
            </div>


            {/* Join in */}
           <div className={`w-full ${control==2?"h-max":"invisible h-[0px]"} mt-[40px]`}>
            {/* google */}
            <div className="lg:w-[410px] md:w-full h-[40px] flex items-center px-[30px] text-[14px] text-[#8064A2] font-semibold border-[2px] border-[#8064A2] rounded-md">
              <div className="w-[16px] h-[16px] relative"><Image src={google} fill alt="Google image"></Image></div>       
              <p className="ml-[100px]">Continue with Google</p>
            </div>

            {/* facebook */}
            <div className="lg:w-[410px] md:w-full h-[40px] flex items-center px-[30px] mt-[40px] text-[14px] text-[#8064A2] font-semibold border-[2px] border-[#8064A2] rounded-md">
              <div className="w-[16px] h-[16px] relative"><Image src={facebook} fill alt="Google image"></Image></div>       
              <p className="ml-[100px]">Continue with Facebook</p>
            </div>

            <div className="text-[12px] text-[#CED4DA] font-semibold flex text-center mt-[30px]">----------------------------<span className="text-black">Or connect with</span>-----------------------------</div>
            
            <form className="lg:w-[410px] md:w-full mt-[20px]">
              <div className="mb-4">
                
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex flex-row-reverse items-center justify-between mb-4">
                
                <button  className="text-sm text-[#9ca3af] flex gap-[5px] font-semibold">Password Strength</button>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-[#8064A2] rounded-md   focus:outline-none" 
              >
                Agree and Continue
              </button>
            </form>
            </div>
  
           </div> 
        </>
    )
}