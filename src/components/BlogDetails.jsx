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

    console.log("🚀 ~ BlogDetails ~ headerHight:", headerHight)
    return <div className="blog-details w-full  h-full bg-secondary-strong mt-5">
        <header style={{ "backgroundImage": `url(${post.image})`, "height": `${headerHight}px` }}
            className="bg-no-repeat w-full py-5 bg-center bg-cover relative">
                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent "></div>
            <div className="ms-5 flex w-fit gap-2 justify-start items-center bg-secondary-strong/50 text-gray-300 rounded-full  px-3 py-1 ">
                <Link to={"/"} className="hover:text-white hover:scale-105 transition"><i className="fa-solid fa-home"></i></Link>

                <span className="text-secondary"><i className="fa-solid fa-angle-left"></i></span>

                <Link to={"/blog"} className="hover:text-white hover:scale-105 transition">Blog</Link>
                <span className="text-secondary"><i className="fa-solid fa-angle-left"></i></span>
                <p className="text-main">{post.category}</p>
            </div>
            <div className="myContainer flex flex-col gap-3 justify-center items-center">




            </div>

        </header>

        <section className="">
            <div className="">
                <p className="bg-main-subtle border-main p-3 text-white text-lg">{post.title}</p>

            </div>
            <div className=""></div>
        </section>




    </div>
}
