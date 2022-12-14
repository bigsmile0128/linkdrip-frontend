import React from 'react';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

function Feature(){
    return(
        <>
        {/* Chart section */}
        <Header />
        <Navbar />
        {/* Simple yet text section */}
        <div className='w-full md:w-2/3 m-auto mt-20 md:mt-40'>
            <p className='text-gray-900 text-[45px] md:text-[58px] font-semibold text-center title_font'>Features</p>
            <p className='text-[#0F1A2F] text-[18px] md:text-[22px] text-center title_font'>LinkDrip has a lot of features, ranging from basic to advanced.</p>
        </div>
                
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 m-auto md:w-2/3 '>
            <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                <div>
                <img src='./img/analytical.png'/>
                <p className='mt-2 text-[36px] text-gray-900 font-semibold title_font'>Advanced analytics</p>
                <p className='mt-1 text-[20px] text-gray-500 font-semibold title_font'>Observe and analyse your links performance in real-time From referrer , device , to the local city of the visitor.</p>
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
                <p className='mt-2 text-[36px] text-gray-900 font-semibold title_font'>Inbuilt retargeting</p>
                <p className='mt-1 text-[20px] text-gray-500 font-semibold title_font'>Retarget your visitors with ads on Facebook , Linkedin , YouTube , Google and many more.</p>
                <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </p>
                <img src='./img/retarget-1.png'/>
            </div>

            <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                <div>
                <img src='./img/code-2.png'/>
                <p className='mt-2 text-[36px] text-gray-900 font-semibold title_font'>QR Codes</p>
                <p className='mt-1 text-[20px] text-gray-500 font-semibold title_font'>Target your offline audience with branded QR Codes. Don't print in vain - you can always change the destination.</p>
                <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </p>    
                </div>
                <img src='./img/code-1.png' className=""/>
            </div>
            <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                <img src='./img/section-2.png'/>
                <p className='mt-2 text-[36px] text-gray-900 font-semibold title_font'>Call-To-Action</p>
                <p className='mt-1 text-[20px] text-gray-500 font-semibold title_font'>Add a custom Call-To-Action overlay on your destination site. Customize branding, logo, colors, call-to-action and much more.</p>
                <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </p>
                <img src='./img/feature-1.png'/>
            </div>

            <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                <div>
                <img src='./img/section-3.png'/>
                <p className='mt-2 text-[36px] text-gray-900 font-semibold title_font'>A/B testing</p>
                <p className='mt-1 text-[20px] text-gray-500 font-semibold title_font'>Setup A/B testing of your links. Measure which destinations converts the best.</p>
                <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </p>    
                </div>
                <img src='./img/feature-2.png' className=""/>
            </div>
            <div className='p-8 hover:scale-105 duration-300 ease-in-out'>
                <img src='./img/rotation-2.png'/>
                <p className='mt-2 text-[36px] text-gray-900 font-semibold title_font'>Link rotation</p>
                <p className='mt-1 text-[20px] text-gray-500 font-semibold title_font'>Automatically rotate your target destination on a schedule or given performance conditions.</p>
                <p className='flex items-center  mt-5 text-[20px] text-[#9B7BF7] font-bold'>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </p>
                <img src='./img/feature-3.png'/>
            </div>
        </div>
    </>
    )
}

export default Feature;