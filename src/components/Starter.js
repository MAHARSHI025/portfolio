import React from 'react'
import HyperText from "@/components/magicui/hyper-text";


function Starter() {
    return (
        <>
            <div className=' flex gap-6 justify-between'>
                <div className='mini'>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2"> Hi, I&apos;m Maharshi 👋</h2>
                    <h3 className=' text-wrap max-w-96 text-sm rough'>Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Social media.</h3>
                    <HyperText
                        className="text-4xl font-bold text-black dark:text-white typer"
                        text="Developer!!!"
                        animateOnLoad
                        duration={2000}
                    />
                </div>
                <div className='divimage'>
                    <img src="images\IMG_4746.JPG" className=' profileimg aspect-square h-full w-full' alt="" />
                </div>
            </div>

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>About </h1>
                <h3 className='rough text-balance'>At the end of 12th grade, I decided to become a software engineer. As a dedicated software and web developer, I focus on building seamless digital solutions tailored to user needs. With a strong foundation in modern frameworks and programming languages, I excel at designing, developing, and deploying scalable applications. My commitment to staying updated with the latest industry trends ensures that I deliver innovative and reliable software products. </h3>
            </div>

        </>
    )
}

export default Starter
