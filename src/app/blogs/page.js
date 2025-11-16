import React from 'react'

import { Timeline } from '@/components/ui/timeline';
import Chess from '@/components/Chess';

function page() {
   const puzzle = {
    fen: "r1bq2r1/b4pk1/p1pp1p2/1p2pP2/1P2P1PB/3P4/1PPQ2P1/R3K2R w",
    sequence: [
        "Qh6", "Kxh6",
        "Bxf6#"
    ],
    description: "Easy challenge — mate in 2 with a Queen sacrifice"
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
