import React from 'react'
import { Carousel } from "flowbite-react";

const Corousal = () => {
    return (
        <div>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <div class="flex justify-center items-center pl-10 py-10">
                     <img class="h-auto max-w-full rounded-lg" src={require("../images/img_1.jpg")} alt="..." />
                    </div>
                    <div class="flex justify-center items-center">
                    <img class="h-auto max-w-full rounded-lg" src={require("../images/img_2.jpg")} alt="..." />
                    </div>
                    <div class="flex justify-center items-center">
                    <img class="h-auto max-w-full rounded-lg" src={require("../images/img_3.jpg")} alt="..." />
                    </div>
                    <div class="flex justify-center items-center">
                     <img class="h-auto max-w-full rounded-lg" src={require("../images/img_4.jpg")} alt="..." />
                    </div>
                    
                    

                </Carousel>
            </div>
        </div>
    )
}

export default Corousal
