import { Link } from 'react-router-dom';
import Posts from './../myData/Posts';

export default function RecentCard({ postsIDs, category, search, page, view }) {

    let wantedPosts = Posts({ postsIDs, category, search })
    if (page) {
        wantedPosts = wantedPosts.slice((page - 1) * 5, page * 5 )
    }
    if (search) {
        wantedPosts = wantedPosts.filter((post) => {
            if (post.title.includes(search) || post.excerpt.includes(search) || post.content.includes(search) || post.slug.includes(search)) {
                return post
            }
        })
    }

    return (
        <>
            {wantedPosts.map((post) => {
                return (
                    <Link to={`/blog/${post.slug}`} key={post.id} className={`recent-card flex  ${view == "list" ? "flex-row" : "flex-col"} justify-center items-center group/recentCard`}>
                        <div className={`img relative h-full ${view == "list" ? "w-1/3 rounded-s-3xl" : "rounded-t-3xl"} overflow-hidden `}>
                            <div className="w-full absolute z-4 inset-0 shadow-inset shadow-red-700 shadow transition">
                                <span className='absolute top-4 start-4 py-1 px-3 text-xs font-semibold text-white bg-zinc-900 rounded-full'>
                                    {post.category}
                                </span>
                                {post.featured && <span className='absolute top-4 end-4 py-1 px-3 text-xs font-semibold  text-white bg-main rounded-full'>
                                    مميز
                                </span>}
                            </div>
                            <img className='w-full h-full group-hover/recentCard:scale-110 transition  object-cover' src={post.image} alt={post.title} />
                        </div>
                        <div className={`content ${view == "list" ? "w-2/3 " : ""} py-4 px-6`}>
                            <div className="top text-zinc-600 flex justify-start flex-wrap items-center gap-2 text-sm">
                                <span className=''><i className="fa-regular fa-clock"></i></span>
                                <span className=''>{post.readTime}</span>
                                <span className='mx-2 max-sm:hidden size-1 bg-secondary rounded-full'></span>
                                <span className=''>{post.date}</span>
                            </div>
                            <h3 className='text-white font-bold text-xl md:text-2xl my-3  group-hover/recentCard:text-main transition'>{post.title}</h3>
                            <p className="text-secondary text-sm leading-6">{post.excerpt}</p>
                            <div className="card-footer mt-3 border-t border-secondary-light pt-3 flex items-center justify-between">
                                <div className="author-data flex items-center justify-start gap-2">
                                    <div className="img border-2 border-secondary rounded-full overflow-hidden size-10 "><img className='' src={post.author.avatar} alt={post.author.name} /></div>
                                    <div className='text-sm leading-4'>
                                        <h5 className='text-white'>{post.author.name}</h5>
                                        <p className='text-secondary-light'>{post.author.role}</p>
                                    </div>
                                </div>
                                <span className="go-btn rounded-full flex items-center justify-center size-8 bg-main-subtle border border-main-subtle text-main group-hover/recentCard:bg-main group-hover/recentCard:text-white transition"><i className="fa-solid fa-angle-left"></i></span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}
