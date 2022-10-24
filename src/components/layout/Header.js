import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='text-white bg-[rgb(237,100,166)] '>
            <p className='text-white m-auto text-[16px] md:text-[18px] text-center pt-8 pb-4 md:py-6 md:inline-flex md:items-center md:ml-[35%] title_font'><p>👋 &nbsp;</p><Link href='#' className='underline'><Link to={'/early-access/offer'}>Get Early Access now!</Link></Link> <p> &nbsp;Lifetime Deal - Single one-time payment.</p></p>
        </div>
    )
}

export default Header;