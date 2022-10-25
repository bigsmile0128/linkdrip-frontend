import React from 'react';
import './Footer.css'

import { Link } from 'react-router-dom';
function Footer() {
    return (
    <footer className="m-auto md:w-2/3  md:p-6 mt-5 md:mt-20">
        <div className="md:flex md:justify-between px-10 md:px-0">
            <div className="mb-6 md:mb-0">
                <Link to={'/'} className="flex items-center gap-2 hover:scale-105 md:hover:scale-110 duration-700 ease-in-out">
                    <img src="../../img/logo.jpg" className="mr-3 h-9 md:h-9" alt="LinkDrip Logo" />
                    <span className="self-center text-[24px] text-[#9B7BF7] font-bold whitespace-nowrap title_font">LinkDrip</span>
                </Link>
                <div className='md:mt-10'>
                    <p className='md:mt-5 text-[18px] font-semibold text-light text-gray-500 title_font'>We want to make your links shorter, </p>
                    <p className='md:mt-2 text-[18px] font-semibold text-light text-gray-500 title_font'>and your life longer (and happier).</p>
                </div>
            </div>
            <div className="grid md:gap-20 md:grid-cols-3 ">
                <div>
                    <p className="mb-6  font-bold text-[20px] text-gray-900 title_font">Company</p>
                    <ul className="text-gray-500 grid grid-cols-2 gap-2 md:gap-y-5 md:gap-x-20 ">
                        <Link to={'/early-access/offer'} className="mb-6 md:mt-5">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Sign in</p>
                        </Link>

                        <Link to={'/early-access/offer'} className="mb-6 md:mt-5">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Pricing</p>
                        </Link>

                        <Link to={'/getInTouch'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Contact</p>
                        </Link>

                        <Link to={'/getAllFeatures'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Features</p>
                        </Link>

                        <Link to={'/resource'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Blog</p>
                        </Link>

                        <Link to={'/term'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] v">Terms</p>
                        </Link>

                        <Link to={'/privacy'} className="mb-6 col-span-2 text-left">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Privacy</p>
                        </Link>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6  text-[20px] font-bold title_font text-gray-900">Product</h2>
                    <ul className="text-gray-500 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-y-5 md:gap-x-20">
                        <Link to={'/analytics'} className="mb-6 md:mt-5">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Advanced analytics</p>
                        </Link>
                        <Link to={'/retarget'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Inbuilt retargeting</p>
                        </Link>
                        <Link to={'/code'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">QR Codes</p>
                        </Link>
                        <Link to={'/callToAction'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Call-To-Action</p>
                        </Link>
                        <Link to={'/testing'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">A/B Testing</p>
                        </Link>
                        <Link to={'/rotation'} className="mb-6">
                            <p className="text-[18px] font-semibold hover:text-[#9B7BF7] title_font">Link rotation</p>
                        </Link>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6  font-bold text-[20px] text-gray-900 title_font">Follow us</h2>
                    <ul className="text-gray-600  grid grid-cols-2  md:grid-cols-1 gap-4 md:gap-y-5 md:gap-x-20">
                        <li className="mb-6 md:mt-5">
                            <Link to="#" className=" title_font flex items-center text-[18px] font-semibold hover:text-[#9B7BF7]"><i className="fa-brands fa-facebook"></i>&nbsp;Facebook
                            </Link>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-[18px] title_font font-semibold hover:text-[#9B7BF7]"><i className="fa-brands fa-twitter"></i>&nbsp;Twitter</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-[18px] title_font font-semibold hover:text-[#9B7BF7]"><i className="fa-brands fa-instagram"></i>&nbsp;Instagram</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-[18px] title_font font-semibold hover:text-[#9B7BF7]"><i className="fa-brands fa-linkedin"></i>&nbsp;Linkedin</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-[18px] title_font font-semibold hover:text-[#9B7BF7]"><i className="fa-brands fa-youtube"></i>&nbsp;Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         {/* footer form section */}
         <div className='grid  md:grid-cols-2 gap-10 px-4 md:mt-20'>
                    <div className='grid grid-cols-1 md:grid-cols-5'>
                        <img src='./img/footer.jpg' className='col-span-1'/>
                        <div  className="text-left col-span-4">
                            <b className='text-gray-500 text-[24px] title_font'>Subscribe to our newsletter</b>
                            <p className='text-gray-500 text-[18px] title_font'>Get updated when we launch in public beta.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
                        <input type={'text'} className=" md:col-span-4 px-3 py-4 rounded border w-full border-gray-200 focus:outline-none focus:ring focus:ring-violet-300"/> 
                        <button className='md:col-span-2 px-3 title_font py-4 text-[20px] bg-[#9B7BF7] hover:scale-105 hover:bg-[rgb(237,100,166)] duration-700 ease-in-out text-white rounded-md w-full'>Subscribe</button> 
                    </div>
            </div>
            {/* footer form section */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
        <div className="m-auto text-center">
            <span className="text-sm text-gray-500 text-[20px] title_font">Copyright 2022 © LinkDrip</span>
        </div>
    </footer>
    )
}

export default Footer;