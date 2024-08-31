/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Languages = () => {

    const languageList = [
        {
            name: "English",
            level: "Business fluent"
        },
        {
            name: "Deutsch",
            level: "Basic knowledge"
        },
        {
            name: "Hindi",
            level: "Proficient"
        },
    ]

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <div className="w-full h-full p-4 rounded-xl shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

                <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                    <span>Linguistics</span>
                </h3>

                <ul className="my-4">
                    {languageList.map(({ name, level }, index) => (
                        <li key={index}
                            className={`w-full h-full rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 scale_on_hover ${(index == languageList.length - 1) ? "mb-1" : "mb-5"}`}>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                {name}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{level}</time>
                        </li>
                    ))}
                </ul>

            </div >
        </ErrorBoundary>
    )
}

export default Languages;