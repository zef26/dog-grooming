import React from 'react';
import { navigation } from '../data';

const NavMobile = () => {
  return <nav className='h-full '>
     <ul className='flex flex-col items-center justify-center h-full space-y-5'>
      {navigation.map((item, index)=> {
        return <li className='font-medium capitalize text-blue' key={index}>
          <a href={item.href}>{item.name}</a>

        </li>
      })}
     </ul>
  </nav>;
};

export default NavMobile;
