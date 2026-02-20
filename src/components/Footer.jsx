import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './myData/Categories'

export default function Footer() {
    return (
        <footer className='border-t relative z-1 border-secondary-light py-4 bg-black text-secondary'>
        <div className="absolute -z-1 end-1/4 bottom-10 size-100 rounded-full bg-main/10 blur-3xl"></div>
        <div className="absolute -z-1 start-1/4 bottom-5 size-100 rounded-full bg-yellow-500/10 blur-3xl"></div>

            <div className="myContainer py-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

                <div className="">
                    <h3 className='text-white flex items-center gap-2'><span className=' flex items-end p-1 size-10 bg-main-strong rounded-xl text-lg font-semibold justify-center'>ع</span> عدسة</h3>
                    <p className="text-secondary mt-8">مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
                    <div className='flex gap-3 mt-5 ps-2 '>
                        <span className='rounded-md hover:scale-110 bg-secondary-strong border-[0.5px] border-secondary-light hover:text-white text-secondary hover:bg-main p-2 '><a href="#"><i className="fa-brands text-lg fa-x-twitter"></i></a></span>
                        <span className='rounded-md hover:scale-110 bg-secondary-strong border-[0.5px] border-secondary-light hover:text-white text-secondary hover:bg-main p-2 '><a href="#"><i className="fa-brands text-lg fa-github"></i></a></span>
                        <span className='rounded-md hover:scale-110 bg-secondary-strong border-[0.5px] border-secondary-light hover:text-white text-secondary hover:bg-main p-2 '><a href="#"><i className="fa-brands text-lg fa-square-linkedin"></i></a></span>
                        <span className='rounded-md hover:scale-110 bg-secondary-strong border-[0.5px] border-secondary-light hover:text-white text-secondary hover:bg-main p-2 '><a href="#"><i className="fa-brands text-lg fa-youtube"></i></a></span>
                    </div>
                </div>
                <div className="">
                    <p className='self-center mb-1 inline-block w-10 h-0.5 linear rounded-4xl bg-main me-2'></p>
                    <h3 className='inline text-white'>استكشف</h3>
                    <div className='mt-5 overflow-hidden'>
                        <Link to={"/home"}  className='block hover:translate-x-0 my-3 translate-x-5 duration-700 hover:text-main text-secondary transition ' >
                            <span className=''>
                                <i className="fa-solid fa-angle-left"></i>
                            </span>
                            الرئيسية
                        </Link>
                        <Link to={"/blog"} className='block hover:translate-x-0 my-3 translate-x-5 duration-700 hover:text-main text-secondary transition ' >
                            <span className=''>
                                <i className="fa-solid fa-angle-left"></i>
                            </span>
                            المدونة
                        </Link>
                        <Link to={"/about"} className='block hover:translate-x-0 my-3 translate-x-5 duration-700 hover:text-main text-secondary transition ' >
                            <span className=''>
                                <i className="fa-solid fa-angle-left"></i>
                            </span>
                            من نحن
                        </Link>
                    </div>
                </div>
                <div className="">
                    <p className='self-center mb-1 inline-block w-10 h-0.5 linear rounded-4xl bg-main me-2'></p>
                    <h3 className='inline text-white'>التصنيفات</h3>
                    <div className='mt-5 overflow-hidden'>
                        {Categories("all").map(categ => {
                            return <Link key={categ.key} to={"/blog?category=" + categ.name} className='block hover:translate-x-0 my-3 translate-x-5 duration-700 hover:text-main text-secondary transition '>
                                <span className=''>
                                    <i className="fa-solid fa-angle-left"></i>
                                </span>
                                {categ.name}
                            </Link>
                        })}

                    </div>
                </div>
                <div className="">
                    <p className='self-center mb-1 inline-block w-10 h-0.5 linear rounded-4xl bg-main me-2'></p>
                    <h3 className='inline text-white'>ابقى على اطلاع</h3>
                    <div className='mt-7 overflow-hidden'>
                        <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
                        <form>
                            <input type="email" placeholder='ادخل البريد الإلكتروني' id='footerEmail' className='w-full p-2 my-3 bg-secondary-strong rounded-lg ' />
                            <button type='submit' className='w-full bg-main rounded-full py-3 text-center text-white hover:-translate-y-1 transition'>اشترك</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-600 mt-10 '>
                <div className="myContainer flex justify-between pt-4">
                    <div>© 2026 عدسة .صنع بكل <i className="fa-solid fa-heart text-main"></i>جميع الحقوق محفوطة.</div>
                    <div className='flex gap-7'>
                        <Link className='text-secondary hover:text-main' to={"/"}>سياسة الخصوصية</Link>
                        <Link className='text-secondary hover:text-main' to={"/"}>شروط الخدمة</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
