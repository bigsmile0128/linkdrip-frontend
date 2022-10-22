    import React , {useState} from 'react';
    import {Link} from 'react-router-dom';
    import { Transition } from "@headlessui/react";
    import './Navbar.css';
    function Navbar() {

        const [isOpen, setIsOpen] = useState(false);

        const toggleCollapse = () => {
        const btn_nav = document.getElementsByClassName(
        'btn-nav'
        ) ;

        if (btn_nav[0].className.search('animated') < 0) {
        btn_nav[0].classList.add('animated');
        } else {
        btn_nav[0].classList.remove('animated');
            }
        };

        return (
            <>
                <div className='text-white bg-[rgb(237,100,166)] '>
                    <p className='text-white m-auto text-[16px] md:text-[18px] text-center pt-8 pb-4 md:py-6 md:inline-flex md:items-center md:ml-[35%]'><p>👋 &nbsp;</p><Link href='#' className='underline '><p>Get Early Access now!</p></Link> <p> &nbsp;Lifetime Deal - Single one-time payment.</p></p>
                </div>
            <div>
            <nav className="bg-white  px-5 py-2.5 w-full md:w-2/3 m-auto b ">
            <div className="">
                <div className=" flex justify-between p-2 ">
                <div class="container flex flex-wrap md:px-10 justify-between items-center mx-auto">
                    <Link href="#" class="flex items-center gap-2 hover:scale-105 md:hover:scale-110 duration-700 ease-in-out">
                        <img src="./img/logo.jpg" class="mr-3 h-9 md:h-9" alt="LinkDrip Logo" />
                        <span class="self-center text-[24px] text-[#9B7BF7] font-bold whitespace-nowrap ">LinkDrip</span>
                    </Link>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:border-0 ">
                        <li className='flex items-center'>
                        <a href="#" class="block py-2 pr-1 pl-1 text-[18px] font-normal text-black  hover:text-[#9B7BF7]" aria-current="page">Home</a>
                        </li>
                        {/* Dropdown menu */}
                        
                        <li className='flex items-center'>
                            <a href="#" class="block py-2 pr-1 pl-1 text-[18px] font-normal text-black hover:text-[#9B7BF7]" aria-current="page">Features</a>
                            <svg  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>

                        {/* Dropdown menu */}
                        <li className='flex items-center'>
                        <a href="#" class="block  pr-1 py-1 font-normal text-[18px] text-black hover:text-[#9B7BF7]">Contact</a>
                        </li>
                        <li className='flex items-center'>
                        <a href="#" class="block  pr-1 py-1 font-normal text-[18px] text-black hover:text-[#9B7BF7] ">Resources</a>
                        </li>
                        <li className='flex items-center'>
                            <button href="#" class="block border border-gray-200 px-5 py-4 ml-2 rounded-md font-normal text-[18px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">Pricing</button>
                        </li>
                        <li className='flex items-center'>
                            <button className='block border border-gray-200 text-white bg-[#9B7BF7] px-5 py-4 rounded-md -ml-5 font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button onClick={() => { toggleCollapse(); setIsOpen(!isOpen); }} class="btn-nav">
                        <span class="icon-bar top rounded-full"></span>
                        <span class="icon-bar middle rounded-full"></span>
                        <span class="icon-bar bottom rounded-full"></span>
                    </button>

                </div>
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
            >
                {(ref) => (
                <div className="md:hidden border border-gray-200 rounded" id="mobile-menu">
                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#"
                        className="hover:text-[#9B7BF7]  text-black block px-3 py-2 rounded-md text-base "
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-black hover:text-[#9B7BF7] block px-3 py-2 rounded-md text-ba"
                    >
                        Features
                    </a>

                    <a
                        href="#"
                        className="text-black hover:text-[#9B7BF7] block px-3 py-2 rounded-md text-ba"
                    >
                        Contract
                    </a>

                    <a
                        href="#"
                        className="text-black hover:text-[#9B7BF7]  block px-3 py-2 rounded-md text-ba"
                    >
                        Resources
                    </a>
                    <a>
                        <button href="#" class="block border w-full border-gray-200  py-4  rounded-md font-normal text-[18px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">Pricing</button>
                    </a>
                    <a>
                        <button className='block border w-full border-gray-200 text-white bg-[#9B7BF7] mt-5 px-5 py-4 rounded-md font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                    </a>

                    </div>
                </div>
                )}
            </Transition>
            </nav>
            </div>
            </>
        )
    }

    export default Navbar;