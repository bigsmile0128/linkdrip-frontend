import React from 'react';

function Navbar() {
    return (
        <div>
            <div className='text-white bg-[rgb(237,100,166)]'>
                <p className='text-white text-[22px] text-center py-6'>👋 <a href='#' className='underline '>Get Early Access now!</a> Lifetime Deal - Single one-time payment.</p>
            </div>
            {/* Navbar */}
            <nav class="px-2 bg-white border-gray-200 mt-5">
                <div class="container flex flex-wrap justify-between mt-10 px-10 items-center mx-auto">
                    <a href="#" class="flex items-center gap-4">
                        <img src="./img/logo.jpg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
                        <span class="self-center text-3xl font-bold whitespace-nowrap text-[rgb(155,123,247)] tracking-wide">LinkDrip</span>
                    </a>
                    {/* <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 " aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button> */}
                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                        <li>
                        <a href="#" class="block p-4 text-white text-2xl bg-gray-900 rounded md:bg-transparent md:text-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=" p-4 text-white text-2xl bg-gray-900 rounded md:bg-transparent md:text-gray-900 flex items-center">Features <svg class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                            {/* <div id="dropdownNavbar" class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow ">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 ">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 ">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 ">Earnings</a>
                                </li>
                                </ul>
                                <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                                </div>
                            </div> */}
                        </li>
                        <li>
                            <a href="#" class="block p-4  text-white text-2xl bg-gray-900 rounded md:bg-transparent md:text-gray-700 ">Contact</a>
                        </li>
                        <li>
                            <a href="#" class="block p-4  text-white text-2xl bg-gray-900 rounded md:bg-transparent md:text-gray-700 ">Resources</a>
                        </li>
                        <li>
                            <a href="#" class="block p-4  text-white text-2xl bg-gray-900 rounded md:bg-transparent md:text-gray-700 ">Pricing</a>
                        </li>
                        <li>
                            <a href="#" type='button' class=" p-4 rounded-xl text-white text-2xl bg-[rgb(155,123,247)] rounded md:text-white font-mono tracking-tighter "><strong>Get Early Access</strong></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar */}
        </div>
    )
}

export default Navbar;