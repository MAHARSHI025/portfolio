import React from 'react'

import { Timeline } from '@/components/ui/timeline';
import Chess from '@/components/Chess';

function page() {
    const puzzle = {
        fen: "2K3NR/1PP3PP/5P2/1n2P3/1B6/4bp1p/pp3ppp/1k1r4 b - - 0 1",
        sequence: ["Na7+", "Kb8", "Rd8+"],
    };



    return (
        <>
            <div className=' mb-50'>
                <div className="home mb-16">
                    <div className="innerhome">
                        <Timeline></Timeline>
                    </div>
                </div>
                <Chess puzzle={puzzle}></Chess>


            </div>

        </>
    )
}

export default page
