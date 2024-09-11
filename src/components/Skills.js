import React from 'react'
import IconCloud from "@/components/magicui/icon-cloud";


const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    // "amazonaws",
    // "firebase",
    "vercel",
    "postman",
    // "docker",
    "git",
    "github",
    // "gitlab",
    "visualstudiocode",
    "androidstudio",
    "youtube",
    "bootstrap",
    "tailwindcss",
    "mongodb",
    "python",
    "figma",
];

function Skills() {
    return (
        <>
            {/* <div className=' flex justify-center items-center'>
                <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div> */}

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Frameworks </h1>
                <div className=' flex blackish gap-4'>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className=' h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>React</h1>
                    </div>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className=' bg-white rounded-full h-10 border-white border' alt="" />
                        <h1 className=' text-2xl ml-2'>Next.js</h1>
                    </div>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" className=' bg-white rounded-full h-10 border-white border' alt="" />
                        <h1 className=' text-2xl ml-2'>Express.js</h1>
                    </div>
                </div>
            </div>

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Languages </h1>
                <div className=' flex blackish gap-4'>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className='rounded-full h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>Javascript</h1>
                    </div>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" className='rounded-full h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>Python</h1>
                    </div>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" className='rounded-full h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>Java</h1>
                    </div>
                </div>
            </div>

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Deployment </h1>
                <div className=' flex blackish gap-4'>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='bg-white border border-white rounded-full h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>Github</h1>
                    </div>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png" className='bg-white border border-white rounded-full h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>Vercel</h1>
                    </div>
                    <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                        <img src="https://www.gstatic.com/devrel-devsite/prod/vff8c7d35de8ade382e79c3b9a923182d876d284b6ae43035fbefc80d49042a6e/firebase/images/touchicon-180.png" className=' rounded-full h-10' alt="" />
                        <h1 className=' text-2xl ml-2'>Firebasse</h1>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Others</h1>

                <div className=' flex gap-4'>
                    <div className=' flex blackish gap-4'>
                        <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" className='rounded-full h-10' alt="" />
                            <h1 className=' text-2xl ml-2'>Node.js</h1>
                        </div>
                    </div>
                    <div className='flex blackish gap-4'>
                        <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" className='rounded-full h-10 w-10 object-contain' alt="" />
                            <h1 className=' text-2xl ml-2'>Tailwind</h1>
                        </div>
                    </div>
                    <div className='flex blackish gap-4'>
                        <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-6 py-2.5'>
                            <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" className='rounded-full h-10 ' alt="" />
                            <h1 className=' text-2xl ml-2'>Mongodb</h1>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Skills
