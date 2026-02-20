import { useEffect } from "react";
import Posts from "./myData/Posts";
import { Link } from "react-router-dom";
import RecentCard from "./Cards/RecentCard";


export default function BlogDetails() {
    const url = window.location.pathname.split('/')
    const posts = Posts({ postsIDs: "all" })
    const post = posts?.find(post => post.slug == url[2])
    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' })
    }, [])

    const postHeader = post.content.shift()
    return <div className="blog-details w-full bg-secondary-strong mt-5">
        <header style={{ "backgroundImage": `url(${post.image})` }}
            className="relative w-full h-[65vh] flex  flex-col justify-center items-center bg-center bg-cover bg-no-repeat  ">
            <div className="layer absolute inset-0 bg-linear-to-t from-black to-transparent "></div>
            <div className="absolute z-1 top-9 start-9 flex w-fit gap-2 justify-start items-center bg-secondary-strong/50 text-gray-300 rounded-full  px-3 py-1 ">
                <Link to={"/"} className="cursor-pointer hover:text-white hover:scale-105 transition"><i className="fa-solid fa-home"></i></Link>
                <span className="text-secondary"><i className="fa-solid fa-angle-left"></i></span>
                <Link to={"/blog"} className="cursor-pointer hover:text-white hover:scale-105 transition">Blog</Link>
                <span className="text-secondary"><i className="fa-solid fa-angle-left"></i></span>
                <p className="text-main">{post.category}</p>
            </div>
            <div className="relative z-2 myContainer  lg:w-3/4 flex flex-col gap-10 justify-between items-start">
                <div className="flex gap-3 text-white items-center ">
                    <Link to={"/blog?category=" + post.category}><p className="bg-main hover:bg-main-strong transition  px-3 py-2 rounded-full ">{post.category}</p></Link>
                    <p className="text-sm"><i className="fa-regular me-1 fa-calendar"></i>{post.date}</p>
                    <p className="text-sm"><i className="fa-regular me-1 fa-clock"></i>{post.readTime}</p>
                </div>
                <h1 className=" text-white md:text-5xl text-3xl  font-extrabold">{post.title}</h1>
                <div className="flex gap-3 text-start rounded-xl px-5 py-4 border border-secondary-light bg-secondary/20">
                    <div className="img size-14 rounded-full border-2 border-main overflow-hidden">
                        <img className="w-full object-cover" src={post.author.avatar} alt={post.author.name} />
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-bold">{post.author.name}</h4>
                        <p className="text-white text-sm">{post.author.role}</p>
                    </div>
                </div>
            </div>
        </header>
        <section className="post-details w-full py-5 bg-black ">
            <div className="myContainer py-5 my-2 px-5 max-md:flex-col flex gap-5">
                <div className="flex-8 order-2">
                    <div className=" flex flex-col gap-8">
                        <p className="bg-main-subtle  w-full border rounded-xl border-main-subtle p-5 text-white text-lg italic">{post.title}</p>
                        <p className="text-white ">{postHeader[0]}</p>
                    </div>
                    {post.content.map((p, i) => {
                        return <div id={p[0]} key={i} className="py-3 scroll-m-24">
                            <h3 className="my-4 text-white text-3xl font-extrabold">
                                <span className="inline-block me-2 bg-main-subtle text-main border rounded-xl text-4xl border-main-subtle"><i className="fa-solid fa-camera"></i></span>
                                {p[0]}
                            </h3>
                            <p className="text-white text-lg mt-5">{p[1]}</p>
                        </div>
                    })}
                    <div className="blog-card ">
                        <div className="flex items-center">
                            <span className="flex me-2 size-9 rounded-md justify-center items-center text-main-strong border-main-subtle bg-main-subtle"><i className="fa-solid fa-tags"></i></span>
                            <h3 className="text-white font-bold text-lg">الوسوم</h3>
                        </div>
                        <div className="flex gap-3 mt-4 ">
                            {post.tags.map(t => {
                                return <p key={t} className="text-xs bg-secondary-strong/20 font-semibold rounded-full px-3 py-2 border border-secondary-light hover:text-main hover:bg-main-subtle hover:border-main-subtle transition cursor-pointer">#{t}</p>
                            })}
                        </div>
                    </div>
                    <div className="blog-card my-5 flex justify-between items-center">
                        <div className="flex text-white items-center">
                            <span className="flex me-2 size-9 rounded-md justify-center items-center text-main-strong border-main-subtle bg-main-subtle"><i className="fa-solid fa-share-nodes"></i></span>
                            <h3 className="text-white font-bold text-lg">شارك المقال</h3>
                        </div>
                        <div className="flex gap-3  ">
                            <a href="https://www.x.com" className=" hover:text-white bg-secondary-strong/20 hover:bg-blue-500 rounded-xl size-10 border border-secondary-light flex justify-center items-center transition"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.linkedin.com" className=" hover:text-white bg-secondary-strong/20 hover:bg-blue-600 rounded-xl size-10 border border-secondary-light flex justify-center items-center transition"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.whatsapp.com" className=" hover:text-white bg-secondary-strong/20 hover:bg-green-500 rounded-xl size-10 border border-secondary-light flex justify-center items-center transition"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.github.com" className=" hover:text-white bg-secondary-strong/20 hover:bg-main rounded-xl size-10 border border-secondary-light flex justify-center items-center transition"><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                    <div className="blog-card my-5 flex max-md:flex-col max-md:justify-center items-center  gap-4">
                        <div className="img overflow-hidden rounded-xl border-3 border-main/50 size-24">
                            <img className="w-full object-cover" src={post.author.avatar} alt={post.author.name} />
                        </div>
                        <div className="max-md:text-center flex flex-col max-md:gap-2  ">
                            <p className="text-main font-semibold text-xs">كاتب المقال</p>
                            <h3 className="text-white text-xl leading-8 font-bold">{post.author.name}</h3>
                            <p className=" text-xs font-medium mb-2">{post.author.role}</p>
                            <p className="">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي
                            </p>
                        </div>
                    </div>


                </div>
                <div className="flex-4 justify-self-stretch relative">
                    <div className=" h-fit sticky top-24">
                        <div className="blog-card">
                            <div className="top mb-3 flex gap-3 items-center">
                                <span className="size-9  flex items-center justify-center text-main border border-main-subtle rounded-lg bg-main-subtle"><i className="fa-solid fa-list "></i></span>
                                <h3 className="text-white font-bold text-xl">محتويات المقال</h3>
                            </div>
                            <div className=" flex flex-col gap-2">
                                {post.content.map((c, i) => {
                                    return <a key={i} href={`#${c[0]}`} className=" flex items-center p-2 group hover:bg-main-subtle rounded-xl hover:text-main transition">
                                        <span className="size-6 text-xs inline-flex me-4 items-center justify-center group-hover:bg-main-subtle group-hover:text-main rounded-md bg-secondary/10">{i + 1}</span>
                                        <h3 className=" font-bold text-sm ">{c[0]}</h3>
                                    </a>
                                })}
                            </div>
                        </div>
                        <div className="blog-card my-5 text-center flex gap-5 items-center">
                            <div className="w-full rounded-xl py-4 bg-black">
                                <span className="text-main text-xl"><i className="fa-regular fa-clock"></i></span>
                                <p className="text-white font-bold my-1">{post.readTime}</p>
                                <p className="text-xs">وقت القراءة</p>
                            </div>
                            <div className="w-full rounded-xl py-4 bg-black">
                                <span className="text-main text-xl"><i className="fa-regular fa-calendar"></i></span>
                                <p className="text-white font-bold my-1">{post.date.slice(0, 8)}</p>
                                <p className="text-xs">تاريخ النشر</p>
                            </div>
                        </div>
                        <div className="blog-card text-center bg-main-subtle border-main-subtle text-main flex flex-col gap-2">
                            <p className="size-13 bg-main/20 text-xl flex items-center justify-center rounded-xl  m-auto"><i className="fa-solid fa-envelope"></i></p>
                            <p className="text-white ">لا تفوّت جديدنا</p>
                            <p className="text-sm ">اشترك للحصول على أحدث المقالات</p>
                            <Link to={"/blog"}><button className="rounded-xl text-lg cursor-pointer text-white font-bold py-3 w-full hover:bg-main-strong bg-main transition">تصفح المزيد</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="you-may-like py-8 bg-black ">
            <div className="myContainer  border-t border-secondary-light py-5 ">
                <div className="top flex justify-between items-center py-5">
                    <div className="flex gap-2 items-center">
                        <span className="size-12 flex text-xl items-center justify-center text-main-strong border border-main/50 rounded-xl bg-main-subtle"><i className="fa-solid fa-images"></i></span>
                        <div className="">
                            <h3 className="text-white leading-8 font-bold text-xl">مقالات قد تعجبك</h3>
                            <p className="text-secondary text-sm">استكشف المزيد من المحتوى المميز</p>
                        </div>
                    </div>
                    <Link to="/blog" className="flex group hover:text-main-half text-main items-center">
                        <p className="">عرض الكل</p>
                        <span className="group-hover:-translate-x-3 flex items-center ms-2"><i className=" fa-solid fa-arrow-left"></i></span>
                    </Link>
                </div>
                <div className="recent-cards fy-blogs grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <RecentCard postsIDs={[1, 4, 5]} />
                </div>
            </div>
        </section>
    </div>
}