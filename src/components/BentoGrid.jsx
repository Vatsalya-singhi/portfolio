/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Contact from './helpers/Contact';

const BentoGrid = () => {

    return (
        <section id="Experience" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Replace the following divs with your grid items */}
                    <div className="bg-black rounded-b-lg">
                        <Contact />
                    </div>
                    <div className="bg-black">Grid Item 2</div>
                    <div className="bg-black">Grid Item 3</div>
                    <div className="bg-black">Grid Item 4</div>
                    <div className="bg-black">Grid Item 5</div>
                    {/* Add more grid items as needed */}
                </div>

            </div>
        </section>
    )
}

export default BentoGrid;