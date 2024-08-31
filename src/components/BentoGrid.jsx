/* eslint-disable no-unused-vars */
import React from 'react';
import { ErrorBoundary } from "react-error-boundary";

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
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <section id="BentoGrid" className="w-screen common-padding h-full bg-zinc">

                <div className="screen-max-width">

                    <div className="grid grid-cols-12 gap-4 h-full">
                        <div className="max-md:col-span-12 md:col-span-4">
                            <Education />
                        </div>
                        <div className="max-md:col-span-12 md:col-span-8">
                            <Tech />
                        </div>
                        <div className="max-md:col-span-12 md:col-span-7">
                            <Publications />
                        </div>
                        <div className="max-md:col-span-12 md:col-span-5">
                            <Languages />
                        </div>
                        <div className="max-md:col-span-12 md:col-span-5">
                            <Contact />
                        </div>
                        <div className="max-md:col-span-12 md:col-span-7">
                            <Testimonials />
                        </div>
                    </div>

                </div>
            </section>
        </ErrorBoundary>

    )

}

export default BentoGrid;