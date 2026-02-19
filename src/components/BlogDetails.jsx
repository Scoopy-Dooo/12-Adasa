import { useEffect } from "react";
import Posts from "./myData/Posts";
import { Link } from "react-router-dom";


export default function BlogDetails() {
    const url = window.location.pathname.split('/')
    const posts = Posts({ postsIDs: "all" })
    const post = posts?.find(post => post.slug == url[2])
    console.log('post : ', post);


    console.log('post.image : ', post.image);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const headerHightStart = post.image.indexOf("h=")
    const headerHightEnd = post.image.indexOf("&fit")
    const headerHight = post.image.slice(headerHightStart + 2, headerHightEnd)
    console.log('post.content : ', post.content);
    console.log("🚀 ~ BlogDetails ~ headerHight:", headerHight)

    const postHeader = post.content.shift()

    return <div className="blog-details w-full  h-full bg-secondary-strong mt-5">
        <header style={{ "backgroundImage": `url(${post.image})`, "height": `${headerHight}px` }}
            className="bg-no-repeat w-full py-5 bg-center bg-cover relative">
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent "></div>
            <div className="relative z-1 ms-5 flex w-fit gap-2 justify-start items-center bg-secondary-strong/50 text-gray-300 rounded-full  px-3 py-1 ">
                <Link to={"/"} className="cursor-pointer hover:text-white hover:scale-105 transition"><i className="fa-solid fa-home"></i></Link>

                <span className="text-secondary"><i className="fa-solid fa-angle-left"></i></span>

                <Link to={"/blog"} className="cursor-pointer hover:text-white hover:scale-105 transition">Blog</Link>
                <span className="text-secondary"><i className="fa-solid fa-angle-left"></i></span>
                <p className="text-main">{post.category}</p>
            </div>
            <div className="relative z-1 myContainer flex flex-col gap-3 justify-center items-center">
                <h1 className="text-white text-4xl font-extrabold">{post.title}</h1>
                <div className="flex gap-3 rounded-xl p-4 border border-secondary bg-secondary-strong/50 ">
                    <div className="img size-15 rounded-full border border-main-subtle overflow-hidden">
                        <img className="w-full object-cover" src={post.author.avatar} alt={post.author.name} />
                    </div>
                    <div>
                        <h4 className="text-white text-lg">{post.author.name}</h4>
                        <p className="text-white ">{post.author.role}</p>
                    </div>
                </div>

            </div>

        </header>

        <section className="post-details w-full py-5 bg-black ">
            <div className="myContainer flex gap-5">
                <div className="flex-8">
                    <div className="py-5 flex flex-col gap-8">
                        <p className="bg-main-subtle  w-full border rounded-xl border-main-subtle p-5 text-white text-lg italic">{post.title}</p>
                        <p className="text-white ">{postHeader[0]}</p>
                    </div>
                    <div className="">
                        {post.content.map((p) => {
                            return <div className="py-3">
                                <h3 className="my-4 text-white text-3xl font-extrabold">
                                    <span className="inline-block me-2 bg-main-subtle text-main border rounded-xl text-4xl border-main-subtle"><i className="fa-solid fa-camera"></i></span>
                                    {p[0]}
                                </h3>
                                <p className="text-white text-lg mt-5">{p[1]}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="flex-4">
                </div>
            </div>
        </section>

    </div>
}
