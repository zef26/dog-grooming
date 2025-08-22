import React from 'react';
import DogImg from '../assets/img/dogs/dog-contact.png';

const Contact = () => {
  return (
  <section className='pt-6 bg-yellow-secondary '>
    <div className='container mx-auto'>
      <div className='flex flex-col justify-around lg:flex-row '>
        <div className='order-1 lg:-order-1 lg:mt-16 '>
          <img className='-mb-[12px] ' src={DogImg} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center '>
          <div className='mb-3 font-semibold text-orange '>Contact</div>
          <div className='text-4xl font-extrabold text-blue'>+ 1 000 10 84 000</div>
          <div className='mb-7 text-blue'>Opening Hours: Mon - Sun: 10am - 6pm</div>
          <button className='btn '>Get an appointment</button>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Contact;
