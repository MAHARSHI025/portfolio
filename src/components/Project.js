import React from 'react'

function Project() {
    return (
        <>
            <div className=' mt-16 '>

                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none mb-2 text-"> Check out my latest work</h2>
                <h3 className=' text-wrap text-xl rough'>Software Engineer turned Entrepreneur. I love building things and helping . Very active on Twitter.</h3>

                <div className=' videoradius mt-8 border border-gray-500 m-8 mb-0'>
                    <video src="video\Untitled design.mp4" loop autoPlay playsInline muted className=''></video>

                    <div className='videosetter px-4'>
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none mb-2 text-">Thouhter app</h2>
                        <h3 className=' text-wrap text-xl bg-white '>Software Engineer turned Entrepreneur. I love building things and helping . Very active on Twitter.</h3>
                        <h3 className=' text-wrap text-sm rough mt-4'>With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.</h3>
                        <div className=' flex text-black gap-4 mt-4 flex-wrap'>
                            <h1 className='roughbg px-2 rounded-lg'>Next.js</h1>
                            <h1 className='roughbg px-2 rounded-lg'>Node.js</h1>
                            <h1 className='roughbg px-2 rounded-lg'>Mongodb</h1>
                            <h1 className='roughbg px-2 rounded-lg'>Tailwindcss</h1>
                            <h1 className='roughbg px-2 rounded-lg'>Vercel</h1>
                            <h1 className='roughbg px-2 rounded-lg'>React</h1>
                        </div>
                        <div className=' mt-4 flex gap-4'>
                            <a href="https://thoughter.vercel.app/">
                                <h1 className='bg-black text-white px-3 py-1 rounded-lg  flex items-center justify-between'>
                                    Website
                                    <span class="material-symbols-outlined">
                                        north_east
                                    </span></h1>
                            </a>
                            <a href="https://github.com/MAHARSHI025/portfolio" className='bg-black text-white flex items-center rounded-lg py-1 px-3 justify-between gap-2'>
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className=' bg-white rounded-full h-6' alt="" />
                                <h1 className='bg-black text-white rounded-lg  flex items-center justify-between'>
                                    Source
                                </h1>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Project
