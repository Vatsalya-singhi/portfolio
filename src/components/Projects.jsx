/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { collaborative_uml_diagram, vschatgpt, uml_diagram_using_yjs, smart_light_management, youtube_ad_accelerator } from '../utils';

const Projects = () => {

    const projectList = [
        {
            name: "WebRTC Application with Virtual Board integration",
            description: "Building a video call app integrated with a virtual board to interact and collaborate using Web Sockets and WebRTC.",
            photo: collaborative_uml_diagram,
            link: "https://vatsalya-singhi4316.medium.com/webrtc-application-with-virtual-board-integration-using-ionic-fc7f2855d66f",
            specs: [],
            colspan: 6,
        },
        {
            name: "VSChatGPT",
            description: "VSChatGPT is an extension for Visual Studio Code that integrates the OpenAI ChatGPT AI into VS Code editor.",
            photo: vschatgpt,
            link: "https://github.com/Vatsalya-singhi/vsopenai",
            specs: [],
            colspan: 6,
        },
        {
            name: "UML Diagram Builder using y.js",
            description: "UML Diagram Builder using y.js",
            photo: uml_diagram_using_yjs,
            link: "https://github.com/Vatsalya-singhi/collaborative-UML-diagram",
            specs: [],
            colspan: 6,
        },
        {
            name: "Smart Light Management using Pinecone BL602",
            description: "Smart Light Management using Pinecone BL602",
            photo: smart_light_management,
            link: "https://github.com/Vatsalya-singhi/smart-light-management-using-pinecone-bl602",
            specs: [],
            colspan: 6,
        },
        {
            name: "YouTube Ad Accelerator Chrome Extension",
            description: "The YouTube Ad Accelerator is designed to automate skipping ads, muting them and accelerating the playback rate of ad videos.",
            photo: youtube_ad_accelerator,
            link: "https://github.com/Vatsalya-singhi/yt-ad-accelerator",
            specs: [],
            colspan: 6,
        },
    ];

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>

            <section id="Projects" className="w-screen overflow-hidden h-full common-padding bg-black">

                <div className="screen-max-width">

                    <div className="mb-12 w-full md:flex items-end justify-between">
                        <div className="flex flex-col items-center md:items-start pt-10 lg:px-16 md:px-4 sm:px-10">
                            <p className="link text-white text-5xl uppercase md:tracking-widest roboto-slab-name underline underline-offset-4 decoration-2 decoration-white-500">
                                Projects
                            </p>
                            {/* <p className="link text-white capitalize text-pretty md:text-balance text-center pt-0.5">
                                Art of Software Alchemy
                            </p> */}
                        </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                        {projectList.map(({ name, description, photo, link, specs, colspan }, index) => (
                            <div key={index} className="rounded-xl flex-center py-5 px-5">
                                {/* card */}
                                <a key={index} href={link} target="_blank" className="w-full h-full flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-lg bg-zinc hover:bg-gray-800 border-gray-700">
                                    <img className="object-contain w-full rounded-t-lg md:w-64 md:rounded-none md:rounded-s-lg h-48 md:h-auto"
                                        src={photo} />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{name}</h3>
                                        <time className="block mb-2 text-sm font-normal text-gray-500">{description}</time>
                                    </div>
                                </a>
                                {/* card */}
                            </div>
                        ))}
                    </div>

                </div>

            </section>

        </ErrorBoundary>

    )

}


export default Projects;