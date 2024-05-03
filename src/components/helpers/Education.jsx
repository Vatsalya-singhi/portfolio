/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Education - gallery of cards with dot based nav and auto scroll
const Education = () => {

    const EducationList = [
        {
            college: "Schmalkalden Univerity of Applied Science",
            degree: "MSc in Applied Computer Science",
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
        <div className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Education
            </h3>

            <ul className="my-4 space-y-3">
                {EducationList.map(({ college, degree, location, link, fromDate, toDate }, index) => (
                    <li key={index}
                        className={`w-full h-full rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 ${(index == EducationList.length - 1) ? "mb-1" : "mb-5"}`}>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            {degree}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{college}</time>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{fromDate} · {toDate}</time>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{location}</time>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Education;