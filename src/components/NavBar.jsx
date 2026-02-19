import { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/Images/logo.png';

export default function NavBar() {
  const [navBG, setNavBG] = useState("bg-secondary-strong")
  function toggleNav() {
    const navList = document.getElementById("navbar-sticky")
    const navToggler = document.getElementById("toggle-nav")
    let x = navList.classList.toggle("hidden")
    if (x) { navToggler.innerHTML = `<i class='fa-solid fa-bars'></i>` } else { navToggler.innerHTML = `<i class='fa-solid fa-x'></i>` }
  }
  function changeNavBG() {
    window.scrollY < 100 ? setNavBG("bg-secondary-strong") : setNavBG("bg-secondary-strong/85")
  }

  window.addEventListener("scroll", changeNavBG)

  return (
    <nav onScroll={e => changeNavBG(e)} className={`${navBG} backdrop-blur-xl fixed w-full z-30 top-0 start-0 border border-b-main-strong`}>
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to={"/home"} className="flex items-center group/navbar space-x-3">
          <img src={logo} className="relative size-12 group-hover/navbar:scale-110 group-hover/navbar:rotate-45 transition" alt="adasa Logo" />
          <div className='items-center align-text-bottom'><h1 className="font-tajawal mb-0 text-xl text-white font-semibold ">عدسة</h1>
            <p className="text-main-half text-xs hidden md:block ">عالم التصوير الفوتوغرافي</p>
          </div>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button type="button" className="hidden text-white  hover:text-main-strong me-2 box-border border border-transparent hover:border-gray-600 shadow-xs font-medium leading-5 rounded-xl text-md self-center size-10 md:block transition"><i className="fa-solid fa-search"></i></button>
          <NavLink to={"/blog"}><button type="button" className="cursor-pointer hidden text-white bg-main hover:-translate-y-1 box-border border border-transparent hover:border-gray-600 shadow-xs font-medium leading-5 rounded-full text-lg py-4 px-8 md:block transition-all">إبدأ القراءة </button></NavLink>
          <button onClick={toggleNav} id='toggle-nav' type="button" className="items-center p-2 w-10 h-10 justify-center text-secondary hover:text-gray-400 rounded-base md:hidden rounded-xl border border-transparent hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-neutral-tertiary text-lg"><i className="fa-solid fa-bars"></i></button>
        </div>
        <div className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col max-md:text-start text-center p-4 font-medium border! border-secondary rounded-xl max-md:mt-5 md:rounded-full md:p-1.5  md:space-x-8 md:flex-row md:mt-0 md:border-0   md:gap-0">
            <li className='md:m-0'>
              <NavLink to={"/home"} className="link" aria-current="page">الرئيسية</NavLink>
            </li>
            <li className='md:m-0'>
              <NavLink to={"/blog"} className="link">المدونة</NavLink>
            </li>
            <li className='md:m-0'>
              <NavLink to={"/about"} className="link">من نحن</NavLink>
            </li>
            <li>
              <NavLink to={'/blog'}><button type="button" className="bg-main cursor-pointer block md:hidden mt-2 w-full text-white hover:text-gray-200 hover:-translate-y-1 box-border shadow-xs font-medium leading-5 rounded-full text-lg py-4 px-8 transition-all">إبدأ القراءة</button></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}