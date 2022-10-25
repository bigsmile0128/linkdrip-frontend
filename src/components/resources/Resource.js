import React from "react";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import "./resource.css";
function Resource() {
    return (
        <>
            <Header />
            <Navbar />
            <div>
                {/* Simple yet text section */}
                <div className="w-full md:w-2/3 p-1 md:p-0 m-auto mt-10 md:mt-20">
                    <p className="text-gray-900 text-[40px] md:text-[56px] font-semibold text-center title_font">
                        The LinkDrip{" "}
                        <label className="text-[#9B7BF7]">Blog</label>
                    </p>
                    <p className="text-gray-500 text-[18px] md:text-[20px] text-center md:mt-4 title_font">
                        Learn everything about building your brand through
                        intentional link
                    </p>
                    <p className="text-gray-500 text-[18px] md:text-[20px] text-center title_font">
                        engagement building.
                    </p>
                </div>

                {/* Big Card Section */}
                <div className="container p-1 md:p-0 md:w-1/2 bg-white rounded-3xl shadow-md border m-auto mt-5 md:mt-10">
                    <img
                        className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out m-auto"
                        src="./img/card-1.png"
                    />
                    <img
                        className="relative border-4 border-white h-[70px] w-[70px] left-[280px] -top-[100px] rounded-full md:w-[80px] md:h-[80px] md:-top-[100px] md:-right-[850px]"
                        src="./img/avatar-1.jpg"
                    />
                    <div className="relative w-3/4  flex gap-10 md:gap-20 items-center left-[60px] -top-[50px] md:left-[350px] md:-top-[60px]">
                        <p className="text-white font-bold px-5 py-3 bg-[#9B7BF7] rounded-xl title_font">
                            Featured
                        </p>
                        <p className="text-gray-600 font-semibold title_font">
                            Oct 18 , 2022
                        </p>
                    </div>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <p className="text-center md:px-20 mb-2 font-bold tracking-tight text-[35px] md:text-[44px] text-gray-800 hover:text-[#9B7BF7] title_font">
                                50+ Powerful Call to Action Phrases to Help
                                Boost Your Conversions
                            </p>
                        </a>
                        <p className="mb-3 md:px-20 text-gray-500  text-center title_font">
                            In this blog post, we will discuss 50 powerful call
                            to action phrases that you can use on your website!
                        </p>
                    </div>
                </div>
                {/* Bottom section */}
                <div className="w-full bg-[#9B7BF7] mt-20 md:mt-40 md:px-80 h-[900px] md:h-[650px]">
                    <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2 md:pt-5">
                        <div className="p-2 pt-20 md:pt-40">
                            <p className="text-white text-[35px] md:text-[44px] font-semibold text-left title_font">
                                Subscribe to receive articles
                            </p>
                            <p className="text-white text-[35px] md:text-[44px] font-semibold text-left title_font">
                                directly in your inbox
                            </p>
                            <p className="text-white text-[18px] md:text-[18px]  text-left title_font md:mt-5">
                                Never miss out on the latest trends and
                                strategies in affiliate
                            </p>
                            <p className="text-white text-[18px] md:text-[18px]  text-left title_font">
                                marketing and link building.
                            </p>
                            <div className=" mt-10 px-5 py-2 w-full bg-white rounded-md ">
                                <input
                                    type={"text"}
                                    className="w-full md:w-2/3 px-2 py-3 focus:outline-none focus:ring focus:ring-gray-100 border border-gray-200"
                                />
                                <button className="mt-2 md:mt-0 rounded-xl bg-[#9B7BF7] text-white title_font md:ml-5 px-10 py-5 w-full md:w-auto hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <img
                                src="./img/big-email.svg"
                                className=""
                                id="dashboard_1"
                            />
                        </div>
                    </div>
                </div>

                {/* Last Articles Sections */}
                <div className="mt-10 md:mt-20 flex justify-between px-10 w-full md:w-2/3 m-auto ">
                    <p className="text-gray-700 text-[44px] title_font font-bold">
                        Last Articles
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-7 py-4 bg-[#9B7BF7] rounded-md  text-white text-[20px] title_font hover:scale-105 duration-500 ease-in-out">
                            All
                        </button>
                        <button className="px-7 py-4 bg-white border  rounded-md text-gray-700 text-[20px] title_font hover:bg-[#9B7BF7] hover:scale-105 duration-500 ease-in-out">
                            Growth
                        </button>
                        <button className="px-7 py-4 bg-white border  rounded-md text-gray-700 text-[20px] title_font hover:bg-[#9B7BF7] hover:scale-105 duration-500 ease-in-out">
                            Marketing
                        </button>
                        <button className="px-7 py-4 bg-white border  rounded-md text-gray-700 text-[20px] title_font hover:bg-[#9B7BF7] hover:scale-105 duration-500 ease-in-out">
                            Tech
                        </button>
                    </div>
                </div>
                <div className="md:w-2/3 m-auto grid grid-cols-1 md:grid-cols-3 p-5 md:p-0 md:mt-10">
                    {/* once card section */}
                    <div className="max-w-sm bg-white rounded-3xl shadow-md border">
                        <img
                            className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out"
                            src="./img/card-1.png"
                        />
                        <img
                            className="relative border-4 border-white  rounded-full w-[80px] h-[80px] -top-[100px] -right-[40px]"
                            src="./img/avatar-1.jpg"
                        />
                        <div className="relative flex items-center left-[30px] -top-[60px]">
                            <p className="text-[#9B7BF7] font-bold px-3 py-3 bg-[rgb(232,240,255)] rounded-xl title_font">
                                Marketing
                            </p>
                            <p className="text-gray-600 font-semibold title_font">
                                Oct 18 , 2022
                            </p>
                        </div>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:text-[#9B7BF7] title_font">
                                    50+ Powerful Call to Action Phrases to Help
                                    Boost Your Conversions
                                </h5>
                            </a>
                            <p className="mb-3  text-gray-500 text-xl font-semibold title_font">
                                In this blog post, we will discuss 50 powerful
                                call to action phrases that you can use on your
                                website!
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center py-2 px-3 title_font text-xl font-medium text-center text-[#9B7BF7] "
                            >
                                Read more
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* once card section */}
                    <div className="max-w-sm bg-white rounded-3xl shadow-md border">
                        <img
                            className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out"
                            src="./img/card-2.jpg"
                        />
                        <img
                            className="relative border-4 border-white  rounded-full w-[80px] h-[80px] -top-[100px] -right-[40px]"
                            src="./img/avatar-1.jpg"
                        />
                        <div className="relative flex items-center left-[30px] -top-[60px]">
                            <p className="text-[#9B7BF7] font-bold px-3 py-3 bg-[rgb(232,240,255)] rounded-xl title_font">
                                Marketing
                            </p>
                            <p className="text-gray-600 font-semibold title_font">
                                Oct 18 , 2022
                            </p>
                        </div>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:text-[#9B7BF7] title_font">
                                    50+ Powerful Call to Action Phrases to Help
                                    Boost Your Conversions
                                </h5>
                            </a>
                            <p className="mb-3  text-gray-500 text-xl font-semibold title_font">
                                In this blog post, we will discuss 50 powerful
                                call to action phrases that you can use on your
                                website!
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center title_font py-2 px-3 text-xl font-medium text-center text-[#9B7BF7] "
                            >
                                Read more
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* once card section */}
                    <div className="max-w-sm bg-white rounded-3xl shadow-md border">
                        <img
                            className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out  "
                            src="./img/card-3.png"
                        />
                        <img
                            className="relative border-4 border-white  rounded-full w-[80px] h-[80px] -top-[100px] -right-[40px]"
                            src="./img/avatar-1.jpg"
                        />
                        <div className="relative flex items-center left-[30px] -top-[60px]">
                            <p className="text-[#9B7BF7] font-bold px-3 py-3 bg-[rgb(232,240,255)] rounded-xl title_font">
                                Marketing
                            </p>
                            <p className="text-gray-600 font-semibold title_font">
                                Oct 18 , 2022
                            </p>
                        </div>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:text-[#9B7BF7] title_font">
                                    50+ Powerful Call to Action Phrases to Help
                                    Boost Your Conversions
                                </h5>
                            </a>
                            <p className="mb-3  text-gray-500 text-xl font-semibold title_font">
                                In this blog post, we will discuss 50 powerful
                                call to action phrases that you can use on your
                                website!
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center title_font py-2 px-3 text-xl font-medium text-center text-[#9B7BF7] "
                            >
                                Read more
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resource;
