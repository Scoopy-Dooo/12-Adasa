import { NavLink } from 'react-router';
import Posts from './../myData/Posts';
export default function ChosenCard({ postsIDs }) {
  let data = {
    postsIDs: postsIDs
  }
  
  let wantedPosts = Posts(data)
  
  return (
    <>
      {wantedPosts.map((post) => {
        return (<div key={post.id} className='post-card group/postCard'>
          <NavLink to={`/blog/${post.slug}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="img relative overflow-hidden h-full">
                <img src={post.image} className='group-hover/postCard:scale-110 object-cover w-full h-full duration-700 ease-out' alt={post.slug} />
                {post.featured && <div className='absolute top-0 start-0 p-5 '>
                  <p className="px-3 py-1 text-sm text-white rounded-full bg-linear-to-l from-main-half to-main-strong"><i className="fa-solid fa-star text-[10px] me-1"></i>مميز</p>
                </div>}
              </div>
              <div className="content h-full flex flex-col  gap-10 md:gap-15 justify-between p-8 bg-secondary-strong">
                <div>
                  <div className='flex gap-3  items-center'>
                    <p className='px-3 py-1 text-xs font-bold rounded-full bg-main-subtle border text-main-strong border-main w-fit'>{post.category}</p>
                    <p className=" text-secondary text-sm flex items-center"><i className="fa-regular fa-clock me-0.5"></i>{post.readTime}</p>
                  </div>
                  <h3 className='text-white text-3xl my-4 font-bold group-hover/postCard:text-main duration-700 ease-out'>{post.title}</h3>
                  <h4 className='text-secondary  text-sm font-semibold'>{post.excerpt}</h4>
                </div>
                <div className="flex items-center justify-between">
                  <div className='flex items-center'>
                    <div className="img relative rounded-full w-1/4">
                      <img className='aspect-square border  rounded-full border-secondary-light' src={post.author.avatar} alt={post.author.name} />
                      <div className="absolute bottom-0 end-0 p-1.5 rounded-full bg-main border border-secondary-strong"></div>
                    </div>
                    <div className="ms-2">
                      <h5 className='text-sm font-bold text-white mb-0'>{post.author.name}</h5>
                      <p className='text-xs text-secondary'>{post.date}</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-main max-sm:text-nowrap max-sm:text-xs group-hover/postCard:translate-x-1 duration-700 font-bold ease-out'>إقرأ المقال</span>
                    <i className="fa-solid fa-arrow-left inline-block text-main ms-1 "></i>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        )
      })}
    </>
  )
}
