/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Experience = () => {

    const ExperienceList = [
        {
            company: "Siemens Healthineers",
            role: "Working Student",
            location: "Erlangen, Bavaria, Germany",
            link: "https://linkedin.com/company/siemens-healthineers/",
            date: "June 2023",
            description: "Developed robust and modular front-end components using Angular and microservices in Django, contributing to the platform's scalability. Applied advanced DevOps methodologies, including Docker and Kubernetes, showcasing proficiency in modern software development practices.",
            skillTags: ["Angular", "Bootstrap", "Django", "Docker", "Kubernetes"],
        },
        {
            company: "ZEISS Group",
            role: "Working Student",
            location: "Oberkochen, Baden-Württemberg, Germany",
            link: "https://www.linkedin.com/company/zeiss/",
            date: "September 2022",
            description: "Designed and developed modular components for a Cloud-based machine learning application using React, enhancing efficiency and scalability. Employed test-driven development with React Testing Library to ensure code quality and decrease manual testing efforts.",
            skillTags: ["React", "Tailwind CSS", "Chart.js", "React Testing Library"],
        },
        {
            company: "CanGo Networks",
            role: "Software Engineer",
            location: "Chennai, India",
            link: "https://www.linkedin.com/company/cango-networks/",
            date: "September 2020",
            description: "Engineered robust cross-platform mobile apps with native functionalities to accelerate data collection, processing, and analysis, while optimizing telecom operators processes. Developed interactive web applications in Angular to deliver comprehensive network analytics to clients. Instrumental in creating a scan and tag app used by about 500 on-ground staff, leading to a 10x reduction in process time and awarded for it.",
            skillTags: ["Angular", "Material UI", "Ionic", "Spring Boot", "D3.js", "Jasmine", "Capacitor"],
        },
        {
            company: "Gethu Games",
            role: "Software Engineer",
            location: "Chennai, India",
            link: "https://www.linkedin.com/company/gethu-games/",
            date: "September 2018",
            description: "Proficiently designed and developed both web and mobile applications, leveraging expertise in Angular, Ionic, Express.js, and Google Firebase. Implemented TypeScript resulting in a 30% reduction in bug incidents and enhancing code maintainability. Demonstrated ability to navigate multiple concurrent projects, ensuring timely delivery and collaborative success. Additionally, contributed to research-oriented initiatives and research projects, evaluating product viability and innovation potential.",
            skillTags: ["Angular", "Ionic", "Capacitor", "Material UI", "Express.js", "Firebase", "TypeScript", "React Native"],
        },
    ];

    useGSAP(() => {
        // gsap.to('#title', { opacity: 1, y: 0 });
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    }, [])

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <section id="Experience" className="w-screen common-padding h-full bg-black">
                <div className="screen-max-width">

                    <div className="lg:px-16 md:px-4 sm:px-10">
                        {/* header */}
                        <div className="flex flex-col items-center md:items-start mb-12 pt-10">
                            <p className="text-white text-5xl uppercase md:tracking-widest roboto-slab-name underline underline-offset-4 decoration-2 decoration-white-500">
                                Experience
                            </p>
                            <p className="text-white text-pretty md:text-balance text-center pt-0.5">
                                Art of Software Alchemy
                            </p>
                        </div>
                        {/* content */}
                        <div className="flex-center">
                            <ol className="relative border-s border-gray-200 dark:border-gray-700 sm:pr-10 pr-10">
                                {ExperienceList.map(({ company, role, location, link, date, description, skillTags }, index) => (
                                    <li key={index}
                                        className={`w-full rounded bg-zinc hover:bg-gray-800 px-4 py-2 ms-6 ${(index == ExperienceList.length - 1) ? "mb-1" : "mb-5"}`}>
                                        <span className="absolute flex-center w-6 h-6 bg-white-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900 bg-black">
                                            <svg className="w-2.5 h-2.5 text-white-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </span>
                                        {/* role */}
                                        <p className="text-lg font-semibold">{role}</p>
                                        {/* company startdate enddate */}
                                        <time className="flex flex-wrap items-center mb-2 text-sm font-normal leading-none text-gray-500">
                                            <a className="hover:underline" href={link} target="_blank">
                                                {company}
                                            </a>
                                            <span className="mx-1 font-black text-2xl"> · </span>
                                            <span> {date}  {index == 0 && (<span> - (Present)</span>)} </span>
                                        </time>
                                        {/* location */}
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{location}</time>
                                        {/* description */}
                                        <p className="mb-4 text-wrap text-base font-normal text-gray-500">{description}</p>
                                        {/* skill list */}
                                        <div className="max-sm:hidden">
                                            {skillTags.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="mr-4 mb-2 px-4 py-2 inline-flex items-center
                                                    text-sm font-medium 
                                                    border 
                                                    rounded-lg 
                                                    hover:text-white-700 
                                                    focus:z-10 focus:ring-4 focus:outline-none focus:text-white-700
                                                    bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>

            </section>
        </ErrorBoundary>
    )
}

export default Experience;