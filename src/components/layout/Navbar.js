import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import "./Navbar.css";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

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
            <div>
                <nav className="bg-white  px-5 py-2.5 md:w-2/3 m-auto">
                        <div className=" flex justify-between p-2 ">
                            <div className="container flex justify-between items-center mx-auto">
                                <Link
                                    to={"/"}
                                    className="flex items-center gap-2 hover:scale-105 md:hover:scale-110 duration-700 ease-in-out"
                                >
                                    <img
                                        src="../../img/logo.jpg"
                                        className="mr-3 h-9 md:h-9"
                                        alt="LinkDrip Logo"
                                    />
                                    <span className="self-center text-[24px] text-[#9B7BF7] font-bold whitespace-nowrap title_font">
                                        LinkDrip
                                    </span>
                                </Link>

                                <div
                                    className="max-[1450px]:hidden w-full block md:w-auto"
                                    id="navbar-default"
                                >
                                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-4 sm:space-x-2 md:mt-0 md:text-sm  md:border-0 ">
                                        <li className="flex items-center ">
                                            <Link
                                                to="/"
                                                className="block py-2 pr-1 pl-1 text-[18px] font-normal text-black title_font hover:text-[#9B7BF7]"
                                                aria-current="page"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="relative flex items-center">
                                        <div
                                            onClick={() => {
                                                toggleCollapse();
                                                setIsOpen1(!isOpen1);
                                            }}
                                            className=" flex items-center py-2 pr-1 pl-1 text-[18px] font-normal text-black title_font hover:text-[#9B7BF7] "
                                        >
                                            Features
                                            <svg
                                                className="ml-2 w-4 h-4"
                                                aria-hidden="true"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </div>
                                        <Transition
                                        className="absolute top-20 w-[400px] -left-[120px]"
                                            show={isOpen1}
                                            enter="transition ease-out duration-700 transform"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="transition ease-in duration-75 transform"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            {(ref) => (
                                                 <div
                                                 id="dropdown"
                                                 className={`z-10 bg-white rounded divide-y divide-gray-100 shadow title_font`}
                                             >
                                                 <ul
                                                     className="py-1 text-[18px] text-[#0F1A2F] font-bold "
                                                     aria-labelledby="dropdownDefault"
                                                 >
                                                     <div className="grid grid-cols-2 gap-10">
                                                         <Link
                                                             to={"/analytics"}
                                                             className="flex items-center hover:scale-105 duration-500 ease-in-out"
                                                         >
                                                             <img
                                                                 src="../../img/analytical.png"
                                                                 className="w-[60px] h-[60px]"
                                                             />
                                                             <p className="block py-2 px-4 hover:bg-gray-100 ">
                                                                 Advanced analytics
                                                             </p>
                                                         </Link>
                                                         <Link
                                                             to={"/callToAction"}
                                                             className="flex items-center hover:scale-105 duration-500 ease-in-out"
                                                         >
                                                             <img
                                                                 src="../../img/section-2.png"
                                                                 className="w-[60px] h-[60px]"
                                                             />
                                                             <p
                                                                 className="block py-2 px-4 hover:bg-gray-100 "
                                                             >
                                                                 Call-To-Action
                                                             </p>
                                                         </Link>
                                                         <Link
                                                             to={"/retarget"}
                                                             className="flex items-center hover:scale-105 duration-500 ease-in-out"
                                                         >
                                                             <img
                                                                 src="../../img/analytical-1.png"
                                                                 className="w-[60px] h-[60px]"
                                                             />
                                                             <p
                                                                 className="block py-2 px-4 hover:bg-gray-100 "
                                                             >
                                                                 Inbuilt retargeting
                                                             </p>
                                                         </Link>
                                                         <Link
                                                             to={"/testing"}
                                                             className="flex items-center hover:scale-105 duration-500 ease-in-out"
                                                         >
                                                             <img
                                                                 src="../../img/section-3.png"
                                                                 className="w-[60px] h-[60px]"
                                                             />
                                                             <p
                                                                 className="block py-2 px-4 hover:bg-gray-100 "
                                                             >
                                                                 A/B Testing
                                                             </p>
                                                         </Link>
                                                         <Link
                                                             to={"/code"}
                                                             className="flex items-center hover:scale-105 duration-500 ease-in-out"
                                                         >
                                                             <img
                                                                 src="../../img/callToAction-3.png"
                                                                 className="w-[60px] h-[60px]"
                                                             />
                                                             <p
                                                                 className="block py-2 px-4 hover:bg-gray-100 "
                                                             >
                                                                 QR Codes
                                                             </p>
                                                         </Link>
                                                         <Link
                                                             to={"/rotation"}
                                                             className="flex items-center hover:scale-105 duration-500 ease-in-out"
                                                         >
                                                             <img
                                                                 src="../../img/analytical.png"
                                                                 className="w-[60px] h-[60px]"
                                                             />
                                                             <p
                                                                 className="block py-2 px-4 hover:bg-gray-100 "
                                                             >
                                                                 Link Rotation
                                                             </p>
                                                         </Link>
                                                     </div>
                                                 </ul>
                                             </div>
                                            )}
                                        </Transition>
                                        </li>
                                        
                                        
                                        {/* Dropdown Part */}

                                        {/* Dropdown menu */}
                                        <li className="flex items-center ">
                                            <Link
                                                to={"/getInTouch"}
                                                className="block  pr-1 py-1 font-normal text-[18px] text-black  title_font hover:text-[#9B7BF7]"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="flex items-center ">
                                            <Link
                                                to={"/resource"}
                                                className="block  pr-1 py-1 font-normal text-[18px] text-black title_font hover:text-[#9B7BF7] "
                                            >
                                                Resources
                                            </Link>
                                        </li>
                                        <Link
                                            to={"/early-access/offer"}
                                            className="flex items-center"
                                        >
                                            <button
                                                href="#"
                                                className="block border border-gray-200 px-5 py-4 ml-2  title_font rounded-md font-normal text-[16px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out"
                                            >
                                                Pricing
                                            </button>
                                        </Link>
                                        <Link
                                            to={"/early-access/offer"}
                                            className="flex items-center"
                                        >
                                            <button className="block border border-gray-200 text-white title_font bg-[#9B7BF7]   px-1 md:px-2  md:py-4 rounded-md font-normal text-[16px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">
                                                Get Early Access
                                            </button>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="-mr-2 flex min-[1450px]:hidden">
                                <button
                                    onClick={() => {
                                        toggleCollapse();
                                        setIsOpen(!isOpen);
                                    }}
                                    className="btn-nav"
                                >
                                    <span className="icon-bar top rounded-full"></span>
                                    <span className="icon-bar middle rounded-full"></span>
                                    <span className="icon-bar bottom rounded-full"></span>
                                </button>
                            </div>
                        </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-700 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        className={'z-10'}
                    >
                        {(ref) => (
                            <div
                                className="min-[1450px]:hidden border border-gray-200 rounded"
                                id="mobile-menu"
                            >
                                <div
                                    ref={ref}
                                    className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                                >
                                    <Link
                                        to={"/"}
                                        className="hover:text-[#9B7BF7] title_font text-black block px-3 py-2 rounded-md text-base "
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to={"/analytics"}
                                        className="text-black hover:text-[#9B7BF7] title_font  block px-3 py-2 rounded-md text-base"
                                    >
                                        Advanced analytics
                                    </Link>

                                    <Link
                                        to={"/getInTouch"}
                                        className="text-black hover:text-[#9B7BF7] title_font block px-3 py-2 rounded-md text-base"
                                    >
                                        Contract
                                    </Link>

                                    <Link
                                        to={"/resource"}
                                        href="#"
                                        className="text-black hover:text-[#9B7BF7] title_font  block px-3 py-2 rounded-md text-base"
                                    >
                                        Resources
                                    </Link>
                                    <Link to={"/early-access/offer"}>
                                        <button
                                            href="#"
                                            className="block border w-full title_font border-gray-200  py-4  rounded-md font-normal text-[18px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out"
                                        >
                                            Pricing
                                        </button>
                                    </Link>
                                    <Link to={"/early-access/offer"}>
                                        <button className="block border w-full title_font border-gray-200 text-white bg-[#9B7BF7] mt-5 px-5 py-4 rounded-md font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">
                                            Get Early Access
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
