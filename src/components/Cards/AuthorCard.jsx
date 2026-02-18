
export default function AuthorCard({ authors }) {
    console.log("🚀 ~ AuthorCard ~ data:", authors[1])

    return authors.map(author => {
        return <div key={author.name} className="text-center group/author border border-secondary-light hover:border-main-subtle bg-secondary-strong rounded-3xl p-6 ">
            <div className="img relative w-24 h-24 mx-auto rounded-full  border-2 border-secondary group-hover/author:border-main">
                <div className="absolute bottom-0 start-0 size-5 bg-main rounded-full text-xs border border-secondary-strong flex justify-center items-center text-white"><i className="fa-solid fa-check"></i></div>
                <img className="rounded-full object-cover" src={author.avatar} alt={author.name} />
            </div>
            <div className="details my-3">
                <h3 className="text-white font-bold">{author.name}</h3>
                <p className="text-main text-sm font-semibold">{author.role}</p>
                <div className="links flex items-center justify-center gap-3 mt-3">
                    <a className="bg-secondary-light text-lg  flex hover:bg-main hover:text-white items-center justify-center rounded-lg size-10 text-secondary" href="https://www.twitter.com" target="_blank" ><i className="fa-brands fa-x-twitter"></i></a>
                    <a className="bg-secondary-light text-lg  flex hover:bg-secondary hover:text-white items-center justify-center rounded-lg size-10 text-secondary" href="https://www.instagram.com" target="_blank" ><i className="fa-brands fa-github"></i></a>
                    <a className="bg-secondary-light text-lg  flex hover:bg-blue-500 hover:text-white items-center justify-center rounded-lg size-10 text-secondary" href="https://www.linkedin.com" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    })

}
