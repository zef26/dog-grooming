
import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'

const Bundles = ({bundles}) => {
  return (
    <div className='flex flex-col justify-between md:flex-row gap-[30px] '>
      {bundles.map((bundle,index)=> {
         const {name, price, list } = bundle ;
        return(
          <div className='w-full text-center bg-white shadow-primary lg:max-w-1/3 h-[560px] rounded-[60px] py-12 px-8 ' key={index}>
            
              <div className='mb-4 text-5xl font-bold text-blue'>$ {price}</div>
              <div className='mb-12 font-medium capitalize text-blue'>{name}</div>
              <div className='flex flex-col gap-y-4 max-w-[230px] mx-auto '>
                {list.map((item, index)=> {
                  return (
                   <div className='flex items-center gap-x-3 ' key={index}>
                    <BsCheckCircleFill className='text-xl text-orange '/>
                    <div className='capitalize'>{item}</div>
                  </div>
                  )
                })}
              </div>

          </div>
        )
      })}

    </div>
  )
};

export default Bundles;
