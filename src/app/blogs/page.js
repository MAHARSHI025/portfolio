import React from 'react'
import TextReveal from "@/components/magicui/text-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Getin from '@/components/Getin';

function page() {
    return (
        <>
            <div>
                <div className="z-10 flex min-h-[10rem] items-center justify-center rounded-lg  bg-white dark:bg-black border-black m-6">
                    <TextReveal text="Magic UI will change the way you design." />
                </div>

                <VelocityScroll
                    text="Web App Developer"
                    default_velocity={5}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />


                <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black border-black m-6">
                    {/* <TextReveal text="Magic UI will change the way you design." /> */}
                    <Getin></Getin>
                </div>

            </div>

        </>
    )
}

export default page
