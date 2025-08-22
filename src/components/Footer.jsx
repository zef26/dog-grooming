import React from 'react';
import Logo from '../assets/img/logo-white.svg';
import { social } from '../data';
const Footer = () => {
  return (
    <footer className='py-8 bg-orange lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between text-white gap-y-6 lg:flex-row '>
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <div className='text-[15px]'>
            &copy; Copyright 2025. All Rights Reserved.
          </div>
          <div className='flex gap-x-4 '>
            {social.map((item, index)=>{
              return <a 
              href={item.href} 
              key={index}>
                <div className='bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 rounded-full flex justify-center items-center transition text-2xl '>{item.icon}</div>
              </a>
            })}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
