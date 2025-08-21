import React from 'react';
import PhoneIcon from '../assets/img/phone.svg';


const Program = () => {
  return <div>
    <div className='flex items-baseline justify-end lg:gap-x-10 '>
      <img className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]' src={PhoneIcon} alt="" />
      <div className=''>+ 1 000 10 84 000</div>
    
    </div>
  </div>;
};

export default Program;
