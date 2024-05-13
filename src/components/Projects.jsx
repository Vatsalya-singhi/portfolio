/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { images4, project1, chatGPT } from '../utils';
import { pauseImg, playImg, replayImg } from "../utils";

const Projects = () => {

    const projectList = [
        {
            name: "WebRTC Application with Virtual Board integration",
            description: "Building a video call app integrated with a virtual board to interact and collaborate using Web Sockets and WebRTC.",
            photo: project1,
            link: "https://vatsalya-singhi4316.medium.com/webrtc-application-with-virtual-board-integration-using-ionic-fc7f2855d66f",
            specs: [],
        },
        {
            name: "VSChatGPT",
            description: "VSChatGPT is an extension for Visual Studio Code that integrates the OpenAI ChatGPT AI into VS Code editor. Find my extension on Microsoft Marketplace.",
            photo: chatGPT,
            link: "https://github.com/Vatsalya-singhi/vsopenai",
            specs: [],
        },
        {
            name: "UML Diagram Builder using y.js",
            description: "UML Diagram Builder using y.js",
            photo: chatGPT,
            link: "https://github.com/Vatsalya-singhi/collaborative-UML-diagram",
            specs: [],
        },
        {
            name: "Smart Light Management using Pinecone BL602",
            description: "Smart Light Management using Pinecone BL602",
            photo: chatGPT,
            link: "https://github.com/Vatsalya-singhi/smart-light-management-using-pinecone-bl602",
            specs: [],
        },
        {
            name: "YouTube Ad Accelerator Chrome Extension",
            description: "The YouTube Ad Accelerator is a Chrome extension designed to enhance your YouTube watching experience by automating the process of skipping ads, muting them, and accelerating the playback rate of ad videos. This extension does not block or disable ads; it simply streamlines the viewing process.",
            photo: chatGPT,
            link: "https://github.com/Vatsalya-singhi/yt-ad-accelerator",
            specs: [],
        },
    ];

    const duration = 5 * 1000;

    const imageRef = useRef([]);
    const imageDivRef = useRef([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, duration); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, [duration, isPlaying, projectList.length]);


    useEffect(() => {
        gsap.to("#slider", {
            transform: `translateX(${-100 * currentIndex}%)`,
            duration: 2,
            ease: "power2.inOut",
        });
    }, [currentIndex]);


    const handlePlayPause = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const handleReplay = () => {
        setCurrentIndex(0);
        setIsPlaying(true);
    };

    const pillClick = (index) => {
        setCurrentIndex(index);
        setIsPlaying(true);
    }

    return (
        <section id="Projects" className="w-screen overflow-hidden h-full common-padding bg-black">
            <div className="screen-max-width">

                <div className="mb-12 w-full md:flex items-end justify-between">
                    <div className="flex flex-col items-center md:items-start pt-10 lg:px-16 md:px-4 sm:px-10">
                        <p className="link text-white text-5xl uppercase md:tracking-widest roboto-slab-name underline underline-offset-4 decoration-2 decoration-white-500">
                            Projects
                        </p>
                        <p className="link text-white capitalize text-pretty md:text-balance text-center pt-0.5">
                            Art of Software Alchemy
                        </p>
                    </div>
                </div>


                {/* Video Carousel */}
                <>
                    <div className="flex items-center" id="slider" >
                        {projectList.map(({ name, description, photo, link, specs }, index) => (
                            <div key={index} className="sm:pr-20 pr-10" ref={(el) => (imageDivRef.current[index] = el)}>
                                <div className="video-carousel_container">
                                    <div className="flex-center overflow-hidden bg-zinc">

                                        {/* card */}
                                        <a key={index} id="video" ref={(el) => (imageRef.current[index] = el)} href="#" className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-lg bg-zinc hover:bg-gray-800 border-gray-700">
                                            <img className="object-cover w-full rounded-t-lg md:w-64 md:rounded-none md:rounded-s-lg h-48 md:h-auto"
                                                src={photo} alt="" loading="lazy" />
                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{name}</h3>
                                                <time className="block mb-2 text-sm font-normal text-gray-500">{description}</time>
                                            </div>
                                        </a>
                                        {/* card */}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="relative flex-center mt-10">
                        {/* pill buttons */}
                        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                            {
                                projectList.map((_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => pillClick(i)}
                                        className={`mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer hover:bg-white ${currentIndex == i ? 'bg-white' : 'bg-gray-200'}`}
                                    >
                                        <span
                                            className="absolute h-full w-full rounded-full"
                                        />
                                    </span>
                                ))}
                        </div>
                        {/* play replay buttons */}
                        <button className="control-btn">
                            <img
                                src={(currentIndex == projectList.length - 1) ? replayImg : !isPlaying ? playImg : pauseImg}
                                alt={(currentIndex == projectList.length - 1) ? "replay" : !isPlaying ? "play" : "pause"}
                                onClick={
                                    (currentIndex == projectList.length - 1)
                                        ? () => handleReplay()
                                        : !isPlaying
                                            ? () => handlePlayPause()
                                            : () => handlePlayPause()
                                }
                            />
                        </button>

                    </div>
                </>

            </div>
        </section>
    )

}


export default Projects;