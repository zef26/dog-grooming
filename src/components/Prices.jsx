import React, { useEffect, useState } from 'react';
import { bundleData } from '../data';
import Bundles from './Bundles';

const Prices = () => {

  const [index, setIndex] = useState(0);
  const [bundles, setBundles] = useState([]);

  useEffect(()=> {
    setBundles(bundleData[0].services)

  },[]);

  const getBandle = (name) => {
    const newBundle = bundleData.find((bundle)=> {
      return bundle.name === name
    });
    setBundles(newBundle.services);
  }
  return (
  <section className='py-12 lg:py-24 '>
      <div className='container mx-auto'>
        <div className='mb-20 text-center'>
          <div className='mb-3 font-semibold text-orange'>Our Prices</div>
          <h2 className='mb-3 h2'>How Big Your Dog Is?</h2>
          <p className='text-lg text-blue'>Choose your dog category</p>
        </div>
        <div className='grid grid-cols-4 gap-4 lg:gap-[30px]'>
          {bundleData.map((item, idx)=> {
            const {name, image, dogCategory} = item;
            return (
              <div
               onClick={() => {
                  setIndex(idx);
                  getBandle(name);
               } } 
               className='text-center cursor-pointer'
               key={idx}>
                <div className='mb-2 transition-all duration-300 lg:mb-8 hover:scale-105'>
                  <img className='w-full ' src={image.type} alt="" />
                </div>
                <h3 className='font-semibold capitalize lg:text-2xl text-blue lg:mb-2 '>{name}</h3>
                <div className={`relative ${index === idx ? 'border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 ' : 'border-b-4 border-transparent '}pb-4 mb-12`}>
                  <div className='hidden capitalize lg:block '>{dogCategory}</div>
                </div>
              </div>
            )
          })}
        </div>

        <Bundles bundles={bundles}/>
      </div>
    </section>
  )
};

export default Prices;
