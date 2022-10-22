    import React from 'react';
    import './dashboard.css';

    function Dashboard() { 
        return (
            <>
                <div className='md:w-2/3 m-auto '>
                    {/* strange url */}
                    <div className=' mt-10   md:mt-20  border m-auto border-gray-200  flex items-center justify-center px-2  py-3 hover:scale-105 hover:shadow-sm duration-700 ease-in-out w-48 rounded-full gap-3'>
                            <img src='./img/logo.jpg' className='w-10'/>
                            <div><p className='text-[rgb(76,63,218)] text-[16px] font-semibold'>rli.to/JTgML</p></div>
                    </div>
                    {/* Dashboard text section above image */}
                    <div className='text-center mt-2 md:mt-5'>
                        <p className='text-[30px] md:text-[76px] text-[#0F1A2f] font-bold'>The most sophisticated</p>
                        <p className=' text-[30px] md:text-[76px] text-[#9B7BF7] font-bold -mt-3 md:-mt-5'>link engagement tool</p>
                        <p className='text-[16px] md:text-[18px] text-[#6E7191] font-light md:font-bold '>Analytics, A/B testing, ad retargeting and Call-To-Action overlays.</p>
                        <p className='text-[16px] md:text-[18px] text-[#6E7191] font-light md:font-bold '>All from a simple, <b>short link.</b></p>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-10'>
                            <div >
                                <button className='w-[92%] md:w-auto border md:float-right border-gray-200 text-white bg-[#9B7BF7]  px-20 md:px-10 py-4 md:py-6 rounded-md md:-ml-5 font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                            </div>
                            <div>
                                <button href="#" class="w-[92%] md:float-left md:w-auto border border-gray-200 px-12 py-4  mt-2 md:mt-0 md:py-6 md:ml-2 rounded-md font-normal text-[18px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">Pricing</button>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Slide image section */}
                    <div className='md:ml-20 mt-5 md:mt-10 m-auto' id='dashboardImage'>
                        <img src='./img/dashboard-1.jpg ' className='absolute p-2 md:p-0 ' id='dashboard_1'/>
                        <img src='./img/dashboard-1-1.jpg' className='relative p-2 md:p-0 -left-[10px] top-[60px] w-[50%] md:w-auto md:-left-[100px] md:top-[230px]' id="dashboard_1_1"/>
                        <img src='./img/dashboard-1-2.jpg' className='relative p-2 md:p-0 left-[270px] -top-[200px] w-[30%] md:w-auto md:left-[850px] md:-top-[300px]' id='dashboard_1_2'/>
                        <img src='./img/dashboard-1-3.jpg' className='relative p-2 md:p-0 bottom-[150px] left-[190px] w-[50%] md:w-auto md:left-[650px] md:bottom-[280px]' id='dashboard_1_3'/>
                    </div>  
                </div>

                {/* Below Text section */}
                <div className='w-full md:w-2/3 m-auto'>
                    <p className='text-center text-[25px] md:text-[30px] text-wide text-gray-900 font-bold'>Seamless <label className='text-[#9B7BF7]'>integrations</label> with</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-5 place-items-center gap-3 md:w-2/3 m-auto'>
                        <img src='./img/google.svg'/>
                        <img src='./img/facebook.svg'/>
                        <img src='./img/youtube.svg'/>
                        <img src='./img/pinterest.svg'/>
                        <img src='./img/twitter.png' className='w-3/4 md:w-1/2'/>
                        <img src='./img/linkedin.svg'/>
                        <img src='./img/tiktok.svg'/>
                        <img src='./img/quora.png' className='w-3/4 md:w-1/2'/>
                    </div>
                    <div className='mt-5 text-center'>
                        <p className='text-gray-900 text-[22px] font-semibold'>...and many more.</p>
                    </div>
                </div>

                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-40'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center'>Simple , yet</p>
                    <p className='text-[#9B7BF7] text-[45px] md:text-[58px]  font-semibold text-center'>Powerful features</p>
                </div>

                {/* Chart section */}
                <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 m-auto md:w-2/3 '>
                    <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                        <div>
                        <img src='./img/analytical.png'/>
                        <p className='mt-2 text-[36px] text-gray-900 font-semibold'>Advanced analytics</p>
                        <p className='mt-1 text-[20px] text-gray-500 font-semibold'>Observe and analyse your links performance in real-time From referrer , device , to the local city of the visitor.</p>
                        <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </p>    
                        </div>
                        <img src='./img/chart.png' className=""/>
                    </div>
                    <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                        <img src='./img/analytical-1.png'/>
                        <p className='mt-2 text-[36px] text-gray-900 font-semibold'>Inbuilt retargeting</p>
                        <p className='mt-1 text-[20px] text-gray-500 font-semibold'>Retarget your visitors with ads on Facebook , Linkedin , YouTube , Google and many more.</p>
                        <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </p>
                        <img src='./img/chart.png'/>
                    </div>
                </div>
                {/* Four sections */}
                <div className='container grid grid-cols-1 md:px-20 md:grid-cols-4 mt-5 gap-2 m-auto md:2/3'>
                        <div className='p-6 '>
                            <img src='./img/section-1.png' className='hover:scale-105 duration-300 ease-in-out'/>
                            <p className='mt-2 font-semibold text-[25px] text-gray-800 hover:text-[#9B7BF7]'>QR Codes</p>
                            <p className='mt-5 font-semibold text-[22px] text-gray-600'>Target your offline audience with branded QR Codes.</p>
                        </div>

                        <div className='p-6 '>
                            <img src='./img/section-2.png' className='hover:scale-105 duration-300 ease-in-out'/>
                            <p className='mt-2 font-semibold text-[25px] text-gray-800 hover:text-[#9B7BF7]'>Call-To-Action</p>
                            <p className='mt-5 font-semibold text-[22px] text-gray-600'>Create custom overlays on top of your site, and keep the Call-To-Action a click away.</p>
                        </div>

                        <div className='p-6 '>
                            <img src='./img/section-3.png' className='hover:scale-105 duration-300 ease-in-out'/>
                            <p className='mt-2 font-semibold text-[25px] text-gray-800 hover:text-[#9B7BF7]' >A / B Testing</p>
                            <p className='mt-5 font-semibold text-[22px] text-gray-600'>Setup A/B testing of your links. Measure which destinations converts the best.</p>
                        </div>

                        <div className='p-6 '>
                            <img src='./img/section-4.png' className='hover:scale-105 duration-300 ease-in-out'/>
                            <p className='mt-2 font-semibold text-[25px] text-gray-800 hover:text-[#9B7BF7]'>Link Rotation</p>
                            <p className='mt-5 font-semibold text-[22px] text-gray-600'>Automatically rotate your target destination.</p>
                        </div>
                </div>
                {/* button group section */}
                <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-10 text-center'>
                    <div >
                        <button className='w-[92%] md:w-auto border md:float-right border-gray-200 text-white bg-[#9B7BF7]  px-20 md:px-14 py-4 md:py-6 rounded-md md:-ml-5 font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                    </div>
                    <div>
                        <button href="#" class="w-[92%] md:float-left md:w-auto border border-gray-200 px-20 md:px-14 py-4  mt-2 md:mt-0 md:py-6 md:ml-2 rounded-md font-normal text-[18px] text-black hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out">Get All features</button>
                    </div>
                </div>
                {/* calling action section */}
                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-[450px]'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center'><label className='text-[#9B7BF7]'>Call-To-Actions</label> overlay</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4'>LinkDrip allows you to add your own overlays to the destination site.</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center '>Pick between buttons, forms and greetings as <label className='text-18px md:text-[20px]'>Call-To-Actions in your brand.</label></p>
                </div>
                {/* number section */}
                <div className='w-full md:w-2/3 grid grid-col-1 md:grid-cols-2 m-auto  p-2'>
                    <div className='text-center m-auto'>
                        <div className='flex items-center md:mt-10 gap-2 hover:scale-105 duration-500 ease-in-out border rounded-lg py-10 px-4'>
                            <div className='w-10 h-10 md:w-12 md:h-12  bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1'>1.</div>
                            <p className='text-gray-700 font-semibold  text-[26px] '>Create your own Call-To-Action</p>
                        </div>
                        <div className='flex items-center md:mt-10 gap-2 hover:scale-105 duration-500 ease-in-out border rounded-lg py-10 px-4'>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1'>2.</div>
                            <p className='text-gray-700 font-semibold  text-[26px] '>Add it to your destination site</p>
                        </div>
                        <div className='flex items-center md:mt-10 gap-2 hover:scale-105 duration-500 ease-in-out border rounded-lg py-10 px-4'>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-[#9B7BF7] rounded-full text-white font-semibold  text-[24px] md:pt-1'>3.</div>
                            <p className='text-gray-700 font-semibold  text-[26px] '>Share & Start tracking results</p>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <img src='./img/callAction.png'/>
                    </div>
                </div>
                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-40'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center'>Customize your links</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4'>Besides shortening your link, you have the ability to fully</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center'>customize the link's metadata.</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4'>Make sure the image, title, and description fits perfectly.</p>
                </div>
                {/* Metadata Section */}
                <div className='w-full md:w-2/3 grid grid-col-1 md:grid-cols-2 m-auto md:mt-20 p-2'>
                    <div className='m-auto'>
                        <img src='./img/metadata.png'/>
                    </div>
                    <div className='text-center m-auto'>
                        <div className='md:mt-10   rounded-lg px-4'>
                            <p className='text-[28px] md:text-[35px] text-gray-700 text-left font-semibold'>Make sure your link looks</p>
                            <p className='text-[28px] md:text-[35px] md:-mt-4 text-gray-700 text-left font-semibold'>great on social media</p>
                            <p className='text-[15px] md:text-[18px]  text-gray-500 text-left font-semibold'>Change how your link will appear on social media and</p>
                            <p className='text-[15px] md:text-[18px]  text-gray-500 text-left font-semibold'> in article embeds in a few simple steps.</p>
                        </div>
                        <div className='flex items-center md:mt-2 gap-3   rounded-lg py-10 px-4'>
                            <img src='./img/metadata-1.png'/>
                            <div>
                                <p className='text-gray-700 font-semibold  text-[26px] text-left'>Custom OG Image</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>Add a custom OG image to your link.</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>It won't conflict with the destination link.</p>
                            </div>
                        </div>
                        <div className='flex items-center md:mt- gap-3   rounded-lg py-10 px-4'>
                            <img src='./img/metadata-2.png'/>
                            <div>
                                <p className='text-gray-700 font-semibold  text-[26px] text-left'>Custom title & description</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>Add a custom title and discription.</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>It won't conflict with the destination link.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metadata Section */}
                <div className='w-full md:w-2/3 grid grid-col-1 md:grid-cols-2 m-auto md:mt-20 p-2'>
                    <div className='text-center m-auto'>
                        <div className='md:mt-10   rounded-lg px-4'>
                            <p className='text-[28px] md:text-[35px] text-gray-700 text-left font-semibold'>Build UTM tags directly</p>
                            <p className='text-[28px] md:text-[35px] md:-mt-4 text-gray-800 text-left font-semibold'>into the link</p>
                            <p className='text-[15px] md:text-[18px]  text-gray-500 text-left font-semibold'>Make it easy to keep analytics organized for the</p>
                            <p className='text-[15px] md:text-[18px]  text-gray-500 text-left font-semibold'>destination link, by including UTM tags in it.</p>
                        </div>
                        <div className='flex items-center md:mt-2 gap-3   rounded-lg py-10 px-4'>
                            <img src='./img/metadata-3.png'/>
                            <div>
                                <p className='text-gray-700 font-semibold  text-[26px] text-left'>Easy interface to manage tags</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>Don't worry about the right URL syntax.</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>LinkDrip features a convenient UI.</p>
                            </div>
                        </div>
                        <div className='flex items-center md:mt- gap-3   rounded-lg py-10 px-4'>
                            <img src='./img/metadata-4.png'/>
                            <div>
                                <p className='text-gray-700 font-semibold  text-[26px] text-left'>UTM Templates</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>Save and reuse your UTM templates</p>
                                <p className='text-gray-500 font-semibold  text-[18px] text-left'>across campaigns. This is a big time saver.</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <img src='./img/metadata-5.png'/>
                    </div>
                </div>
                
                <div className='grid place-items-center'>
                    <button className='w-[92%] md:w-auto border border-gray-200 text-white bg-[#9B7BF7]  px-20 md:px-14 py-4 md:py-6 rounded-md  font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                </div>

                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-40'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center'>Advanced <label className='text-[#9B7BF7]'>use cases</label></p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4'>LinkDrip supports a set of advanced use cases, such as adding your custom domain, injecting custom</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center'>JavaScript into your link, and using the LinkDrip Pixel.</p>
                </div>

                {/* domain sections */}
                <div className='w-full md:w-2/3 m-auto grid grid-cols-1 place-items-center md:grid-cols-3 px-20 mt-10 md:mt-10'>
                    <div className='flex items-center gap-2 hover:scale-105 duration-700 ease-in-out  md:mt-0'>
                        <img src='./img/domain-1.png' />
                        <div>
                            <p className='text-gray-700  text-[18px] md:text-[20px] font-semibold'>Custom domain</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 hover:scale-105 duration-700 ease-in-out mt-5 md:mt-0'>
                        <img src='./img/domain-2.png' />
                        <div>
                            <p className='text-gray-700  text-[18px] md:text-[20px] font-semibold'>Custom scripts</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 hover:scale-105 duration-700 ease-in-out mt-5 md:mt-0'>
                        <img src='./img/domain-3.png' />
                        <div>
                            <p className='text-gray-700  text-[18px] md:text-[20px] font-semibold'>LinkDrip Pixel</p>
                        </div>
                    </div>
                </div>

                {/* section */}
                {/* Metadata Section */}
                <div className='w-full md:w-2/3 grid grid-col-1 md:px-20 md:grid-cols-2 m-auto md:mt-40 p-2'>
                    <div className='text-center md:pl-20'>
                        <div className='rounded-lg px-4'>
                            <img src='./img/domain-1.png'/>
                            <p className='text-[28px] md:text-[35px] text-gray-700 text-left font-semibold'>Build UTM tags directly</p>
                            <p className='text-[28px] md:text-[35px] md:-mt-4 text-gray-700 text-left font-semibold'>into the link</p>
                            <p className='text-[15px] md:text-[18px]  text-gray-500 text-left font-semibold'>Make it easy to keep analytics organized for the</p>
                            <p className='text-[15px] md:text-[18px]  text-gray-500 text-left font-semibold'>destination link, by including UTM tags in it.</p>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <img src='./img/dashboard-1-4.jpg' className='absolute w-[80%] md:w-auto'/>
                        <img src='./img/dashboard-1-2.jpg' className='relative w-[80%] md:w-auto -left-[50px] top-[200px] md:-left-[100px] md:top-[240px]' />
                    </div>
                </div>
                
                <div className='grid place-items-center mt-[350px]'>
                    <button className='w-[92%] md:w-auto border border-gray-200 text-white bg-[#9B7BF7]  px-20 md:px-14 py-4 md:py-6 rounded-md  font-normal text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                </div>

                {/* background sections */}
                <div className='bg-[#9B7BF7] w-full h-[850px] md:h-[1250px]'>
                    {/* Simple yet text section */ }
                    <div className='w-full md:w-2/3 m-auto mt-20 md:mt-40 md:pt-40'>
                        <p className='text-white text-[45px] md:text-[58px] font-semibold text-center'>Start sharing your links in a</p>
                        <p className='text-white text-[45px] md:text-[58px] font-semibold text-center'>new, more intentional, way</p>
                        <p className='text-white text-[18px] md:text-[20px]  font-semibold text-center md:mt-4'>LinkDrip supports a set of advanced use cases, such as adding your custom domain, injecting custom</p>
                        <p className='text-white text-[18px] md:text-[20px]  font-semibold text-center'>JavaScript into your link, and using the LinkDrip Pixel.</p>
                    </div>
                    <div className='grid place-items-center mt-40'>
                        <button className='w-[92%] md:w-auto border border-gray-200 font-bold text-[#9B7BF7] bg-white  px-20 md:px-14 py-4 md:py-6 rounded-md text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                    </div>

                    {/* Dashboard Slide image section */}
                    <div className='md:w-2/3 m-auto'>
                        <div className='md:ml-20 mt-5 md:mt-10 ' id='dashboardImage'>
                            <img src='./img/dashboard-1.jpg ' className='absolute p-2 md:p-0 ' id='dashboard_1'/>
                            <img src='./img/dashboard-1-1.jpg' className='relative p-2 md:p-0 -left-[10px] top-[60px] w-[50%] md:w-auto md:-left-[100px] md:top-[230px]' id="dashboard_1_1"/>
                            <img src='./img/dashboard-1-2.jpg' className='relative p-2 md:p-0 left-[270px] -top-[200px] w-[30%] md:w-auto md:left-[850px] md:-top-[300px]' id='dashboard_1_2'/>
                        </div>
                    </div>  
                </div>

                {/* Simple yet text section */}
                <div className='w-full md:w-2/3 m-auto mt-20 md:mt-40'>
                    <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center'>The LinkDrip <label className='text-[#9B7BF7]'>Blog</label></p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center md:mt-4'>Learn everything about building your brand through intentional link engagement</p>
                    <p className='text-gray-500 text-[18px] md:text-[20px]  font-semibold text-center'>building.</p>
                </div>

                <div className='md:w-2/3 m-auto grid grid-cols-1 md:grid-cols-3 p-5 md:p-0 md:mt-10'>
                    {/* once card section */}
                    <div class="max-w-sm bg-white rounded-3xl shadow-md border">
                            <img className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out" src="./img/card-1.png"   />
                            <img className='relative border-4 border-white  rounded-full w-[80px] h-[80px] -top-[100px] -right-[40px]' src='./img/avatar-1.jpg' />
                            <div className='relative flex items-center left-[30px] -top-[60px]'>
                                <p className='text-[#9B7BF7] font-bold px-3 py-3 bg-[rgb(232,240,255)] rounded-xl'>Marketing</p>
                                <p className='text-gray-600 font-semibold'>Oct 18 , 2022</p>
                            </div>                        
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:text-[#9B7BF7]">50+ Powerful Call to Action Phrases to Help Boost Your Conversions</h5>
                            </a>
                            <p class="mb-3  text-gray-500 text-xl font-semibold">In this blog post, we will discuss 50 powerful call to action phrases that you can use on your website!</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-xl font-medium text-center text-[#9B7BF7] ">
                                Read more
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* once card section */}
                    <div class="max-w-sm bg-white rounded-3xl shadow-md border">
                            <img className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out" src="./img/card-2.jpg"   />
                            <img className='relative border-4 border-white  rounded-full w-[80px] h-[80px] -top-[100px] -right-[40px]' src='./img/avatar-1.jpg' />
                            <div className='relative flex items-center left-[30px] -top-[60px]'>
                                <p className='text-[#9B7BF7] font-bold px-3 py-3 bg-[rgb(232,240,255)] rounded-xl'>Marketing</p>
                                <p className='text-gray-600 font-semibold'>Oct 18 , 2022</p>
                            </div>                        
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:text-[#9B7BF7]">50+ Powerful Call to Action Phrases to Help Boost Your Conversions</h5>
                            </a>
                            <p class="mb-3  text-gray-500 text-xl font-semibold">In this blog post, we will discuss 50 powerful call to action phrases that you can use on your website!</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-xl font-medium text-center text-[#9B7BF7] ">
                                Read more
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* once card section */}
                    <div class="max-w-sm bg-white rounded-3xl shadow-md border">
                            <img className="rounded-3xl p-3 hover:scale-105 duration-200 ease-in-out  " src="./img/card-3.png"   />
                            <img className='relative border-4 border-white  rounded-full w-[80px] h-[80px] -top-[100px] -right-[40px]' src='./img/avatar-1.jpg' />
                            <div className='relative flex items-center left-[30px] -top-[60px]'>
                                <p className='text-[#9B7BF7] font-bold px-3 py-3 bg-[rgb(232,240,255)] rounded-xl'>Marketing</p>
                                <p className='text-gray-600 font-semibold'>Oct 18 , 2022</p>
                            </div>                        
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:text-[#9B7BF7]">50+ Powerful Call to Action Phrases to Help Boost Your Conversions</h5>
                            </a>
                            <p class="mb-3  text-gray-500 text-xl font-semibold">In this blog post, we will discuss 50 powerful call to action phrases that you can use on your website!</p>
                            <a href="#" class="inline-flex items-center py-2 px-3 text-xl font-medium text-center text-[#9B7BF7] ">
                                Read more
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='grid place-items-center mt-40'>
                    <button className='w-[92%] md:w-auto border border-gray-200  text-gray-60 bg-white  px-20 md:px-14 py-4 md:py-6 rounded-md text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Browse all articles</button>
                </div>

                {/* Bottom section */}
                <div className='w-full bg-[#9B7BF7] mt-20 md:mt-40 md:px-80 h-[600px] md:h-[700px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:pt-40'>
                        <div className='p-2'>
                            <p className='text-white text-[45px] md:text-[58px] font-semibold text-left'>Start sharing your </p>
                            <p className='text-white text-[45px] md:text-[58px] font-semibold text-left'>links In a new way</p>
                            <button className='w-[92%] mt-10 text-center md:mt-5 md:w-auto border md:text-left border-gray-200 font-bold text-[#9B7BF7] bg-white  px-20 md:px-14 py-4 md:py-6 rounded-md text-[18px]  hover:text-white hover:scale-105 hover:bg-[#ED64A6] duration-500 ease-in-out'>Get Early Access</button>
                        </div>
                        <div>
                            <img src='./img/dashboard-1-5.jpg ' className='absolute p-2 md:p-0 ' id='dashboard_1'/>
                            <img src='./img/dashboard-1-6.jpg' className='relative p-2 md:p-0 -left-[10px] top-[60px] w-[50%] md:w-auto md:-left-[100px] md:top-[230px]' id="dashboard_1_1"/>
                        </div>
                    </div>
                </div>
                </>
        )
    }

    export default Dashboard;