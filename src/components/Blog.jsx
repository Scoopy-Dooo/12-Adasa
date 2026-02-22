import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import RecentCard from './Cards/RecentCard';
import Categories from './myData/Categories';
import Posts from './myData/Posts';

export default function Blog() {
  const [blogFilter, setBlogFilter] = useState("all")
  const [blogSearch, setBlogSearch] = useState("")
  const [view, setView] = useState("grid")
  const [page, setPage] = useState(1)

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const posts = Posts({ postsIDs: "all" })
  const myCategories = Categories("all")
  let wantedPosts = []
  function removeFilter(e) {
    setBlogFilter("all")
    e.target.closest("p").className.add("hidden")
  }
  function setListView() {
    setView("list")
  }
  function setGridView() {
    setView("grid")
  }
  // ? pagination functions
  function handlePage(e) {
    let x = Number(e.target.value)
    setPage(x)
  }
  function prevPage() {
    page != 1 ? setPage(page - 1) : setPage(5)
  }
  function nextPage() {
    page != 5 ? setPage(page + 1) : setPage(1)
  }

  if (blogFilter == "all") {
    wantedPosts = posts
  } else { wantedPosts = posts.filter((post) => post.category === blogFilter) }

  useEffect(() => {
    if (category) {
      setBlogFilter(category)
    }
    window.scrollTo(0, 0, { behavior: 'smooth' })
  }, [category])

  return (
    <>
      <header className="w-full overflow-hidden py-10 mt-4 relative ">
        <div className="z-[-3] absolute bg-[rgb(15,14,10)]  inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
          <div className="absolute top-0 end-100  size-90 rounded-full bg-main-subtle blur-3xl "></div>
          <div className="absolute top-0 start-100  size-90 rounded-full bg-yellow-400/10 blur-3xl "></div>
        </div>
        <div className='myContainer z-10 py-10 flex flex-col gap-5 sm:gap-8 justify-center items-center md:max-w-1/2 text-center'>
          <div className="bg-main-subtle text-sm rounded-full px-5 py-2 text-main w-fit border-main-subtle border-2">
            <span className='align-middle bg-main inline-block size-1.5 rounded-full animate-pulse'></span>
            <span className=" mx-1 align-middle ">
              <i className="fa-regular fa-newspaper"></i>
            </span>
            مدونتنا
          </div>
          <h1 className='leading-15 max-sm:leading-13 text-center font-bold text-6xl block text-white'>
            استكشف
            <span className='text-main-half'> مقالاتنا </span>
          </h1>
          <p className='text-secondary text-xl'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>

        </div>
      </header>
      <section id='blog-filters' className=' sticky z-20 top-20 border-b  border-b-secondary bg-black'>
        <div className="myContainer  py-5">
          <div className=' flex max-md:flex-col gap-3 justify-between items-center'>
            <div className="blog-search  md:w-1/3 w-full">
              <div className="relative text-secondary">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                  <i className="w-4 h-4 fa-solid fa-search"></i>
                </div>
                <input name='blogSearch' onInput={e => setBlogSearch(e.target.value)} value={blogSearch} type="text" className="block w-full ps-3 pe-20 py-2.5 border border-secondary-light focus:outline-2 focus:outline-main   bg-secondary-strong rounded-xl  focus-visible:outline-main text-main font-bold placeholder:text-secondary" placeholder="ابحث عن المقالات......" />
              </div>
            </div>
            <div className="blog-categories  justify-center text-white flex flex-wrap gap-2 items-center">
              <Link to={"/blog"}><button name="all" onClick={e => setBlogFilter(e.target.name)} key="all" type="button" className={`filter-card max-sm:text-xs text-nowrap ${blogFilter == "all" && "bg-main text-white"}`}>جميع المقالات</button></Link>
              {
                myCategories.map((categ) => {
                  return (
                    <Link key={categ.key} to={"/blog?category=" + categ.name}><button name={categ.name} onClick={e => setBlogFilter(e.target.name)} type="button" className={`filter-card max-sm:text-xs text-nowrap ${blogFilter == categ.name && "bg-main text-white"}`}>{categ.name}</button></Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section className=' bg-black w-full '>
        <div className="blogs myContainer py-10">
          <div className="top text-secondary flex items-center justify-between">
            <p className=''>عرض <span className='text-white'> {wantedPosts.length} </span> مقالات <span className='text-main'>{blogFilter != "all" && blogFilter}</span></p>
            <div className="flex max-sm:flex-col items-center gap-2">
              <div className=" p-1 flex border border-secondary rounded-xl">
                <button onClick={setGridView} type="button" className={`size-9 grid ${view == "grid" && "bg-main text-white"} place-items-center rounded-md hover:text-white`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                </button>
                <button onClick={setListView} type="button" className={`size-9 grid ${view == "list" && "bg-main text-white"} place-items-center rounded-md hover:text-white`}><i className="fa-solid fa-bars"></i></button>

              </div>
              <p onClick={e => removeFilter(e)} className={` ${blogFilter == "all" && "hidden"} cursor-pointer hover:text-main text-sm`}><i className="fa-solid fa-x me-1"></i>مسح الفلتر</p>
            </div>
          </div>

          <div className={`end grid  ${view == "list" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} mt-10 gap-4 sm:gap-8`}>
            <RecentCard page={blogFilter == "all" ? page : null} view={view} search={blogSearch} category={blogFilter} />
          </div>

          {blogFilter == "all" && <><div className='flex items-center justify-center gap-2 mt-10 py-2  '>
            <button onClick={prevPage} type="button" className='blog-btn border-main bg-main-strong hover:bg-main'><i className="fa-solid fa-angle-right"></i></button>
            <label className='blog-btn'>1<input onChange={((e) => handlePage(e))} checked={page == 1} className='hidden' type="radio" name="pageNumber" value="1" /></label>
            <label className='blog-btn'>2<input onChange={((e) => handlePage(e))} checked={page == 2} className='hidden' type="radio" name="pageNumber" value="2" /></label>
            <label className='blog-btn'>3<input onChange={((e) => handlePage(e))} checked={page == 3} className='hidden' type="radio" name="pageNumber" value="3" /></label>
            <label className='blog-btn'>4<input onChange={((e) => handlePage(e))} checked={page == 4} className='hidden' type="radio" name="pageNumber" value="4" /></label>
            <label className='blog-btn'>5<input onChange={((e) => handlePage(e))} checked={page == 5} className='hidden' type="radio" name="pageNumber" value="5" /></label>
            <button onClick={nextPage} type="button" className='blog-btn border-main bg-main-strong hover:bg-main'><i className="fa-solid fa-angle-left"></i></button>
          </div>
            <div className='block text-lg text-main-strong text-center'>صفحة {page} من 5</div>
          </>}
        </div>
      </section>
    </>
  )
}