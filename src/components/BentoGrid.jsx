/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Contact from './helpers/Contact';
import Education from './helpers/Education';
import Languages from './helpers/Languages';
import Tech from './helpers/Tech';
import Testimonials from './helpers/Testimonials';
import Publications from './helpers/Publications';

const BentoGrid = () => {

    return (
        <section id="Experience" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">

                <div className="grid grid-cols-12 gap-3 p-3">
                    <div className="rounded-xl max-md:col-span-12 md:col-span-4">
                        <Education />
                    </div>
                    <div className="rounded-xl max-md:col-span-12 md:col-span-8">
                        <Tech />
                    </div>
                    <div className="rounded-xl h-fit max-md:col-span-12 md:col-span-7">
                        <Publications />
                    </div>
                    <div className="rounded-xl h-fit max-md:col-span-12 md:col-span-5">
                        <Languages />
                    </div>
                    <div className="rounded-xl h-fit max-md:col-span-12 md:col-span-5">
                        <Contact />
                    </div>
                    <div className="rounded-xl h-fit max-md:col-span-12 md:col-span-7">
                        <Testimonials />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BentoGrid;