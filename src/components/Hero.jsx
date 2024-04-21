/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { herobg3 } from '../utils';

const Hero = () => {

    useGSAP(() => {
        gsap.to('#cta', { opacity: 1, y: -50, delay: 1 });
    }, [])

    return (
        <section className="w-full nav-height bg-black relative screen-max-width">

            <div className="h-5/6 w-full rounded-lg flex items-center justify-center md:justify-start md:pl-16
            bg-cover bg-no-repeat bg-center max-sm:bg-none">
                {/* style={{ backgroundImage: `url(${herobg3})` }} */}

                {/* <p id="hero" className="hero-title">Vatsalya Singhi</p> */}
                {/* <div className="md:w-10/12 w-9/12">
                </div> */}

                <div className="flex flex-col w-full md:w-1/2">
                    {/* filter backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-400 */}
                    <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 p-0 max-sm:p-3 rounded-lg">
                        <p className="text-white text-5xl uppercase md:tracking-widest">Vatsalya</p>
                        <p className="text-white text-5xl uppercase md:tracking-widest font-black">Singhi</p>
                        <p className="text-white text-xl capitalize md:tracking-widest md:leading-loose">Full Stack Software Engineer</p>
                    </div>

                    <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 p-0 max-sm:p-3 rounded-lg">
                        <p className="text-white text-pretty md:text-balance text-center">
                            Passionate Full Stack Developer crafting clean, impactful software solutions from concept to deployment, with a knack for robust, clean code.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;