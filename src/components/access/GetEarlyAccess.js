import React from 'react';
import './GetEarlyAccess.css'
import Navbar from '../layout/Navbar';

function GetEarlyAccess(){
    return(
        <>
        {/* Navbar section */}
        <Navbar />
        {/* Body Section */}
        <div>
            {/* Simple yet text section */}
            <div className='w-full md:w-2/3 m-auto mt-10 md:mt-20'>
                    <p className=' text-[45px] md:text-[76px] text-[#9B7BF7] font-bold text-center  title_font'>LinkDrip</p>
                    <p className='text-[45px] text-[#0F1A2F] md:text-[76px]  font-bold text-center md:-mt-5 title_font'>‍Early Access Deal</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center title_font'>Get your hands on LinkDrip early by purchasing one of our Early Access Deals.</p>
            </div>
            {/* Five star div section */}
            <div className='md:mt-10 md:m-auto md:w-[850px] rounded-[30px] border m-2 p-4 md:p-6 border-[#FFCDD0] bg-[#FFE4E5]'>
                <div className='flex items-center gap-10 md:gap-5'>
                    <img src='../../img/star.png'/>
                    <div className=''>
                        <p className='text-[#F172A6] text-[20px] title_font'>Get early access on a lifetime deal <b>- single one-time payment. </b>
                                This is a time-limited offer! Grab it while you can 🎯</p>
                    </div>
                </div>
            </div>
            {/* Two Div section part */}

            <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 m-auto md:w-[850px] '>
                    <div className='p-10 m-5 md:m-auto hover:scale-105 duration-300 ease-in-out border border-gray-200 rounded-3xl'>
                        <div>
                            <p className='mt-2 text-[28px] text-gray-800 hover:text-[#9B7BF7] font-semibold title_font'>Early Access Deal</p>
                            <p className='mt-1 text-[20px] text-gray-500  title_font'>Lifetime access to LinkDrips basic features & usage.</p>
                        <div className='mt-5'>
                            <div className='flex items-center gap-5'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>All analytic features</p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Unlimited redirects</p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Track up to 50K visits/month </p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>2 retargeting pixels</p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>25 QR Codes</p>
                            </div>
                            {/* Responsive part */}
                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>25 Call-To-Actions </p>
                            </div>

                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>A/B Testing </p>
                            </div>

                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Link rotation </p>
                            </div>

                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/minus.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Linkdrip Pixel </p>
                            </div>

                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/minus.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Custom domains </p>
                            </div>

                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/minus.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Workspaces </p>
                            </div>

                            <div className='md:hidden flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/minus.png' />
                                <p className='text-[#3F4859] text-[18px] title_font font-semibold'>Team members </p>
                            </div>
                        </div>  

                            <div className='mt-10 flex items-center gap-2'>
                                <p className='font-bold title_font text-[44px] text-gray-800'>$75</p>
                                <p className='text-gray-500 text-[20px] mb-2 font-semibold'>one time !</p>
                            </div>
                            <div className='mt-5'>
                                <button className='w-[92%] md:w-[92%] md:mr-7 m-auto border md:float-right title_font border-gray-200 text-white bg-[#9B7BF7]  px-20 md:px-14 py-4 md:py-6 rounded-md  font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get it now</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='p-10 m-5 md:m-auto bg-[#9B7BF7] hover:scale-105 duration-300 ease-in-out border border-gray-200 rounded-3xl'>
                        <div>
                            <p className='mt-2 text-[28px] text-white font-semibold title_font'>Early Access Deal + Plus</p>
                            <p className='mt-1 text-[20px] text-white title_font'>Lifetime access to LinkDrips Plus Package. Perfect for growth!</p>
                        <div className='mt-5'>
                            <div className='flex items-center gap-5'>
                                <img src='../../img/tick_white.png' />
                                <p className='text-white text-[18px] title_font font-semibold'>All analytic features</p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick_white.png' />
                                <p className='text-white text-[18px] title_font font-semibold'>Unlimited redirects</p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick_white.png' />
                                <p className='text-white text-[18px] title_font font-semibold'>Track up to 50K visits/month </p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick_white.png' />
                                <p className='text-white text-[18px] title_font font-semibold'>2 retargeting pixels</p>
                            </div>

                            <div className='flex items-center gap-5 mt-1 md:mt-4'>
                                <img src='../../img/tick_white.png' />
                                <p className='text-white text-[18px] title_font font-semibold'>Custom domains </p>
                            </div>
                        </div>  

                            <div className='mt-10 flex items-center gap-2'>
                                <p className='font-bold title_font text-[44px] text-white'>$150</p>
                                <p className='text-white text-[20px] mb-2 title_font font-semibold'>one time !</p>
                            </div>
                            <div className='mt-5'>
                                <button className='w-[92%] md:w-[92%] title_font md:mr-7 m-auto border font-bold md:float-right title_font border-gray-200 text-[#9B7BF7] bg-white  px-20 md:px-14 py-4 md:py-6 rounded-md  text-[18px] hover:scale-105 duration-500 ease-in-out'>Get it now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple yet text section */}
                <div className='hidden md:block w-full md:w-[850px] m-auto mt-20 md:mt-40'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center title_font'>Compare plans</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]   text-center md:mt-4 title_font'>Pick the plan that fits your needs.</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]   text-center title_font'>You won't be able to change it later, <b>so consider carefully.</b></p>
                </div>
                {/* Table section */}
                <div className='hidden md:block md:w-2/3 m-auto mt-10 md:mt-20'>
                <div className="overflow-x-auto">
                    {/* Table one */}
                    <table className="w-full  text-center title_font">
                        <thead className="text-xs text-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6">

                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <p className='text-[22px] text-gray-500 font-semibold'>Early Access Deal</p>
                                    <p className='text-[45px] text-[#0F1A2F] font-bold mt-6'>$75</p>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <p className='text-[22px] text-[#9B7BF7] font-semibold'>Early Access Deal + Plus</p>
                                    <p className='text-[45px] text-[#0F1A2F] font-bold mt-6'>$150</p>
                                </th>
                            </tr>
                            <tr>
                                <td scope="col" className="text-left">
                                    <p className='text-[#0F1A2F] font-bold text-[22px] pb-10'>Basics</p>
                                </td>
                                <th scope="col" className="py-3 px-6">
                                </th>
                                <th scope="col" className="py-3 px-6">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* First section */}
                            <tr className="bg-white border-b ">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>All analytics features</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6  ">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6  ">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Link redirects</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>Unlimited</p>
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>Unlimited</p>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Track visits/month</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>50,000 </p>
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>Unlimited</p>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>QR codes</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>25</p>
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>Unlimited</p>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Call-To-Actions</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>25</p>
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>Unlimited</p>
                                </td>
                            </tr>
                            {/* Second Section */}
                    
                            <tr className=''>
                                <td scope="col" className="text-left">
                                    <p className='text-[#0F1A2F] font-bold text-[22px] pt-20 pb-7'>Advanced</p>
                                </td>
                                <th scope="col" className="py-3 px-6">
                                </th>
                                <th scope="col" className="py-3 px-6">
                                </th>
                            </tr>
                            <tr className="bg-white border-b ">
                                <td scope="row" className="text-left ">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Retargeting pixelss</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6  ">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>2</p>
                                </td>
                                <td className="py-4 px-6  ">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>Unlimited</p>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>A/B testing</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Link rotation</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>LinkDrip Pixel</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/minus.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/tick.png' className='m-auto'/>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Custom domains</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/minus.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>10</p>
                                </td>
                            </tr>
                            {/* Third table sections */}
                            <tr className=''>
                                <td scope="col" className="text-left">
                                    <p className='text-[#0F1A2F] font-bold text-[22px] pt-20 pb-7'>Collaboration</p>
                                </td>
                                <th scope="col" className="py-3 px-6">
                                </th>
                                <th scope="col" className="py-3 px-6">
                                </th>
                            </tr>
                            <tr className="bg-white border-b ">
                                <td scope="row" className="text-left ">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Workspaces</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6  ">
                                    <img src='../../img/minus.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6  ">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>10</p>
                                </td>
                            </tr>

                            <tr className="bg-white border-b">
                                <td scope="row" className="text-left">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[18px] text-[#6E7191] font-semibold '>Members/workspace</p>
                                        <img src='../../img/square.png'/>
                                    </div> 
                                </td>
                                <td className="py-4 px-6">
                                    <img src='../../img/minus.png' className='m-auto'/>
                                </td>
                                <td className="py-4 px-6">
                                    <p className='text-[18px] text-[#6E7191] font-semibold '>5</p>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-[450px]'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center title_font'>Frequently Asked <label className='text-[#9B7BF7] title_font font-bold'>Questions</label></p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4 title_font'>We get these questions a lot.</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center title_font'>See if you can find the answer you're looking for below.</p>
                </div>

                </div>
        </div>
        </>
    )    
}

export default GetEarlyAccess;