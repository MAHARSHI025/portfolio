import React from 'react'

export function SkillBlock({ name, image }) {
    return (
        <div className=' bg-black text-white flex justify-center items-center font-semibold rounded-full px-4 py-1.5'>
            <img src={image} className=' h-8 rounded-full' alt="" />
            <h1 className=' text-xl ml-2'>{name}</h1>
        </div>
    )
}

function Skills() {
    return (
        <>


            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Frameworks </h1>
                <div className=' flex blackish flex-wrap gap-4'>
                    <SkillBlock name="React" image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                    <SkillBlock name="Next.js" image="https://cdn.worldvectorlogo.com/logos/next-js.svg" />
                    <SkillBlock name="Express.js" image="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
                </div>
          </div>  

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Languages </h1>
                <div className=' flex blackish gap-4 flex-wrap'>
                    <SkillBlock name="Javascript" image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    <SkillBlock name="Python" image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" />
                    <SkillBlock name="Typescript" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png" />
                </div>
            </div>

            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Deployment </h1>
                <div className=' flex blackish gap-4 flex-wrap'>
                    <SkillBlock name="Github" image="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    <SkillBlock name="Vercel" image="https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png" />
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Others</h1>

                <div className=' flex gap-4 flex-wrap'>
                    <div className=' flex blackish gap-4'>
                        <SkillBlock name="Node.js" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" />
                    </div>
                    <div className='flex blackish gap-4'>
                        <SkillBlock name="Tailwind" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" />
                        
                    </div>
                    <div className='flex blackish gap-4'>
                        <SkillBlock name="MongoDB" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s" />
                    </div>
                    <div className='flex blackish gap-4'>
                        <SkillBlock name="Mysql" image="https://images.seeklogo.com/logo-png/27/1/mysql-logo-png_seeklogo-273735.png" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Skills
