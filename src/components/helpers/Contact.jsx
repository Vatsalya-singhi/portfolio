/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {

    // const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [isLinkedin, setIsLinkedin] = useState(false);
    const [isGithub, setIsGithub] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isGmail, setIsGmail] = useState(false);

    const handleMouseEnter = (index) => {
        switch (index) {
            case 0:
                setIsLinkedin(true);
                break;
            case 1:
                setIsGithub(true);
                break;
            case 2:
                setIsMedium(true);
                break;
            case 3:
                setIsGmail(true);
                break;
            default:
                break;
        }
    };
    const handleMouseLeave = (index) => {
        switch (index) {
            case 0:
                setIsLinkedin(false);
                break;
            case 1:
                setIsGithub(false);
                break;
            case 2:
                setIsMedium(false);
                break;
            case 3:
                setIsGmail(false);
                break;
            default:
                break;
        }
    };

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <div id="Contact" className="w-full h-full p-4 rounded-xl shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

                <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    <span>Connect with Me</span>
                </h3>

                <ul className="my-4 space-y-3">
                    {/* Linkedin */}
                    <li className="scale_on_hover">
                        <a
                            className="flex items-center p-3 text-base font-bold rounded-lg group bg-zinc hover:bg-gray-800"
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                            href="https://www.linkedin.com/in/vatsalyasinghi/"
                            target="_blank">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>

                            <span className="tracking-wide flex-1 ms-3 whitespace-nowrap overflow-clip text-md font-semibold text-white">@vatsalyasinghi</span>

                            <span className="max-lg:hidden inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${isLinkedin ? "visible" : "invisible"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    {/* Github */}
                    <li className="scale_on_hover">
                        <a
                            className="flex items-center p-3 text-base font-bold rounded-lg group bg-zinc hover:bg-gray-800"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                            href="https://github.com/Vatsalya-singhi"
                            target="_blank">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>

                            <span className="tracking-wide flex-1 ms-3 whitespace-nowrap overflow-clip text-md font-semibold text-white">@Vatsalya-singhi</span>

                            <span className="max-lg:hidden inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${isGithub ? "visible" : "invisible"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    {/* Medium */}
                    <li className="scale_on_hover">
                        <a
                            className="flex items-center p-3 text-base font-bold rounded-lg group bg-zinc hover:bg-gray-800"
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                            href="https://medium.com/@vatsalya-singhi4316"
                            target="_blank">

                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="white">
                                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
                            </svg>

                            <span className="tracking-wide flex-1 ms-3 whitespace-nowrap overflow-clip text-md font-semibold text-white">@vatsalya-singhi4316</span>

                            <span className="max-lg:hidden inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${isMedium ? "visible" : "invisible"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    {/* Gmail */}
                    <li className="scale_on_hover">
                        <a
                            className="flex items-center p-3 text-base font-bold rounded-lg group bg-zinc hover:bg-gray-800"
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                            href="mailto:vatsalya.singhi@gmail.com"
                            target="_blank">

                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>

                            <span className="tracking-wide flex-1 ms-3 whitespace-nowrap overflow-clip text-md font-semibold text-white">@vatsalya.singhi</span>

                            <span className="max-lg:hidden inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${isGmail ? "visible" : "invisible"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
        </ErrorBoundary>

    )

}

export default Contact;