import { Link } from 'react-router-dom'
import AuthorCard from './Cards/AuthorCard'
import Posts from './myData/Posts'

export default function About() {
  const posts = Posts({ postsIDs: "all" })
  let authors = []
  posts.map(post => authors.push(post.author))

  return <div className="about ">
    {/* header */}
    <header className="w-full py-10 mt-4 relative ">
      <div className="z-[-3] absolute bg-[rgb(15,14,10)]  inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
      <div className="absolute top-20 end-30  size-90 rounded-full bg-main/10 blur-3xl "></div>
      <div className='myContainer z-10 py-10 flex flex-col gap-8 sm:gap-12 justify-center items-center md:max-w-3/5 text-center'>
        <div className="bg-main-subtle text-sm rounded-full px-3 py-2 text-main w-fit border-main-subtle border-2">
          <span className='align-middle bg-main inline-block size-2 rounded-full animate-pulse'></span><div className=" mx-1 inline-block align-middle relative bg-main rounded-full size-2"><span className='inset-0 align-middle absolute bg-main inline-block size-2  animate-ping rounded-full'></span></div>  من نحن
        </div>
        <h1 className='text-center font-bold text-4xl sm:text-6xl block text-white'>
          مهمتنا هي
          <span className='bg-linear-to-r to-main-half from-main-strong text-wrap text-transparent bg-clip-text '> الإعلام والإلهام </span>
        </h1>
        <p className='text-secondary text-xl'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 w-full text-center'>
          <div className="header-card ">
            <h4 className='text-main text-3xl'><i className="fa-solid fa-users"></i></h4>
            <p className='text-main-half text-2xl my-0.5 font-bold'>+2مليون</p>
            <p className='text-secondary text-md'>قارئ شهريا</p>
          </div>
          <div className="header-card ">
            <h4 className='text-main text-3xl'><i className="fa-solid fa-newspaper"></i></h4>
            <p className='text-main-half text-2xl my-0.5 font-bold'>+500</p>
            <p className='text-secondary text-md'>مقالة منشورة</p>
          </div>
          <div className="header-card">
            <h4 className='text-main text-3xl'><i className="fa-solid fa-pen-nib"></i></h4>
            <p className='text-main-half text-2xl my-0.5 font-bold'>+50</p>
            <p className='text-secondary text-md'>كاتب شهير</p>
          </div>
          <div className="header-card ">
            <h4 className='text-main text-3xl'><i className="fa-solid fa-book-open"></i></h4>
            <p className='text-main-half text-2xl my-0.5 font-bold'>+15</p>
            <p className='text-secondary text-md'>تصنيف</p>
          </div>
        </div>
      </div>
    </header>
    {/* our thinking  */}
    <section className='bg-secondary-strong border-y border-secondary-light py-8 text-center'>
      <div className="myContainer text-secondary my-6">
        <div className="top flex gap-3 items-center justify-center mb-3">
          <div className="h-7 bg-linear-to-t from-main-strong to-main-half w-2 rounded-full"></div>
          <h3 className="text-white text-3xl font-bold">قيمنا</h3>
          <div className="h-7 bg-linear-to-b from-main-strong to-main-half w-2 rounded-full"></div>
        </div>
        <p className='text-lg'>المبادئ التي توجه كل ما نقوم بإنشائه</p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 lg:px-25 w-full text-center my-10'>
          <div className="header-card py-0 p-1 flex items-center overflow-hidden justify-center relative z-1 group hover:scale-100 hover:bg-main-subtle ">
            <div className="absolute group-hover:hidden w-[200%] h-10 z-0 animate-[spin_2s_linear_infinite] bg-linear-to-t from-main to-main-subtle m-1"></div>
            <div className='w-full py-3 bg-secondary-strong h-full relative z-1 group-hover:bg-main-subtle'>
              <h4 className='text-main text-3xl'><i className="fa-solid fa-bullseye"></i></h4>
              <p className='group-hover:text-main-half text-white text-2xl my-0.5 font-bold'>الجودة أولاً</p>
              <p className='text-secondary text-md'>محتوى مدروس ومكتوب بخبرة</p>
            </div>
          </div>
          <div className="header-card py-0 p-1 flex items-center overflow-hidden justify-center relative z-1 group hover:scale-100 hover:bg-main-subtle ">
            <div className="absolute group-hover:hidden w-[200%] h-10 z-0 animate-[spin_2s_linear_infinite] bg-linear-to-t from-main to-main-subtle m-1"></div>
            <div className='w-full py-3 bg-secondary-strong h-full relative z-1 group-hover:bg-main-subtle'>
              <h4 className='text-main text-3xl'><i className="fa-solid fa-bolt"></i></h4>
              <p className='group-hover:text-main-half text-white text-2xl my-0.5 font-bold'>تركيز عملي</p>
              <p className='text-secondary text-md'>أمثلة واقعية يمكنك تطبيقها اليوم</p>
            </div>
          </div>
          <div className="header-card py-0 p-1 flex items-center overflow-hidden justify-center relative z-1 group hover:scale-100 hover:bg-main-subtle">
            <div className="absolute group-hover:hidden w-[200%] h-10 z-0 animate-[spin_2s_linear_infinite] bg-linear-to-t from-main to-main-subtle m-1"></div>
            <div className='w-full py-3 bg-secondary-strong h-full relative z-1 group-hover:bg-main-subtle'>
              <h4 className='text-main text-3xl'><i className="fa-solid fa-handshake"></i></h4>
              <p className='group-hover:text-main-half text-white text-2xl my-0.5 font-bold'>المجتمع</p>
              <p className='text-secondary text-md'>تعلم مع آلاف المصورين</p>
            </div>
          </div>
          <div className="header-card py-0 p-1 flex items-center overflow-hidden justify-center relative z-1 group hover:scale-100 hover:bg-main-subtle ">
            <div className="absolute group-hover:hidden w-[200%] h-10 z-0 animate-[spin_2s_linear_infinite] bg-linear-to-t from-main to-main-subtle m-1"></div>
            <div className='w-full py-3 bg-secondary-strong h-full relative z-1 group-hover:bg-main-subtle'>
              <h4 className='text-main text-3xl'><i className="fa-solid fa-arrows-rotate"></i></h4>
              <p className='group-hover:text-main-half text-white text-2xl my-0.5 font-bold'>دائماً محدث</p>
              <p className='text-secondary text-md'>أحدث الاتجاهات وأفضل الممارسات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* authors */}
    <section className="authors py-10 bg-black">
      <div className="top py-10 my-5 text-center">
        <div className="m-auto bg-main-subtle text-sm rounded-full px-3 py-2 text-main w-fit border-main-subtle border">
          <span className='align-middle bg-main inline-block size-2 rounded-full animate-pulse'></span><div className=" ms-1 inline-block align-middle relative bg-main rounded-full size-2"><span className='inset-0 align-middle absolute bg-main inline-block size-2  animate-ping rounded-full'></span></div>        فريقنا
        </div>
        <h2 className='text-white text-4xl font-bold my-3'>تعرف على كتابنا</h2>
        <p className='text-secondary text-lg '>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 myContainer lg:px-20 my-5'>
        <AuthorCard authors={authors} />
      </div>
    </section>
    <section className='faq  from-main-subtle bg-main-half  to-main bg-linear-300 py-10'>
      <div className="myContainer text-center text-white lg:w-1/2">
        <h2 className='text-4xl font-bold'>لديك أسئلة؟ دعنا نتحدث!</h2>
        <p className='text-lg my-6'>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>
      </div>
      <div className="max-md:flex-col my-5 flex justify-center gap-4 items-center ">
        <button className='py-4  px-6 rounded-xl text-white font-bold bg-black hover:-translate-y-1 transition'><i className="fa-solid fa-envelope me-2"></i> تواصل معنا</button>
        <Link to={"/blog"}><button className='py-4 cursor-pointer px-6 rounded-xl border text-white font-bold border-white bg-transparent hover:bg-white hover:text-black transition'>تصفح المقالات</button></Link>
      </div>
    </section>
  </div>
} 