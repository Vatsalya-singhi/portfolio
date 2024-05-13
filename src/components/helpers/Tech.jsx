/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// skills - list of icons with title set as tech name
const Tech = () => {

    const techList = {
        "Frameworks": [
            { "tech": "Angular", "expertise": "75" },
            { "tech": "React", "expertise": "60" },
            { "tech": "Ionic", "expertise": "75" },
            { "tech": "Django", "expertise": "70" },
            { "tech": "Spring Boot", "expertise": "50" },
            { "tech": "Express.js", "expertise": "80" }
        ],
        "Frontend": [
            { "tech": "Angular", "expertise": "75" },
            { "tech": "React", "expertise": "60" },
            { "tech": "Ionic", "expertise": "75" },
            { "tech": "Tailwind CSS", "expertise": "70" },
            { "tech": "Material UI", "expertise": "80" },
            { "tech": "Bootstrap", "expertise": "80" }
        ],
        "Backend": [
            { "tech": "Express.js", "expertise": "80" },
            { "tech": "Django", "expertise": "70" },
            { "tech": "Spring Boot", "expertise": "50" }
        ],
        "Database Management": [
            { "tech": "MySQL", "expertise": "70" },
            { "tech": "MongoDB", "expertise": "70" },
            { "tech": "Redis", "expertise": "60" },
            { "tech": "Firebase", "expertise": "80" }
        ],
        "Protocols": [
            { "tech": "WebSockets", "expertise": "80" },
            { "tech": "WebRTC", "expertise": "80" },
            { "tech": "MQTT", "expertise": "70" },
            { "tech": "Kafka", "expertise": "70" }
        ],
        "Containerization": [
            { "tech": "Docker", "expertise": "60" },
            { "tech": "Kubernetes", "expertise": "40" }
        ]
    };

    return (
        <div id="Tech" className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
                <span>Tech Arsenal</span>
            </h3>

            <div className="mb-0">
                <ul className="text-sm font-medium text-left whitespace-nowrap overflow-x-auto overflow-y-hidden" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist" data-tabs-active-classes="text-white" data-tabs-inactive-classes="text-gray">
                    {
                        Object.keys(techList).map((type, index) => {
                            let str = type.replace(/\s+/g, '');
                            return (
                                <li key={index} className="me-2 inline" role="presentation">
                                    <button
                                        className={`inline-block p-4 rounded-t-lg capitalize hover:text-white hover:border-gray-300`}
                                        id={`${str}-tab`}
                                        data-tabs-target={`#${str}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`${str}`}
                                        aria-selected={`${index == 0}`}
                                    >
                                        {type}
                                    </button>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            <div id="default-tab-content">
                {
                    Object.keys(techList).map((type, index) => {
                        let str = type.replace(/\s+/g, '');
                        let arr = techList[type];
                        return (
                            <div key={index}
                                className="hidden p-4 rounded-lg bg-zinc"
                                id={`${str}`}
                                role="tabpanel"
                                aria-labelledby={`${str}-tab`}
                            >
                                <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 overflow-scroll no-scrollbar">
                                    {
                                        arr.map(({ tech, expertise }) => (
                                            <div key={tech}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-base font-medium text-blue-700 dark:text-white" title={tech}>{tech}</span>
                                                    <span className="text-sm font-medium text-blue-700 dark:text-white">{expertise}%</span>
                                                </div>
                                                {/* bg-gray-200 */}
                                                <div className="w-full rounded-full h-2.5">
                                                    <div className="bg-white h-2.5 rounded-full" style={{ width: `${expertise}%` }}></div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )

}

export default Tech;