import { Link } from 'react-router';
import ChosenCard from './Cards/chosenCard';
import RecentCard from './Cards/RecentCard';
import Categories from './myData/Categories';

export default function Home() {
  const myCategories = Categories("all")
  return (
    <>
      {/* header */}
      <header className="overflow-hidden w-full py-10 mt-4 relative ">
        <div className="z-[-3] absolute bg-[rgb(15,14,10)]  inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute -z-1 end-32 size-80 rounded-full bg-main-subtle blur-3xl"></div>
        <div className="absolute -z-1 start-32 bottom-10 size-80 rounded-full bg-main-subtle/50 blur-3xl"></div>
        <div className='myContainer z-20 py-10 flex flex-col md:gap-12 gap-8 justify-center items-center md:max-w-1/2 text-center'>
          <div className="bg-main-subtle text-sm rounded-full p-3 text-white w-fit border-main border">
            <span className='align-middle bg-main inline-block size-2 rounded-full animate-pulse'></span><div className=" ms-1 inline-block align-middle relative bg-main rounded-full size-2"><span className='inset-0 align-middle absolute bg-main inline-block size-2  animate-ping rounded-full'></span></div>        مرحباً بك في عدسة
          </div>
          <h1 className=' md:leading-20 leading-15 text-center font-bold text-5xl sm:text-7xl block text-white'>
            اكتشف <span className='text-main-half'> فن </span>
            <br />        التصوير الفوتوغرافي
          </h1>
          <p className='text-secondary text-2xl'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className=' max-sm:flex-col flex gap-3 w-full justify-center'>
            <Link to="/blog"><button className='cursor-pointer w-full sm:w-fit px-8 bg-main text-white p-4 max-sm:w-full rounded-full group/header hover:-translate-y-2 transition'>استكشف المقالات<i className="fa-solid group-hover/header:-translate-x-2 duration-700 fa-arrow-left"></i></button></Link>
            <button className='w-full sm:w-fit px-8 bg-transparent p-4 max-sm:w-full rounded-full border border-secondary hover:text-main hover:border-main hover:bg-main-subtle transition text-white'><span className=' border-2 inline-flex rounded-full me-1 size-4 text-center align-middle justify-center items-center '><i className="align-middle fa-solid fa-info text-xs"></i></span>اعرف المزيد</button>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 w-full text-center'>
            <div className="header-card ">
              <h4 className='text-main text-3xl'><i className="fa-solid fa-newspaper"></i></h4>
              <p className='text-main-half text-2xl my-0.5 font-bold'>+50</p>
              <p className='text-secondary text-md'>مقالة</p>
            </div>
            <div className="header-card ">
              <h4 className='text-main text-3xl'><i className="fa-solid fa-users"></i></h4>
              <p className='text-main-half text-2xl my-0.5 font-bold'>+10 ألف</p>
              <p className='text-secondary text-md'>قارئ</p>
            </div>
            <div className="header-card ">
              <h4 className='text-main text-3xl'><i className="fa-solid fa-folder-open"></i></h4>
              <p className='text-main-half text-2xl my-0.5 font-bold'>4</p>
              <p className='text-secondary text-md'>تصنيفات</p>
            </div>
            <div className="header-card">
              <h4 className='text-main text-3xl'><i className="fa-solid fa-pen-nib"></i></h4>
              <p className='text-main-half text-2xl my-0.5 font-bold'>6</p>
              <p className='text-secondary text-md'>كاتب</p>
            </div>

          </div>
        </div>
      </header>
      {/* chosen blogs  */}
      <section className=' chosen-blogs py-8  bg-black bg-linear-to-l linear from-main-subtle to-black'>
        <div className="myContainer">
          <div className="top">
            <div className="bg-main-subtle text-sm rounded-full px-4 py-2 text-white w-fit border-main border">
              <span className='align-middle bg-main inline-block size-2 rounded-full animate-pulse'></span><div className=" mx-1 inline-block align-middle relative bg-main rounded-full size-2"><span className='inset-0 align-middle absolute bg-main inline-block size-2  animate-ping rounded-full'></span></div>
              مميز
            </div>
            <h2 className='text-white text-4xl sm:text-6xl font-bold'>مقالات مختارة</h2>
            <div className="max-sm:flex-col flex justify-between mt-2 text-xl gap-2 sm:items-center items-start ">
              <p className="text-secondary ">محتوى منتقى لبدء رحلة تعلمك</p>
              <Link to={"/blog"}><button className=" bg-linear-to-l from-main-strong to-main-half text-white p-3 px-4 rounded-xl group/chosenBtn hover:-translate-y-2 transition"> عرض الكل <i className="group-hover/chosenBtn:-translate-x-1 transition fa-solid fa-angle-left align-middle"></i></button></Link>
            </div>
          </div>
          <div className="home-blogs py-8 flex flex-col gap-8 ">
            <ChosenCard postsIDs={[1, 2, 3]} />
          </div>
        </div>
      </section>
      {/* main categories */}
      <section className=' main-categories bg-secondary-strong border-t border-secondary py-10'>
        <div className='myContainer w-4/5 py-3'>
          <div className="top text-center">
            <div className="m-auto bg-main-subtle text-sm rounded-full p-3 text-main w-fit border-main border">
              <span className='align-middle bg-main inline-block size-2 rounded-full animate-pulse'></span><div className=" ms-1 inline-block align-middle relative bg-main rounded-full size-2"><span className='inset-0 align-middle absolute bg-main inline-block size-2  animate-ping rounded-full'></span></div>        التصنيفات
            </div>
            <h2 className='text-white text-3xl md:text-6xl font-bold my-5'>استكشف حسب الموضوع</h2>
            <p className='text-secondary text-xl '>اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
            <>
              {myCategories.map((cate) => {
                return (
                  <Link to={`/blog?category=${cate.name}`} key={cate.key} className={`cate-card group/cateCard hover:bg-linear-330 to-70% to-main-half from-yellow-200`}>
                    <div className='z-3 flex items-baseline justify-between'>
                      <span className='text-main text-xl inline-block p-3 rounded-xl bg-main-subtle border group-hover/cateCard:text-white border-main-strong'>
                        <i className={`fa-solid ${cate.icon}`}></i>
                      </span>
                      <span className='group-hover/cateCard:flex hidden rounded-full text-white size-8 bg-main  justify-center items-center'><i className=" fa-solid fa-angle-left"></i></span></div>
                    <h3 className='text-white font-bold my-2'>{cate.name}</h3>
                    <p className='text-secondary text-xs'>{cate.count} مقالة</p>
                  </Link>
                )
              })}
            </>
          </div>
        </div>
      </section>
      {/* recent blogs */}
      <section className="recent-blogs bg-black bg-linear-to-r linear via-transparent from-main-subtle to-transparent py-10">
        <div className="myContainer py-7 my-7">
          <div className="top mb-3">
            <div className="bg-main-subtle text-sm rounded-full px-4 py-2  text-main w-fit border-main border">
              <span className='align-middle bg-main inline-block size-2 rounded-full animate-pulse'></span><div className=" mx-1 inline-block align-middle relative bg-main rounded-full size-2"><span className='inset-0 align-middle absolute bg-main inline-block size-2  animate-ping rounded-full'></span></div>
              الأحدث
            </div>
            <h2 className='text-6xl font-bold my-6 text-white'>أحدث المقالات</h2>
            <div className="flex justify-between text-xl items-center ">
              <p className='text-secondary'>محتوى جديد طازج من المطبعة</p>
              <p className='text-sm font-bold group/recentCards hover:text-main-half text-main'>عرض جميع المقالات <span className='inline-block ms-1 align-middle group-hover/recentCards:-translate-x-2 transition'><i className="fa-solid fa-arrow-left"></i></span></p>
            </div>
          </div>
          <div className="recent-cards grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RecentCard postsIDs={[26, 27, 28]} />
          </div>

        </div>

      </section>

      {/* subscribe */}
      <section className="news-subscribe  bg-black relative overflow-hidden py-20">
        <div className="absolute z-0  -top-20 left-1/2 -translate-x-1/2 center w-1/2 h-full bg-radial from-main-subtle to-transparent   "></div>
        <div className="myContainer md:w-3/5 w-[90%] px-5 relative rounded-2xl bg-secondary-strong border border-secondary-light py-6 my-6 text-center">
          <p className="text-white text-3xl m-auto size-16 p-4 flex items-center bg-main-strong rounded-2xl"><i className="fa-regular fa-envelope"></i></p>
          <h3 className='text-white my-2 text-4xl font-bold'>اشترك في  <span className='text-transparent bg-clip-text bg-linear-to-r  to-main-half from-main-strong'> نشرتنا الإخبارية</span></h3>
          <p className="text-secondary text-xl my-2"> احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
          <form className='max-md:flex-col flex  gap-2 items-center my-2 py-2  md:w-1/2 w-full mx-auto'>
            <input id='newsEmail' type="email" className='p-3 rounded-xl text-main bg-black focus:bg-main-subtle border-2 border-secondary focus:outline-none focus:border-main md:w-2/3 w-full placeholder:text-secondary' placeholder='ادخل بريدك الالكتروني' />
            <button className='text-nowrap cursor-pointer  bg-linear-to-r from-main to-main-half hover:bg-none bg-main hover:bg-main-strong transition text-white px-3 py-2 w-full md:w-1/3 rounded-xl'>اشترك الآن </button>
          </form>
          <div className='flex flex-wrap gap-3 items-center justify-between md:w-1/2 w-full mx-auto '>
            <div className='flex gap-0'>
              <div className=' inline-flex relative'>
                <div className='mx-5 home-form-img'><img className='' src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"} alt="gg" /></div>
                <div className='absolute h-full end-0 home-form-img'><img className='' src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"} alt="gg" /></div>
              </div>
              <div className='home-form-img -ms-1'> <img className='' src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"} alt="gg" /></div>
            </div>
            {/* <div className='text-sm text-secondary flex justify-between gap-2 items-center '> */}
            <p className='text-secondary w-fit text-sm text-nowrap'>انضم لـ <span className='text-main'>+10,000</span> مصور<span className='max-md:hidden mx-1'>•</span></p>
            <p className='text-secondary w-fit text-sm text-nowrap'>بدون إزعاج<span className='max-md:hidden mx-1'>•</span></p>
            <p className='text-secondary w-fit text-sm text-nowrap'>إلغاء الاشتراك في أي وقت</p>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}