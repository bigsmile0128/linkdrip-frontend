import React , {useState} from "react";
// import Components
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import { Transition } from "@headlessui/react";
import "./Contact.css";
function Contact() {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleCollapse = () => {
        const btn_nav = document.getElementsByClassName("btn-nav");

        if (btn_nav[0].className.search("animated") < 0) {
            btn_nav[0].classList.add("animated");
        } else {
            btn_nav[0].classList.remove("animated");
        }
    };

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

                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-[450px]'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center title_font'>Frequently Asked <label className='text-[#9B7BF7] title_font font-bold'>Questions</label></p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4 title_font'>We get these questions a lot.</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center title_font'>See if you can find the answer you're looking for below.</p>
                </div>
                
                {/* FAQ part */}
                <div className="md:mb-80">
                    <div className="w-full md:w-2/3 m-auto mt-10 md:mt-20 p-5 rounded-md hover:scale-105 duration-700 ease-in-out">
                        <button onClick={() => { toggleCollapse(); setIsOpen1(!isOpen1); }} className="flex justify-between items-center w-full" >
                            <p className="text-[#0F1A2F] text-[25px] title_font font-semibold">Can I use Linkdrip for free?</p>
                        </button>
                    </div>

                    <Transition
                        show={isOpen1}
                        enter="transition ease-out duration-700 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="w-full md:w-2/3 m-auto border border-gray-300 rounded-2xl p-4" id="mobile-menu">
                                <p className="text-[20px]  text-gray-500">We are still working on putting together a killer pricing model for this product. And we will definitely favor all kinds of users with our prices.</p>
                            </div>
                        )}
                    </Transition>
                {/* FAQ Part */}

                {/* FAQ part */}
                <div className="w-full md:w-2/3  m-auto mt-10 md:mt-20 p-5 rounded-md hover:scale-105 duration-700 ease-in-out ">
                        <button onClick={() => { toggleCollapse(); setIsOpen2(!isOpen2); }} className="flex justify-between items-center w-full" >
                            <p className="text-[#0F1A2F] text-[25px] title_font font-semibold">Can I use Linkdrip as a team?</p>
                        </button>
                    </div>

                    <Transition
                        show={isOpen2}
                        enter="transition ease-out duration-700 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="w-full md:w-2/3 m-auto border border-gray-300 rounded-2xl p-4" id="mobile-menu">
                                <p className="text-[20px]  text-gray-500">Yes. With LinkDrip you can create separate workspaces and invite users to collaborate. </p>
                            </div>
                        )}
                    </Transition>
                {/* FAQ Part */}

                {/* FAQ part */}
                <div className="w-full md:w-2/3  m-auto mt-10 md:mt-20 p-5 rounded-md hover:scale-105 duration-700 ease-in-out ">
                        <button onClick={() => { toggleCollapse(); setIsOpen3(!isOpen3); }} className="flex justify-between items-center w-full" >
                            <p className="text-[#0F1A2F] text-[25px] title_font font-semibold">Do you currently have opening positionS?</p>
                        </button>
                    </div>

                    <Transition
                        show={isOpen3}
                        enter="transition ease-out duration-700 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="w-full md:w-2/3 m-auto border border-gray-300 rounded-2xl p-4" id="mobile-menu">
                                <p className="text-[20px]  text-gray-500">Not at the moment.</p>
                                <p className="text-[20px]  text-gray-500">Though, if your credentials are overwhelming, and you believe we can't say </p>
                                <p className="text-[20px]  text-gray-500">no - shoot us an email!</p>
                            </div>
                        )}
                    </Transition>
                {/* FAQ Part */}

                {/* FAQ part */}
                <div className="w-full md:w-2/3  m-auto mt-10 md:mt-20 p-5 rounded-md hover:scale-105 duration-700 ease-in-out ">
                        <button onClick={() => { toggleCollapse(); setIsOpen4(!isOpen4); }} className="flex justify-between items-center w-full" >
                            <p className="text-[#0F1A2F] text-[25px] title_font font-semibold">Do you offer discount for non-profits?</p>
                        </button>
                    </div>

                    <Transition
                        show={isOpen4}
                        enter="transition ease-out duration-700 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="w-full md:w-2/3 m-auto border border-gray-300 rounded-2xl p-4" id="mobile-menu">
                                <p className="text-[20px]  text-gray-500">We are still working out the financials and we are actively looking into both non-profit discounting and parity offers.</p>
                            </div>
                        )}
                    </Transition>
                {/* FAQ Part */}
                </div>
        </>
    );
}

export default Contact;
