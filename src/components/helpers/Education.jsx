/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { aboutmebg } from '../../utils';
// Education - gallery of cards with dot based nav and auto scroll
const Education = () => {

    const EducationList = [
        {
            college: "Schmalkalden Univerity of Applied Science",
            degree: "Master's in Applied Computer Science",
            location: "Schmalkalden, Germany",
            link: "https://www.hs-schmalkalden.de/en/studying/programmes/master-degree-courses/applied-computer-science-msc",
            fromDate: "2021",
            toDate: "Present",
        },
        {
            college: "SRM Institute of Science and Technology",
            degree: "Bachelor's in Information Technology",
            location: "Chennai, India",
            link: "https://www.srmist.edu.in",
            fromDate: "2014",
            toDate: "2018",
        },
    ]

    return (
        <div id="Education" className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span>Education</span>
            </h3>

            <ul className="my-4">
                {EducationList.map(({ college, degree, location, link, fromDate, toDate }, index) => (
                    <li key={index}
                        className={`w-full h-full rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 ${(index == EducationList.length - 1) ? "mb-1" : "mb-5"}`}>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                            {degree}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                            <a className="hover:underline" href={link} target="_blank">{college}</a>
                        </time>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{fromDate} - {toDate}</time>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{location}</time>
                    </li>
                ))}
            </ul>

        </div >
    )
}

export default Education;