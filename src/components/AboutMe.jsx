/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { about_me } from '../utils';


const AboutMe = () => {

    const AboutMeList = `
    My expertise spans across the spectrum of Full Stack development, from designing interactive user interfaces to implementing robust backend systems. 
    Outside of work, I'm passionate about staying updated with the latest technologies and methodologies, constantly seeking opportunities to enhance my skill set. 
    If you're in search of a technically proficient Full Stack Developer who can hit the ground running and contribute to your team's success, let's connect and discuss how I can add value to your projects.
    `;

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <section id="AboutMe" className="w-screen common-padding h-full bg-zinc">
                <div className="screen-max-width">

                    <div className="lg:px-16 md:px-4 sm:px-10">
                        {/* header */}
                        <div className="flex flex-col items-center md:items-start mb-12 pt-10">
                            <p className="text-white text-5xl uppercase md:tracking-widest roboto-slab-name underline underline-offset-4 decoration-2 decoration-white-500">
                                About
                            </p>
                            <p className="text-white text-pretty md:text-balance text-center pt-0.5">
                                A Quick Intro 🧑🏽‍💻
                            </p>
                        </div>
                        {/* content */}
                        <div className="flex items-center justify-between max-md:flex-col-reverse max-md:gap-12">
                            {/* left content */}
                            <div className="w-5/6 xs:w-5/6 sm:w-5/6 md:w-3/4 lg:w-1/2 sm:px-2">
                                <p className="text-wrap text-center md:text-left py-1 md:text-lg tracking-normal lg:tracking-wide lg:leading-normal">
                                    {AboutMeList}
                                </p>
                            </div>

                            {/* right content */}
                            {/* > tablet screen */}
                            <div className="hidden md:block h-[500px] w-[500px] bg-contain bg-no-repeat bg-center self-center"
                                style={{ backgroundImage: `url(${about_me})` }}>
                            </div>

                            {/* =< tablet screen */}
                            <div className="hidden max-md:block w-56 h-56 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 bg-contain bg-no-repeat bg-center self-center"
                                style={{ backgroundImage: `url(${about_me})` }}>
                            </div>

                        </div>

                        {/* footer */}
                        <div className="flex items-center justify-center md:justify-start pt-10">
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
            </section>
        </ErrorBoundary>

    )
}

export default AboutMe;