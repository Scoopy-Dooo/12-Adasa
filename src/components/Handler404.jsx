import React from 'react'
import { Link } from 'react-router';
export default function Handler404() {
    return (
        <div className=' w-screen flex justify-center  text-white bg-secondary p-3'>
            <div className='font-extrabold text-9xl bg-main-strong p-5 rounded-4xl shadow-[0px_0px_10px_10px_orange]'>
                <p className='mb-0' dir='ltr'>404 not found</p>
                <button className='bg-white py-5 text-main rounded-3xl hover:-translate-y-2 transition w-full text-2xl '>
                    <Link to={"/"}  >الرجوع الى الصفحة الرئيسية</Link>
                </button>
            </div>
        </div>
    )
}
