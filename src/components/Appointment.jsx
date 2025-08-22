import React from 'react';
import DogImg from '../assets/img/dogs/dog-appointment.png';

const Appointment = () => {
  return(
    
    <section className='relative min-h-[584px ] py-12 bg-yellow-secondary lg:pb-12 lg:mt-32 '>
      <div className='container mx-auto '>
        <div>
          <div className='hidden w-full max-w-[790px] mx-auto lg:flex justify-center '>
            <img src={DogImg} alt="" />
          </div>
          <form className='w-full px-6 py-8 bg-yellow max-w-[790px] h-[500px] mx-auto lg:mt-5 rounded-[60px] text-center flex flex-col justify-start items-center gap-y-4 '>
            <h2 className='my-4 h2'>Get in appointment</h2>
            <input className='input-control' type="text" placeholder='Full name' />
            <input className='input-control' type="text" placeholder='
            Email addres' />
            <input className='input-control' type="text" placeholder='Phone number' />
            <button className='w-full btn max-w-[514px] '>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
};
 //
 
export default Appointment;
