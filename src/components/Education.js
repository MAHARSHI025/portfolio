import React from 'react'

function Education() {
    return (
        <>
            <div className=' mt-10'>
                <h1 className='text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-2'>Education </h1>

                <div className='flex justify-between  gap-4 mt-4'>
                    <div className='flex gap-4' >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OHlFTYrhtb4eRjBR76aoMbRYFDQbcN6DHw&s" className=' h-14 rounded-full border border-x-gray-700' alt="" />
                        <div>
                            <h1 className='text-lg font-semibold tracking-tighter sm:text-lg xl:text-lg/none mb-2'>Sal college of engineering </h1>
                            <h3>Computer engineering</h3>
                        </div>
                    </div>
                    <div className='block'>
                        <h3 className=''>Running</h3>
                    </div>
                </div>
                <div className='flex justify-between  gap-4 mt-4'>
                    <div className='flex gap-4' >
                        <img src="https://student.gtu.ac.in/assets/img/fnewgtulogo.png" className=' h-14 rounded-full border border-x-gray-700' alt="" />
                        <div>
                            <h1 className='text-lg font-semibold tracking-tighter sm:text-lg xl:text-lg/none mb-2'>Gujarat technology university </h1>
                            <h3>Bachelor's of engineering</h3>
                        </div>
                    </div>
                    <div className='block'>
                        <h3 className=''>2022-2026</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
