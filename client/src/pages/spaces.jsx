import React from 'react'
import { Footer } from "@/components";

import { SpaceCard } from "@/widgets/cards";

export function Spaces() {
    return (
        <>
            <div className="w-screen h-screen bg-cover bg-center bg-[url('SVGs/spaces.svg')] flex-row mx-auto my-auto pt-20">
                <div className="mx-auto p-16"> <SpaceCard className="mx-auto p-16"/> </div>
            </div>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div> 
        </>
        
    );
}

export default Spaces;