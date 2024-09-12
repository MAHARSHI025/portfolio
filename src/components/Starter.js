import React from 'react'
import HyperText from "@/components/magicui/hyper-text";


function Starter() {
    return (
        <>
            <div className=' flex  gap-6 justify-between'>
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2"> Hi, I&apos;m Maharshi 👋</h2>
                    <h3 className=' text-wrap max-w-96 text-xl rough'>Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.</h3>
                    <HyperText
                        className="text-4xl font-bold text-black dark:text-white"
                        text="Developer!!!"
                        animateOnLoad
                        duration={2000}
                    />
                </div>
                <div>
                    <img src="images\IMG_4746.JPG" className=' profileimg' alt="" />
                </div>
            </div>

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>About </h1>
                <h3 className='rough'>At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called buildspace sf1.</h3>
            </div>

        </>
    )
}

export default Starter
