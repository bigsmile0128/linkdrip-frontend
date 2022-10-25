import React from "react";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import "./retarget.css";

function Retarget() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-2/3 m-auto mt-10 md:mt-20 p-10">
                <div>
                    <p className="text-[#0F1A2F] text-[58px] title_font font-bold tracking-wide">
                        Inbuilt{" "}
                    </p>
                    <p className="text-[#0F1A2F] text-[58px] md:-mt-5 title_font font-bold tracking-wide">
                        retargeting
                    </p>
                    <p className="text-[18px] text-gray-500 title_font ">
                        Retarget your visitors with ads on Facebook, LinkedIn,
                    </p>
                    <p className="text-[18px] text-gray-500 title_font ">
                        YouTube, Google and many more.
                    </p>

                    {/* button group section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10 ">
                        <div>
                            <button className="w-full md:w-auto border title_font border-gray-200 text-white bg-[#9B7BF7]  px-20 md:px-14 py-4 md:py-6 rounded-md  font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">
                                Get Early Access
                            </button>
                        </div>
                        <div>
                            <button
                                href="#"
                                className="w-full md:float-left md:w-auto title_font border border-gray-200 px-20 md:px-8 py-4  mt-2 md:mt-0 md:py-6 md:ml-2 rounded-md font-normal text-[18px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out"
                            >
                                How it works
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <img src="../../img/retarget-1.png"/>
                </div>
            </div>
            {/* Text area */}
            <div className="w-full md:w-2/3 m-auto mt-40 md:mt-80 p-5">
                <p className="text-gray-900 text-[45px] md:text-[58px] font-semibold text-center title_font">
                    How it works
                </p>
                <p className="text-gray-500 text-[18px] md:text-[20px]  text-center md:mt-4 title_font">
                    Supercharge your ads! With LinkDrip's inbuilt retargeting,
                    it has never been easier to
                </p>
                <p className="text-gray-500 text-[18px] md:text-[20px]  text-center title_font">
                    run targeted ad campaigns for prospects who have shown
                    interest.
                </p>
            </div>

            {/* Understand your visitors section */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-2/3 m-auto mt-10 md:mt-10 p-5">
                <div className="md:pt-40">
                    <p className="text-[#0F1A2F] text-[36px] title_font font-semibold">
                        Target the right prospects
                    </p>
                    <p className="text-gray-500 text-[18px] title_font md:mt-2">
                        Build supertargeted audiences down to the specific link.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 md:mt-20">
                        <div>
                            <img src="../../img/retarget-2.png" />
                            <p className="text-[#0F1A2F] text-[22px] title_font font-semibold md:mt-5">
                                Pixel & tags
                            </p>
                            <p className="text-gray-500 text-[18px] title_font md:mt-2">
                                Add your pixel or tag ID - and we will take care
                                of tracking your visitors.
                            </p>
                        </div>

                        <div>
                            <img src="../../img/retarget-3.png" />
                            <p className="text-[#0F1A2F] text-[22px] title_font font-semibold md:mt-5">
                                UTM builder
                            </p>
                            <p className="text-gray-500 text-[18px] title_font md:mt-2">
                                Build UTM tags into your links easily using our
                                link builder tool.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../../img/retarget-4.png" />
                </div>
            </div>

            {/* Location Sections */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:w-2/3 m-auto mt-10 md:mt-10 p-5">
                <div className="md:pt-40">
                    <p className="text-[#0F1A2F] text-[36px] title_font font-semibold">
                        Custom events
                    </p>
                    <p className="text-gray-500 text-[18px] title_font md:mt-2">
                        Extend your pixel/tag functionality with custom
                        conversion events.
                    </p>
                    <div>
                        <img src="../../img/retarget-5.png" />
                    </div>
                </div>

                <div className="md:pt-40">
                    <p className="text-[#0F1A2F] text-[36px] title_font font-semibold">
                        Your favorite ad platforms
                    </p>
                    <p className="text-gray-500 text-[18px] title_font md:mt-2">
                        Use your pixel/tag from all major ad platforms - with a
                        single click of a button.
                    </p>
                    <div>
                        <img src="../../img/retarget-6.png" />
                    </div>
                </div>
            </div>

            {/* background sections */}
            <div className="bg-[#9B7BF7] w-full h-[850px] md:h-[1300px]">
                {/* Simple yet text section */}
                <div className="w-full md:w-2/3 m-auto mt-20 md:mt-40 md:pt-40 title_font">
                    <p className="text-white text-[45px] md:text-[58px] font-semibold text-center title_font">
                        Start sharing your links in a
                    </p>
                    <p className="text-white text-[45px] md:text-[58px] font-semibold text-center title_font">
                        new, more intentional, way
                    </p>
                    <p className="text-white text-[18px] md:text-[20px]  font-semibold text-center md:mt-4 title_font">
                        LinkDrip supports a set of advanced use cases, such as
                        adding your custom domain, injecting custom
                    </p>
                    <p className="text-white text-[18px] md:text-[20px]  font-semibold text-center title_font">
                        JavaScript into your link, and using the LinkDrip Pixel.
                    </p>
                </div>
                <div className="grid place-items-center mt-40">
                    <button className="w-[92%] md:w-auto border border-gray-200 title_font font-bold text-[#9B7BF7] bg-white  px-20 md:px-14 py-4 md:py-6 rounded-md text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">
                        Get Early Access
                    </button>
                </div>

                {/* Dashboard Slide image section */}
                <div className="md:w-2/3 m-auto">
                    <div
                        className="md:ml-20 mt-5 md:mt-10 "
                        id="dashboardImage"
                    >
                        <img
                            src="./img/dashboard-1.jpg "
                            className="absolute p-2 md:p-0 "
                            id="dashboard_1"
                        />
                        <img
                            src="./img/dashboard-1-1.jpg"
                            className="relative p-2 md:p-0 -left-[10px] top-[60px] w-[50%] md:w-auto md:-left-[100px] md:top-[230px]"
                            id="dashboard_1_1"
                        />
                        <img
                            src="./img/dashboard-1-2.jpg"
                            className="relative p-2 md:p-0 left-[270px] -top-[200px] w-[30%] md:w-auto md:left-[850px] md:-top-[300px]"
                            id="dashboard_1_2"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Retarget;
