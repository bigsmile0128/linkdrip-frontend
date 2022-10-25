import React from "react";
// import Components
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import "./Contact.css";
function Contact() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="w-auto m-auto md:w-2/3 grid grid-cols-1 md:grid-cols-2  mt-20 md:mt-40">
                <div className="p-2">
                    <p className="text-center text-[58px] text-[#3F4859] font-semibold">
                        Get in{" "}
                        <label className="text-[#9B7BF7] title_font">
                            touch
                        </label>
                    </p>
                    <p className="text-center text-[20px] text-gray-500  md:mt-5 title_font">
                        if you have any questions ,feel free to reach out.We do
                        our best to reply within 48 hours.
                    </p>
                    <div className="px-20 md:px-40 flex items-center gap-3 mt-10">
                        <img src="../../img/email.png" />
                        <div>
                            <p className="text-gray-500 text-[22px] title_font">
                                Email:
                            </p>
                            <p className="text-[#9B7BF7] text-[20px] font-bold title_font mt-0 md:mt-1">
                                support@linkdrip.io
                            </p>
                        </div>
                    </div>
                    <div className="m-auto mt-10">
                        <p className="text-center text-gray-600 text-[25px] title_font">
                            Follow us on social media
                        </p>
                        <div className="flex justify-between px-10 md:px-40 mt-5">
                            <div className="w-10 h-10 md:w-12 md:h-12  bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1 text-center">
                                <i className=" fa-brands fa-facebook text-center"></i>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12  bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1 text-center">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12  bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1 text-center">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12  bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1 text-center">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12  bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1 text-center">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" md:mt-5 w-full p-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-10">
                        <div className="md:w-full md:m-0">
                            <p className="text-left text-gray-800 text-[22px] font-bold title_font">
                                Name
                            </p>
                            <input
                                type={"text"}
                                className="px-2 w-full py-5 border border-gray-200 rounded-md mt-2 focus:outline-none focus:ring focus:ring-violet-300"
                                placeholder="John Carter"
                            />
                        </div>
                        <div className="md:w-full md:m-0">
                            <p className="text-left text-gray-800 text-[22px] font-bold title_font">
                                Email
                            </p>
                            <input
                                type={"text"}
                                className="px-2 w-full py-5 border border-gray-200 rounded-md mt-2 focus:outline-none focus:ring focus:ring-violet-300"
                                placeholder="example@email.com"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-left text-gray-800 text-[22px] font-bold title_font">
                                Leave us a message
                            </p>
                            <textarea className="px-2 w-full py-5 border border-gray-200 rounded-md mt-2 focus:outline-none focus:ring focus:ring-violet-300"></textarea>
                            <button className="w-[92%] md:w-auto border mt-2 border-gray-200 title_font text-white bg-[#9B7BF7]  px-20 md:px-14 py-4 md:py-6 rounded-md  font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
