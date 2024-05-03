/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// skills - list of icons with title set as tech name
const Tech = () => {

    const techList = [
        { tech: "Angular", expertise: "80", color: "#dd0031", icon: "https://angular.io/assets/images/logos/angular/angular.svg" },
        { tech: "React", expertise: "70", color: "#58c4dc" },
        { tech: "Ionic", expertise: "70", color: "#176bff" },
        { tech: "Tailwind css", expertise: "70", color: "#38bdf8" },
        { tech: "Material UI", expertise: "70", color: "#007fff" },
        { tech: "Bootstrap", expertise: "70", color: "#7210f4" },
        { tech: "Express.js", expertise: "70", color: "" },
        { tech: "Django", expertise: "70", color: "#44b78b" },
        { tech: "Spring Boot", expertise: "70", color: "#80ea6" },
        { tech: "WebSockets", expertise: "70", color: "" },
        { tech: "WebRTC", expertise: "70", color: "" },
        { tech: "MQTT", expertise: "70", color: "" },
        { tech: "Kafka", expertise: "70", color: "" },
        { tech: "Docker", expertise: "70", color: "" },
        { tech: "Kubernetes", expertise: "70", color: "" },
        { tech: "MySQL", expertise: "70", color: "" },
        { tech: "MongoDB", expertise: "70", color: "#00684A" },
        { tech: "Redis", expertise: "70", color: "" },
        { tech: "Firebase", expertise: "70", color: "" },
    ]


    return (
        <div className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Tech Arsenal
            </h3>

            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 flex items-center gap-1 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
                <span>My Stack</span>
            </time>

            <ul className="my-4 space-y-3">

                {
                    techList.map(({ tech, expertise, color, icon }, index) => (
                        <Fragment key={index}>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-blue-700 dark:text-white capitalize">{tech}</span>
                                <span className="text-sm font-medium text-blue-700 dark:text-white">{expertise}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-white h-2.5 rounded-full" style={{ width: `${expertise}%` }}></div>
                            </div>
                        </Fragment>
                    ))
                }

            </ul>

        </div>
    )

}

export default Tech;