import React, {useState, useEffect} from 'react';
import Logo from '../assets/img/logo.svg';
import {CgMenuRight} from 'react-icons/cg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Program from './Program';


const Header = () => {
  const [bg, setBg] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

useEffect (()=> {
   window.addEventListener('scroll', ()=> {
        window.scrollY > 50 ? setBg(true) : setBg(false); 
   })
})

  return <header className={`${bg ? 'bg-white py-3 shadow-md' : 'bg-none py-5'} fixed w-full right-0 left-0 z-10 transition-all duration-300`}>
    <div className='container flex items-center justify-between mx-auto'>
      <a href="#">
        <img src={Logo} alt="" />
      </a>

      <div className='items-center hidden lg:flex gap-x-8'>
        <Nav />
      </div>

      <Program />
      <div onClick={()=> setNavMobile(!navMobile)} className='cursor-pointer lg:hidden'>
        <CgMenuRight className='text-3xl text-blue'/>
      </div>
      <div className={`${navMobile ? 'max-h-[260px]' : 'max-h-0'} fixed bg-yellow shadow-lg left-0 w-full top-[78px] h-full overflow-hidden transition-all `}>
        <NavMobile/>
      </div>
    </div>
    </header>
}
 
 
  export default Header;
