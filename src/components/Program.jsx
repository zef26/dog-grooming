import React from 'react';
import PhoneIcon from '../assets/img/phone.svg';


const Program = () => {
  return <div>
    <div className='flex items-baseline justify-end lg:gap-x-[10px] '>
      <img className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]' src={PhoneIcon} alt="" />
      <div className='lg:text-[23px] text-blue font-extrabold'>+ 1 000 10 84 000</div>
    </div>
    <div className='text-sm'>
      <div className='hidden lg:flex'>Opening Hours: Mon - Sun: 10am - 6pm</div>
    </div>
    <div>
      <div className='text-right lg:hidden'>Mon - Sun: 10am - 6pm</div>
    </div>
  </div>;
  
};

export default Program;
