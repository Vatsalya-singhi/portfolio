/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
            company: "CanGo Networks (Now Viavi Solutions)",
            role: "Software Engineer",
            location: "Chennai",
            link: "https://www.linkedin.com/company/cango-networks/",
            date: "September 2020",
            description: "Engineered robust cross-platform mobile apps with native functionalities to accelerate data collection, processing, and analysis, while optimizing telecom operators processes. Developed interactive web applications in Angular to deliver comprehensive network analytics to clients. Instrumental in creating a scan and tag app used by about 500 on-ground staff, leading to a 10x reduction in process time and awarded for it.",
            skillTags: ["Angular", "Material UI", "Ionic", "Spring Boot", "D3.js", "Jasmine", "Capacitor"],
        },
        {
            company: "Gethu Games",
            role: "Software Engineer",
            location: "Chennai",
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
        <>
            {/*
            <section id="Experience" className="w-screen overflow-hidden h-full common-padding bg-black">
                <div className="screen-max-width">
                    <div className="mb-12 w-full md:flex items-end justify-between">
                        <h1 id="title" className="section-heading">Experience</h1>
                        <div className="flex flex-wrap items-end gap-5">
                            <p className="link ml-2">
                                Watch the film
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            */}

            <section id="Experience" className="w-screen overflow-hidden h-full common-padding bg-black">
                <div className="screen-max-width">

                    <div className="mb-12 w-full md:flex items-end justify-between">
                        <div className="flex flex-col items-center md:items-start pt-10 lg:px-16 md:px-4 sm:px-10">
                            <p className="link text-white text-5xl uppercase md:tracking-widest roboto-slab-name underline underline-offset-4 decoration-2 decoration-white-500">
                                Experience
                            </p>
                            <p className="link text-white capitalize text-pretty md:text-balance text-center pt-0.5">
                                Art of Software Alchemy
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center lg:px-16 md:px-4 sm:px-10">
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 sm:pr-10 pr-10">
                            {ExperienceList.map(({ company, role, location, link, date, description, skillTags }, index) => (
                                <li key={index}
                                    className={`w-full h-full rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 ms-6 ${(index == ExperienceList.length - 1) ? "mb-1" : "mb-5"}`}>
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-white-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
                                        <svg className="w-2.5 h-2.5 text-white-800 dark:text-white-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                        {role}
                                        {
                                            index == 0 &&
                                            (<span className="ms-3 px-1 bg-white-100 text-white-800 text-sm font-medium rounded dark:bg-white-900 dark:text-white-300 leading-7">
                                                (Present)
                                            </span>)
                                        }
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{company} · {date}</time>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{location}</time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                                    <div>
                                        {
                                            skillTags.map((skill, index) => (
                                                <a key={index} href="#" className="mr-4 mb-2 px-4 py-2 inline-flex items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-white-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-white-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                                    {skill}
                                                </a>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>


                </div>

            </section>
        </>
    )
}

export default Experience;