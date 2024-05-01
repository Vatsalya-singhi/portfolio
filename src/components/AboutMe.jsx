/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { aboutmebg } from '../utils';


const AboutMe = () => {

    const AboutMeList = [
        "My expertise spans across the spectrum of Full Stack development, from designing interactive user interfaces to implementing robust backend systems.",
        "Outside of work, I'm passionate about staying updated with the latest technologies and methodologies, constantly seeking opportunities to enhance my skill set. ",
        "If you're in search of a technically proficient Full Stack Developer who can hit the ground running and contribute to your team's success, let's connect and discuss how I can add value to your projects.",
    ];

    return (
        <section id="AboutMe" className="w-full nav-height bg-zinc relative screen-max-width">

            {/* md:px-10 */}
            <div className="h-5/6 w-full rounded-lg flex items-center justify-center md:justify-start">

                <div className="w-full h-full flex flex-col justify-between md:w-1/2 max-md:px-5">

                    <div className="flex-none">
                        <div className="flex flex-col items-center md:items-start pt-10 lg:px-16 md:px-4 sm:px-10">
                            <p className="text-white text-5xl uppercase md:tracking-widest roboto-slab-name underline underline-offset-4 decoration-2 decoration-white-500">
                                About
                            </p>
                            <p className="text-white text-pretty md:text-balance text-center pt-0.5">
                                vatsalya.singhi@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center lg:px-16 md:px-4 sm:px-10">
                        {
                            AboutMeList.map((str, index) => (
                                <p key={index} className="text-white text-pretty text-center md:text-left py-1
                                md:text-lg tracking-normal lg:tracking-wide lg:leading-normal">
                                    {str}
                                </p>
                            ))
                        }
                    </div>

                    <div className="flex-none py-4">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <h1 className="px-2">
                                Schmalkalden, Thuringia
                            </h1>
                        </div>
                    </div>

                </div>

                <div className="w-full h-full md:w-1/2 bg-cover bg-no-repeat bg-center max-md:bg-none max-md:hidden"
                    style={{ backgroundImage: `url(${aboutmebg})` }}>
                </div>

            </div>

        </section>

    )
}

export default AboutMe;